#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 || $# -gt 4 ]]; then
  echo "Usage: scripts/update-member-mailer.sh /path/to/mailer.pdf YYYY-MM-DD [\"Week of Month D, YYYY\"] [parcel-count]"
  exit 1
fi

SOURCE_PDF="$1"
PUBLISHED_ISO="$2"
EDITION="${3:-Week of ${PUBLISHED_ISO}}"
PARCEL_COUNT="${4:-0}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC_DIR="$ROOT/public/member-assets"

test -f "$SOURCE_PDF"
mkdir -p "$PUBLIC_DIR"
cp "$SOURCE_PDF" "$PUBLIC_DIR/current.pdf"
pdftoppm -f 1 -singlefile -jpeg -r 140 "$SOURCE_PDF" "$PUBLIC_DIR/current-preview"

cat > "$ROOT/lib/member-mailer.ts" <<EOF
export const currentMemberMailer = {
  title: 'OVLP Weekly Deal Mailer',
  edition: '${EDITION}',
  publishedISO: '${PUBLISHED_ISO}',
  parcelCount: ${PARCEL_COUNT},
  pdfPath: '/member-assets/current.pdf',
  previewPath: '/member-assets/current-preview.jpg',
};
EOF

echo "Updated /member-mailer to ${EDITION}"
echo "Next: npm run build"
