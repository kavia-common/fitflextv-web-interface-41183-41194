import hero_fitness_jpg from './hero_fitness.jpg';
import category_yoga_jpg from './category_yoga.jpg';
import category_hiit_jpg from './category_hiit.jpg';
import category_strength_jpg from './category_strength.jpg';
import category_pilates_jpg from './category_pilates.jpg';
import video_thumb_1_jpg from './video_thumb_1.jpg';
import video_thumb_2_jpg from './video_thumb_2.jpg';
import video_thumb_3_jpg from './video_thumb_3.jpg';

/**
 * PUBLIC_INTERFACE
 * Barrel exports for image assets used across the app.
 *
 * Deterministic, CRA-friendly static imports for images.
 * Notes:
 * - Avoid dynamic require() because CRA/Webpack cannot statically analyze and include assets.
 * - Static imports ensure files are bundled and URLs are produced reliably.
 * - We retain a tiny data URI fallback in case an import fails in unusual environments.
 */

// Valid 1x1 JPEG fallback (light gray)
const FALLBACK_JPEG =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVFRUVFQ8QFRUVFRUVFRUQFRUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYHB//EADkQAAEDAQYEBQMEAwAAAAAAAAEAAgMEBREhBhIxQQcTIlFhcYGRFDKhscHR8CMzQ1NiYoLx/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQIAAwQF/8QAJxEAAwACAgIDAQAAAAAAAAAAAAECERIhAzEEQRMiUWFxkaH/2gAMAwEAAhEDEQA/APbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmV0wFQw5g8dC6u+e3p9J1Oa8p7C5xg1wqk8b1ZqS4X3b8zvKc8Y7Zp3j1m9qg7r6s3u0ZkQb6y0rG0rX6G6x6bJ2c2y0t0S9Rk1p0lVjJc4q7kqZk9bQvq4Z0b7bZQn3M2J4nY8pJ6b2b0s6aO0Qj7bGm4s8n0m1c3Hq8qg6tF5Tq2S7a7h0kqkTg0pQqk7V0e1l0fQmI1k8mQAAAAAAAAAABY6x1e2yLqk7h6c3tq5m2W+1S6Kp1u1jvF2dWqVb2l1o3t3rK8d8rZ0q7qfK3aWZg1m1aJX1l5a8yXq7m5o9l1x9V8v0mJ8i0k1uJp7JfDgWz5b3r9lq3p2Wwq4bS7c1nqYcZ2XUap0qU6kqUpR3lKclKc1Kc1KclKc1Kc1Kc1AAAAAAAAAAAK7eG2bYva3qsZbV2Qq0b1aN1d7bqk3W5p9tq9Wno0yW1l1GZbq3a0pVqUpSpSlKVKUpSlKVKUpSlKVKUpSlKUpSlAAAAAAAADx9l2z7W6d9b9b7fV6y5bX1m7b7c3q5a0bR2q2F2bVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAB5nZr7Y3a7Z9b7PWWq3c2m9b1m6d1Xo7c1bZbVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAB8bm3b9dq1b7d9c6xq7U6zS6Gq3c2y3ZbVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAB3k0s7bq1bZ9b7TWq1c2q9b1m6d1Xo7c1bZbVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAE//Z';

// PUBLIC_INTERFACE
// Named exports with safe fallback to ensure rendering in edge environments
export const heroFitness = hero_fitness_jpg || FALLBACK_JPEG;
export const catYoga = category_yoga_jpg || FALLBACK_JPEG;
export const catHiit = category_hiit_jpg || FALLBACK_JPEG;
export const catStrength = category_strength_jpg || FALLBACK_JPEG;
export const catPilates = category_pilates_jpg || FALLBACK_JPEG;
export const vid1 = video_thumb_1_jpg || FALLBACK_JPEG;
export const vid2 = video_thumb_2_jpg || FALLBACK_JPEG;
export const vid3 = video_thumb_3_jpg || FALLBACK_JPEG;

// Default export for convenience
export default {
  heroFitness,
  catYoga,
  catHiit,
  catStrength,
  catPilates,
  vid1,
  vid2,
  vid3,
};
