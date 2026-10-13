YOUR OWN SONGS
==============
The game auto-charts any song from its beats/onsets (WebAudio analysis) and adds it to the song list
(marked with a 🎵). The built-in generated tracks stay available.

Three ways to add songs:
1) In game: Coordinate screen -> "➕ Load my songs" -> pick mp3/ogg files (+ optional .json). Works anywhere,
   but songs are only kept until you reload.
2) Offline/permanent: put files here (my-song.mp3 + optional my-song.json), run  python3 pack_songs.py
   -> writes user-songs.js, which index.html loads automatically.
3) When served from a web server (http/https): list them in songs.json; files are fetched and charted.

JSON fields: title, bpm (optional), offset (optional, seconds to first downbeat), diff (2 or 3).
Only use songs you have the rights to.

New fields:
  size  : "solo" | "duo" | "trio" | "quad" (or omit/"any"). Song select only lists songs that match the current
          unit size (Unit Live: 1-4 idols). Example: {"title":"Sun & Moon Promise","size":"duo"}
  main  : true for built-in main songs. For best charts run  python3 analyze_main.py "Song.mp3" <bpm-hint>
          (needs ffmpeg + librosa) before pack_songs.py; it writes beat-tracked chart data into Song.json.
Stage keys are Q W E R. Difficulty (Easy/Normal/Hard/Extreme) can be picked for every stage, including story.
