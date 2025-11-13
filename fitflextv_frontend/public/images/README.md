# Public Images

This directory serves static image assets at deterministic URLs via CRA:

- /images/hero_fitness.jpg
- /images/category_yoga.jpg
- /images/category_hiit.jpg
- /images/category_strength.jpg
- /images/category_pilates.jpg
- /images/category_cardio.jpg
- /images/category_mobility.jpg
- /images/category_dance.jpg
- /images/category_crossfit.jpg
- /images/video_thumb_1.jpg
- /images/video_thumb_2.jpg
- /images/video_thumb_3.jpg
- /images/video_thumb_4.jpg
- /images/video_thumb_5.jpg
- /images/video_thumb_6.jpg
- /images/video_thumb_7.jpg

Usage in components:
  const img = (p) => `${process.env.PUBLIC_URL || ''}${p}`;
  <img src={img('/images/category_yoga.jpg')} loading="lazy" decoding="async" style={{ objectFit: 'cover' }} alt="Yoga" />
