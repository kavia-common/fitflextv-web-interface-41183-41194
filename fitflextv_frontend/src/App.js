import React, { useMemo, useState } from 'react';
import { heroFitness, catYoga, catHiit, catStrength, catPilates, vid1, vid2, vid3 } from './assets/images';

// Tiny valid JPEG as deterministic inline fallback for the hero image (ensures at least one visible image)
const HERO_DATA_URI =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVFRUVFQ8QFRUVFRUVFRUQFRUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHSUtLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYHB//EADkQAAEDAQYEBQMEAwAAAAAAAAEAAgMEBREhBhIxQQcTIlFhcYGRFDKhscHR8CMzQ1NiYoLx/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQIAAwQF/8QAJxEAAwACAgIDAQAAAAAAAAAAAAECERIhAzEEQRMiUWFxkaH/2gAMAwEAAhEDEQA/APbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmV0wFQw5g8dC6u+e3p9J1Oa8p7C5xg1wqk8b1ZqS4X3b8zvKc8Y7Zp3j1m9qg7r6s3u0ZkQb6y0rG0rX6G6x6bJ2c2y0t0S9Rk1p0lVjJc4q7kqZk9bQvq4Z0b7bZQn3M2J4nY8pJ6b2b0s6aO0Qj7bGm4s8n0m1c3Hq8qg6tF5Tq2S7a7h0kqkTg0pQqk7V0e1l0fQmI1k8mQAAAAAAAAAABY6x1e2yLqk7h6c3tq5m2W+1S6Kp1u1jvF2dWqVb2l1o3t3rK8d8rZ0q7qfK3aWZg1m1aJX1l5a8yXq7m5o9l1x9V8v0mJ8i0k1uJp7JfDgWz5b3r9lq3p2Wwq4bS7c1nqYcZ2XUap0qU6kqUpR3lKclKc1Kc1KclKc1Kc1Kc1AAAAAAAAAAAK7eG2bYva3qsZbV2Qq0b1aN1d7bqk3W5p9tq9Wno0yW1l1GZbq3a0pVqUpSpSlKVKUpSlKVKUpSlKVKUpSlKUpSlAAAAAAAADx9l2z7W6d9b9b7fV6y5bX1m7b7c3q5a0bR2q2F2bVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAB5nZr7Y3a7Z9b7PWWq3c2m9b1m6d1Xo7c1bZbVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAB8bm3b9dq1b7d9c6xq7U6zS6Gq3c2y3ZbVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAB3k0s7bq1bZ9b7TWq1c2q9b1m6d1Xo7c1bZbVapSlKVKUpSlKVKUpSlKVKUpSlKVKUpSlKVKQAAAAAAAE//Z';

/**
 * PUBLIC_INTERFACE
 * App - FitFlexTV-styled UI with responsive, collapsible category sidebar and local images.
 *
 * Showcases:
 *  - Hero banner using hero_fitness.jpg
 *  - Categories thumbnails (Yoga, HIIT, Strength, Pilates)
 *  - Featured video cards using local thumbnails
 */
