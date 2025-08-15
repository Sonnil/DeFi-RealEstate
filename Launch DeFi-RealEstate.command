#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
PY="$(command -v python3 || command -v python)"
if [[ -z "$PY" ]]; then
  osascript -e 'display alert "Python not found" message "Install Python 3 to run the local server, then run this again."'
  exit 1
fi
PORT=8000
for p in {8000..8010}; do
  if ! lsof -iTCP:"$p" -sTCP:LISTEN >/dev/null 2>&1; then PORT="$p"; break; fi
done
"$PY" -m http.server "$PORT" >/dev/null 2>&1 &
PID=$!
sleep 1
open "http://localhost:${PORT}/index.html"
echo "DeFi-RealEstate is running at http://localhost:${PORT}/index.html"
read -p "Press RETURN to stop the server..." _
kill $PID >/dev/null 2>&1 || true
