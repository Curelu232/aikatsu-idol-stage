SONGS (manifest-driven)
=======================
All playable songs are the user's Suno songs. Old songs were removed (backup: /workspace/backup-old-songs).

Source  : /workspace/suno-new/<title>__<id8>.mp3  (+ <title>__<id8>.txt lyrics, + optional songlist.tsv)
Manifest: songs/versions.json
  groups   : { "<title>": { "en": "English title", "jacket": "jackets/<file>.webp" } }
  versions : { "<id8>": { "group": "<title>", "kind": "solo|mashup|studio|inst", "singers": [idol idx], "label": "Pochi ver." } }
  Idol indices: Lulu 0, Rinne 1, Sera 2, Pochi 3, Luna 5, Taiyo 6, Ren 7, Kanata 8.
  New ids get guessed entries ("guessed": true) - fix kind/singers/label by hand and re-run.

Swap / add songs:
  1) drop mp3 (+txt) into /workspace/suno-new
  2) python3 tools/ingest_suno.py all
       manifest -> copies songs/<id8>.mp3, writes songs/<id8>.json sidecars, generates missing jackets (tools/jackets.py)
       analyze  -> beat-tracked charts (analyze_main.py, tempo-hint retry) - charts for all 4 difficulties are built from these onsets
       align    -> demucs vocal stem + faster-whisper (medium) word timestamps; lyric lines matched fuzzily (hiragana + surface text);
                   only confident lines (score >= 72/82, sane duration & chars/s) are written to songs/<id8>.lyrics.json
       pack     -> pack_songs.py: 15s chorus previews (songs/previews/), user-songs.js index + user-songs-N.js audio chunks (<17 MB)
  3) bash build.sh ; English subtitle text comes from songs/lyrics/translations.json (JP line -> EN line).
To remove a song: delete its songs/<id8>.* files and its manifest entry, then run pack_songs.py.

In game
  Song Select shows ONE card per title. The version played follows the lineup:
    solo stage -> that idol's own solo version if it exists;
    2+ idols   -> the mashup/duet whose singers overlap the lineup most (leader breaks ties);
    otherwise  -> the generic mashup (or studio/any vocal version).
  Titles with an instrumental get an "Off vocal" toggle. Every title is playable by any 1-8 idol lineup.
  Story mode chapters map to titles (parts/50.js STORY_GROUPS) and use the same version rule for the chapter lineup.
Stage keys are Q W E R.
