#!/usr/bin/env bash
# Run a SQL file against the linked cloud project via the Supabase management API.
# Uses the CLI's access token from the macOS keychain; no database password needed.
set -euo pipefail
REF="${SUPABASE_PROJECT_REF:-sfitguuupgmkbdlqsudz}"
FILE="${1:?usage: db-run.sh file.sql}"
TOKEN="$(security find-generic-password -s "Supabase CLI" -a supabase -w)"
python3 -I - "$FILE" "$REF" "$TOKEN" <<'PY'
import json, sys, urllib.request
file, ref, token = sys.argv[1:4]
sql = open(file).read()
req = urllib.request.Request(
    f"https://api.supabase.com/v1/projects/{ref}/database/query",
    data=json.dumps({"query": sql}).encode(),
    headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    method="POST")
try:
    with urllib.request.urlopen(req) as r:
        body = r.read().decode()
        print("ok", body[:300])
except urllib.error.HTTPError as e:
    print("HTTP", e.code, e.read().decode()[:1500]); sys.exit(1)
PY
