#!/usr/bin/env bash
# Notify Bing/Yandex of updated URLs via IndexNow after deploy.
# Key file: https://ohiovalleylandpartners.com/a7f3e91c2b8d4056e6f1a9c3d7e5b204.txt

set -euo pipefail

SITE="https://ohiovalleylandpartners.com"
KEY="a7f3e91c2b8d4056e6f1a9c3d7e5b204"
KEY_LOCATION="${SITE}/${KEY}.txt"

JSON=$(cat <<EOF
{
  "host": "ohiovalleylandpartners.com",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": [
    "${SITE}/",
    "${SITE}/sell-land/franklin-county-oh",
    "${SITE}/sell-land/belmont-county-oh",
    "${SITE}/sell-land/jefferson-county-oh",
    "${SITE}/sell-land/columbiana-county-oh",
    "${SITE}/sell-land/harrison-county-oh",
    "${SITE}/sell-land/carroll-county-oh",
    "${SITE}/sell-land/ohio-county-wv",
    "${SITE}/sell-land/marshall-county-wv",
    "${SITE}/sell-land/brooke-county-wv",
    "${SITE}/blog/sell-inherited-land-ohio-probate",
    "${SITE}/llms.txt"
  ]
}
EOF
)

curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${JSON}"

echo ""
echo "IndexNow submission complete"