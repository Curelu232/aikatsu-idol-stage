#!/bin/bash
# Swap in regenerated '<Title> v2.mp3' files: keeps tags (title/size/mix/idol), re-analyzes, retires the old version, repacks.
cd "$(dirname "$0")"; mkdir -p ../../replaced-songs
for f in *" v2.mp3"; do [ -e "$f" ] || continue; t="${f% v2.mp3}"
  python3 - "$t" <<'PY'
import json,sys,os
t=sys.argv[1];src=[p for p in (t+".json","../../replaced-songs/"+t+".json") if os.path.exists(p)];base=json.load(open(src[0])) if src else {"title":t,"main":True}
keep={k:base[k] for k in ("title","main","size","mix","idol","theme") if k in base};keep["title"]=t
json.dump(keep,open(t+" v2.json","w"))
PY
  python3 analyze_main.py "$f" "${HINT:-150}" 2>&1 | grep -v Warn
  [ -e "$t.mp3" ] && mv "$t.mp3" "$t.json" ../../replaced-songs/ 2>/dev/null
done
python3 pack_songs.py | tail -3
