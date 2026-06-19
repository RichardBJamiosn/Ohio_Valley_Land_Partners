#!/usr/bin/env bash
# Notify Bing/Yandex of ALL sitemap URLs via IndexNow after deploy.
# Key file: https://ohiovalleylandpartners.com/a7f3e91c2b8d4056e6f1a9c3d7e5b204.txt

set -euo pipefail

SITE="https://ohiovalleylandpartners.com"
KEY="a7f3e91c2b8d4056e6f1a9c3d7e5b204"
KEY_LOCATION="${SITE}/${KEY}.txt"
SITEMAP="${SITE}/sitemap.xml"

echo "Fetching URLs from ${SITEMAP}..."
URLS=$(curl -sS "${SITEMAP}" | sed -n 's:.*<loc>\([^<]*\)</loc>.*:\1:p')

if [ -z "${URLS}" ]; then
  echo "ERROR: No URLs found in sitemap" >&2
  exit 1
fi

COUNT=$(echo "${URLS}" | wc -l | tr -d ' ')
echo "Submitting ${COUNT} URLs to IndexNow..."

# IndexNow accepts max 10,000 URLs per request; batch in chunks of 100
BATCH=()
BATCH_NUM=0

submit_batch() {
  local n=${#BATCH[@]}
  [ "$n" -eq 0 ] && return 0
  BATCH_NUM=$((BATCH_NUM + 1))
  local url_list
  url_list=$(printf ',"%s"' "${BATCH[@]}")
  url_list="[${url_list:1}]"
  local json
  json=$(cat <<EOF
{
  "host": "ohiovalleylandpartners.com",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": ${url_list}
}
EOF
)
  echo "  Batch ${BATCH_NUM}: ${n} URLs"
  curl -sS -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json; charset=utf-8" \
    -d "${json}"
  echo ""
  BATCH=()
}

while IFS= read -r url; do
  BATCH+=("$url")
  if [ "${#BATCH[@]}" -ge 100 ]; then
    submit_batch
  fi
done <<< "${URLS}"

submit_batch

echo "IndexNow submission complete (${COUNT} URLs total)"