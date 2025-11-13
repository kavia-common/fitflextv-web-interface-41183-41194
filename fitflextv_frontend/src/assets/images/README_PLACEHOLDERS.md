This folder uses static imports in src/assets/images/index.js. 

Currently, placeholder entries are defined for:
- Categories: Cardio, Mobility, Dance, CrossFit
- Video thumbnails: video_thumb_4, video_thumb_5, video_thumb_6, video_thumb_7

These point to files named:
- category_cardio.jpg
- category_mobility.jpg
- category_dance.jpg
- category_crossfit.jpg
- video_thumb_4.jpg
- video_thumb_5.jpg
- video_thumb_6.jpg
- video_thumb_7.jpg

If these files are not present, the app falls back to a tiny, deterministic inline JPEG. 
To replace with real royalty-free assets, add the JPEGs with the exact filenames above into this folder. No code changes are needed.