function App() {
  // Theme palette constants
  const colors = useMemo(
    () => ({
      primary: '#2563EB',
      secondary: '#F59E0B',
      background: '#f9fafb',
      surface: '#ffffff',
      text: '#111827',
      textMuted: 'rgba(17,24,39,0.75)',
      border: 'rgba(17,24,39,0.08)',
      shadow: 'rgba(0,0,0,0.08)',
      primaryHover: '#1E4FD6',
    }),
    []
  );

  // Sidebar state (mobile collapsible)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'HIIT', 'Yoga', 'Strength', 'Cardio', 'Pilates'];

  // Images for top-level categories we are wiring
  const categoryImages = [
    { key: 'Yoga', src: catYoga, alt: 'Yoga category thumbnail' },
    { key: 'HIIT', src: catHiit, alt: 'HIIT category thumbnail' },
    { key: 'Strength', src: catStrength, alt: 'Strength category thumbnail' },
    { key: 'Pilates', src: catPilates, alt: 'Pilates category thumbnail' },
  ];

  // Container and layout styles
  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: colors.background,
      color: colors.text,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      display: 'flex',
      flexDirection: 'column',
    },
    // Top navigation bar
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      width: '100%',
      backgroundColor: colors.surface,
      borderBottom: `1px solid ${colors.border}`,
      boxShadow: `0 1px 2px ${colors.shadow}`,
    },
    navInner: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      color: colors.text,
      fontWeight: 800,
      letterSpacing: '0.2px',
      fontSize: 18,
    },
    brandBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 8,
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryHover} 100%)`,
      color: '#fff',
      fontSize: 16,
      boxShadow: `0 4px 10px ${colors.shadow}`,
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    },
    navLink: {
      color: colors.text,
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 600,
      padding: '8px 10px',
      borderRadius: 8,
      transition:
        'background-color 160ms ease, color 160ms ease, transform 160ms ease',
    },
    navLinkHover: {
      backgroundColor: '#f3f4f6',
      transform: 'translateY(-1px)',
    },

    // App content layout: sidebar + content
    contentWrap: {
      maxWidth: 1200,
      width: '100%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 20,
      padding: '20px',
      boxSizing: 'border-box',
    },

    // Sidebar styles
    sidebar: {
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: 14,
      boxShadow: `0 6px 16px ${colors.shadow}`,
      padding: 14,
      height: 'fit-content',
      position: 'sticky',
      top: 76, // below navbar
    },
    sidebarHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    sidebarTitle: {
      margin: 0,
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    mobileToggle: {
      display: 'none',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      padding: '8px 10px',
      borderRadius: 8,
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer',
      transition: 'background-color 140ms ease, transform 140ms ease',
    },
    categoriesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    categoryItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: `1px solid ${colors.border}`,
      backgroundColor: '#ffffff',
      color: colors.text,
      padding: '10px 12px',
      borderRadius: 10,
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer',
      transition:
        'background-color 140ms ease, transform 140ms ease, border-color 140ms ease',
    },
    categoryItemActive: {
      backgroundColor: `${colors.primary}10`,
      borderColor: `${colors.primary}55`,
      color: colors.primary,
    },
    categoryBadge: {
      backgroundColor: `${colors.secondary}20`,
      color: colors.secondary,
      border: `1px solid ${colors.secondary}55`,
      padding: '2px 8px',
      fontSize: 12,
      borderRadius: 999,
      fontWeight: 800,
    },

    // Main hero/content area
    main: {
      flex: 1,
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: '0 0 32px 0',
    },
    hero: {
      width: '100%',
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      boxShadow: `0 10px 25px ${colors.shadow}`,
      padding: '32px 28px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
    },
    heroLeft: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
    },
    badgeRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
    },
    badgePrimary: {
      backgroundColor: `${colors.primary}14`,
      color: colors.primary,
      border: `1px solid ${colors.primary}33`,
      padding: '6px 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.3px',
    },
    badgeSecondary: {
      backgroundColor: `${colors.secondary}14`,
      color: colors.secondary,
      border: `1px solid ${colors.secondary}33`,
      padding: '6px 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.3px',
    },
    title: {
      fontSize: 32,
      lineHeight: 1.2,
      margin: 0,
      fontWeight: 800,
      letterSpacing: '-0.015em',
    },
    subtitle: {
      fontSize: 16,
      lineHeight: 1.6,
      color: colors.textMuted,
      margin: '4px 0 0 0',
      maxWidth: 560,
    },
    ctaRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 16,
      flexWrap: 'wrap',
    },
    ctaPrimary: {
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      padding: '12px 16px',
      borderRadius: 10,
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: '0.2px',
      cursor: 'pointer',
      boxShadow: `0 6px 16px ${colors.shadow}`,
      transition:
        'transform 140ms ease, box-shadow 140ms ease, background-color 140ms ease',
    },
    ctaPrimaryHover: {
      backgroundColor: '#1E4FD6',
      transform: 'translateY(-1px)',
      boxShadow: `0 10px 22px ${colors.shadow}`,
    },
    ctaGhost: {
      backgroundColor: 'transparent',
      color: colors.text,
      border: `1px solid ${colors.border}`,
      padding: '12px 16px',
      borderRadius: 10,
      fontWeight: 700,
      fontSize: 14,
      cursor: 'pointer',
      transition: 'background-color 140ms ease, transform 140ms ease',
    },
    ctaGhostHover: {
      backgroundColor: '#f3f4f6',
      transform: 'translateY(-1px)',
    },
    heroRight: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 14,
      minHeight: 220,
      border: `1px solid ${colors.border}`,
      boxShadow: `0 8px 20px ${colors.shadow}`,
    },
    heroImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      borderRadius: 14,
    },
    footerHint: {
      marginTop: 18,
      fontSize: 12,
      color: colors.textMuted,
    },

    // Section + grids
    section: {
      width: '100%',
      marginTop: 20,
      backgroundColor: 'transparent',
    },
    sectionHeader: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginBottom: 12,
      padding: '0 2px',
    },
    sectionTitle: {
      margin: 0,
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    sectionSubtitle: {
      margin: 0,
      fontSize: 14,
      color: colors.textMuted,
    },
    gridWrap: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: 16,
    },
    card: {
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: `0 6px 16px ${colors.shadow}`,
      transition: 'transform 140ms ease, box-shadow 140ms ease',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
    },
    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: `0 12px 24px ${colors.shadow}`,
    },
    poster: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16 / 9',
      background: `linear-gradient(135deg, ${colors.primary}22, ${colors.secondary}22)`,
      borderBottom: `1px solid ${colors.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    posterImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    playIcon: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: `16px solid ${colors.surface}`,
      filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.25))',
    },
    durationBadge: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      backgroundColor: '#00000090',
      color: '#fff',
      fontSize: 12,
      padding: '4px 8px',
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.15)',
      fontWeight: 700,
    },
    cardBody: {
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    },
    cardTitle: {
      margin: 0,
      fontSize: 14,
      fontWeight: 800,
      letterSpacing: '-0.01em',
    },
    tagRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
    },
    tag: {
      fontSize: 12,
      fontWeight: 700,
      padding: '4px 8px',
      borderRadius: 999,
      backgroundColor: `${colors.primary}12`,
      color: colors.primary,
      border: `1px solid ${colors.primary}33`,
    },
    // Quick stats
    statsStrip: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 12,
    },
    statCard: {
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: 12,
      padding: 14,
      boxShadow: `0 6px 16px ${colors.shadow}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statLabel: {
      margin: 0,
      fontSize: 12,
      color: colors.textMuted,
      fontWeight: 700,
    },
    statValue: {
      margin: 0,
      fontSize: 18,
      fontWeight: 900,
      color: colors.text,
    },
    // Category thumbs grid
    catGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: 12,
    },
    catCard: {
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: `0 6px 16px ${colors.shadow}`,
      display: 'flex',
      flexDirection: 'column',
    },
    catThumb: {
      width: '100%',
      aspectRatio: '16 / 9',
      overflow: 'hidden',
    },
    catImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    catTitle: {
      padding: '10px 12px',
      margin: 0,
      fontSize: 14,
      fontWeight: 800,
    },
  };

  // A simple hover handler to apply hover styles inline
  const withHover = (style, hoverStyle) => ({
    style,
    onMouseEnter: (e) => {
      Object.assign(e.currentTarget.style, hoverStyle);
    },
    onMouseLeave: (e) => {
      Object.keys(hoverStyle).forEach((key) => {
        e.currentTarget.style[key] = style[key];
      });
    },
  });

  // Helper to compute category button style (active state)
  const categoryStyle = (cat) =>
    cat === activeCategory
      ? { ...styles.categoryItem, ...styles.categoryItemActive }
      : styles.categoryItem;

  // Poster data with local thumbnails
  const posters = [
    { title: 'HIIT Blast 20', category: 'HIIT', duration: '20:00', img: vid1 },
    { title: 'Morning Flow', category: 'Yoga', duration: '15:32', img: vid2 },
    { title: 'Core Crusher', category: 'Strength', duration: '18:45', img: vid3 },
  ];

  return (
    <div style={styles.app}>
      {/* Minimal responsive CSS (no external stylesheets). */}
      <style>
        {`
          /* Collapse grid to one column on small screens and show mobile toggle */
          @media (max-width: 900px) {
            .content-grid {
              grid-template-columns: 1fr !important;
            }
            .sidebar {
              display: ${sidebarOpen ? 'block' : 'none'} !important;
            }
            .mobile-toggle {
              display: inline-flex !important;
              align-items: center;
              gap: 6px;
            }
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
            .featured-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
            .stats-grid {
              grid-template-columns: 1fr 1fr 1fr !important;
            }
            .cat-grid {
              grid-template-columns: repeat(2, minmax(0,1fr)) !important;
            }
          }
          @media (max-width: 640px) {
            .featured-grid {
              grid-template-columns: 1fr !important;
            }
            .stats-grid {
              grid-template-columns: 1fr !important;
            }
            .cat-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (min-width: 1200px) {
            .featured-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            }
          }
        `}
      </style>

      {/* Top Navigation */}
      <nav style={styles.nav} aria-label="Primary Navigation">
        <div style={styles.navInner}>
          <a href="#" style={styles.brand} aria-label="FitFlexTV Home">
            <span style={styles.brandBadge}>FF</span>
            FitFlexTV
          </a>
          <div style={styles.navLinks} role="navigation" aria-label="Main">
            <a
              href="#"
              {...withHover(styles.navLink, styles.navLinkHover)}
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#"
              {...withHover(styles.navLink, styles.navLinkHover)}
              aria-label="Categories"
            >
              Categories
            </a>
            <a
              href="#"
              {...withHover(styles.navLink, styles.navLinkHover)}
              aria-label="Profile"
            >
              Profile
            </a>
          </div>
        </div>
      </nav>

      {/* Content area: Sidebar + Main */}
      <div
        style={styles.contentWrap}
        className="content-grid"
        role="region"
        aria-label="Main Content Layout"
      >
        {/* Sidebar */}
        <aside
          className="sidebar"
          style={styles.sidebar}
          aria-label="Workout Categories Sidebar"
        >
          <div style={styles.sidebarHeader}>
            <h2 style={styles.sidebarTitle}>Categories</h2>
            <button
              type="button"
              className="mobile-toggle"
              style={styles.mobileToggle}
              onClick={() => setSidebarOpen((s) => !s)}
              aria-expanded={sidebarOpen}
              aria-controls="category-list"
              aria-label="Toggle categories"
              {...withHover(styles.mobileToggle, {
                backgroundColor: colors.primaryHover,
                transform: 'translateY(-1px)',
              })}
            >
              {sidebarOpen ? 'Hide' : 'Show'}
            </button>
          </div>
          <ul id="category-list" style={styles.categoriesList}>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  {...withHover(
                    categoryStyle(cat),
                    cat === activeCategory
                      ? {
                          ...styles.categoryItemActive,
                          transform: 'translateY(-1px)',
                        }
                      : { backgroundColor: '#f3f4f6', transform: 'translateY(-1px)' }
                  )}
                >
                  <span>{cat}</span>
                  {cat !== 'All' && <span style={styles.categoryBadge}>New</span>}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main hero/content */}
        <main style={styles.main} role="main">
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <section
              className="hero-grid"
              style={styles.hero}
              aria-label="FitFlexTV Dashboard Introduction"
            >
              <div style={styles.heroLeft}>
                <div style={styles.badgeRow}>
                  <span style={styles.badgePrimary}>Stream Workouts</span>
                  <span style={styles.badgeSecondary}>Track Progress</span>
                </div>
                <h1 style={styles.title}>FitFlexTV Dashboard</h1>
                <p style={styles.subtitle}>
                  Stream workouts. Track progress. Stay motivated.
                </p>
                <div style={styles.ctaRow}>
                  <button
                    type="button"
                    {...withHover(styles.ctaPrimary, styles.ctaPrimaryHover)}
                    aria-label="Explore Workouts"
                  >
                    Explore Workouts
                  </button>
                  <button
                    type="button"
                    {...withHover(styles.ctaGhost, styles.ctaGhostHover)}
                    aria-label="Learn More"
                  >
                    Learn More
                  </button>
                </div>
                <p style={styles.footerHint}>
                  Showing category: <strong>{activeCategory}</strong>. Placeholder
                  UI — navigation links are non-functional for now.
                </p>
              </div>
              <div
                style={{
                  ...styles.heroRight,
                  // Maintain ~16:9 aspect ratio for hero image container
                  aspectRatio: '16 / 9',
                }}
                aria-label="Hero Image"
              >
                <img
                  src={heroFitness || HERO_DATA_URI}
                  alt="Person training - FitFlexTV Hero"
                  style={{
                    ...styles.heroImage,
                    maxWidth: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  // Keep eager/default loading for hero as above-the-fold
                  decoding="sync"
                />
              </div>
            </section>

            {/* Categories Thumbnails Section */}
            <section style={styles.section} aria-label="Browse by Category">
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Browse by Category</h2>
                <p style={styles.sectionSubtitle}>
                  Discover workouts across popular categories.
                </p>
              </div>

              <div
                className="cat-grid"
                style={{
                  ...styles.catGrid,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                }}
              >
                {categoryImages.map((c) => (
                  <article key={c.key} style={styles.catCard} aria-label={`${c.key} category`}>
                    <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                      <img
                        src={c.src}
                        alt={c.alt}
                        style={{
                          ...styles.catImg,
                          maxWidth: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 style={styles.catTitle}>{c.key}</h3>
                  </article>
                ))}
              </div>
            </section>

            {/* Featured Workouts Section */}
            <section style={styles.section} aria-label="Featured Workouts">
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Featured Workouts</h2>
                <p style={styles.sectionSubtitle}>
                  Explore popular sessions curated for you.
                </p>
              </div>

              <div
                className="featured-grid"
                style={{
                  ...styles.gridWrap,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                }}
                role="list"
                aria-label="Workout Posters"
              >
                {posters.map((p) => (
                  <article
                    key={p.title}
                    role="listitem"
                    aria-label={`${p.title} ${p.category} ${p.duration}`}
                    {...withHover({ ...styles.card }, styles.cardHover)}
                  >
                    <div style={{ ...styles.poster, aspectRatio: '16 / 9' }}>
                      <img
                        src={p.img}
                        alt={`${p.title} thumbnail`}
                        style={{
                          ...styles.posterImg,
                          maxWidth: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div style={styles.playIcon} aria-hidden="true" />
                      <span style={styles.durationBadge} aria-label="Duration">
                        {p.duration}
                      </span>
                    </div>
                    <div style={styles.cardBody}>
                      <h3 style={styles.cardTitle}>{p.title}</h3>
                      <div style={styles.tagRow}>
                        <span style={styles.tag}>{p.category}</span>
                        <span
                          style={{
                            ...styles.tag,
                            backgroundColor: `${colors.secondary}14`,
                            color: colors.secondary,
                            border: `1px solid ${colors.secondary}33`,
                          }}
                        >
                          Popular
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Quick Stats Strip */}
              <div
                className="stats-grid"
                style={styles.statsStrip}
                role="region"
                aria-label="Quick Stats"
              >
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Total Workouts</p>
                  <p style={styles.statValue}>128</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Minutes Watched</p>
                  <p style={styles.statValue}>3,420</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Streak Days</p>
                  <p style={styles.statValue}>12</p>
                </div>
              </div>
            </section>

            {/* Debug: Image Assets Preview to verify paths/imports */}
            <section
              style={{ ...styles.section, marginTop: 28 }}
              aria-label="Debug: Image Assets Preview"
            >
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Debug: Image Assets Preview</h2>
                <p style={styles.sectionSubtitle}>
                  This preview renders all local images to verify visibility and correct bundling.
                </p>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                  gap: 12,
                }}
              >
                {/* Hero image */}
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={heroFitness}
                      alt="Hero fitness debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>hero_fitness.jpg</h3>
                </article>

                {/* Category thumbnails */}
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={catYoga}
                      alt="Category yoga debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>category_yoga.jpg</h3>
                </article>
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={catHiit}
                      alt="Category HIIT debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>category_hiit.jpg</h3>
                </article>
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={catStrength}
                      alt="Category strength debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>category_strength.jpg</h3>
                </article>
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={catPilates}
                      alt="Category pilates debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>category_pilates.jpg</h3>
                </article>

                {/* Video thumbnails */}
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={vid1}
                      alt="Video thumb 1 debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>video_thumb_1.jpg</h3>
                </article>
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={vid2}
                      alt="Video thumb 2 debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>video_thumb_2.jpg</h3>
                </article>
                <article style={styles.catCard}>
                  <div style={{ ...styles.catThumb, aspectRatio: '16 / 9' }}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={vid3}
                      alt="Video thumb 3 debug"
                      style={{
                        ...styles.catImg,
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h3 style={styles.catTitle}>video_thumb_3.jpg</h3>
                </article>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
