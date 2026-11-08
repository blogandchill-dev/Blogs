#!/usr/bin/env bash
# Build apps/web for one site and deploy it to its Cloudflare Worker.
# usage: scripts/deploy.sh gable-green|nickel-nest|macro-tuesday
set -euo pipefail
SLUG="${1:?usage: deploy.sh <site-slug>}"
case "$SLUG" in
  gable-green)   URL=https://gableandgreen.com ;;
  nickel-nest)   URL=https://nickelandnest.com ;;
  macro-tuesday) URL=https://macrotuesday.com ;;
  *) echo "unknown site: $SLUG"; exit 1 ;;
esac
cd "$(dirname "$0")/../apps/web"
rm -rf dist
SITE_SLUG="$SLUG" SITE_URL="$URL" pnpm astro build
pnpm wrangler deploy --env "$SLUG"
