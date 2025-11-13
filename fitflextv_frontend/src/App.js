import React, { useMemo, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * App - FitFlexTV-styled UI with responsive, collapsible category sidebar
 *
 * Self-contained implementation using only React and inline styles (CSS-in-JS).
 * Ocean Professional theme:
 *  - primary:   #2563EB
 *  - secondary: #F59E0B
 *  - background:#f9fafb
 *  - surface:   #ffffff
 *  - text:      #111827
 *
 * Includes:
 *  - Top navbar (kept from original)
 *  - Left sidebar for categories on desktop
 *  - Mobile toggle button to collapse/expand the sidebar
 *  - Existing hero preserved on the right content area
 */
function App() {
  // Theme palette constants
  const colors = useMemo(() => ({
    primary: '#2563EB',
    secondary: '#F59E0B',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
    textMuted: 'rgba(17,24,39,0.75)',
    border: 'rgba(17,24,39,0.08)',
    shadow: 'rgba(0,0,0,0.08)',
    primaryHover: '#1E4FD6',
  }), []);

  // Sidebar state (mobile collapsible)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'HIIT', 'Yoga', 'Strength', 'Cardio', 'Pilates'];

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
      transition: 'background-color 160ms ease, color 160ms ease, transform 160ms ease',
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
      transition: 'background-color 140ms ease, transform 140ms ease, border-color 140ms ease',
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
      transition: 'transform 140ms ease, box-shadow 140ms ease, background-color 140ms ease',
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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${colors.primary}12, ${colors.secondary}12)`,
      border: `1px dashed ${colors.border}`,
      borderRadius: 14,
      minHeight: 220,
      padding: 16,
      textAlign: 'center',
      color: colors.textMuted,
      fontSize: 14,
      fontWeight: 600,
    },
    footerHint: {
      marginTop: 18,
      fontSize: 12,
      color: colors.textMuted,
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
      <div style={styles.contentWrap} className="content-grid" role="region" aria-label="Main Content Layout">
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
              {...withHover(
                styles.mobileToggle,
                { backgroundColor: colors.primaryHover, transform: 'translateY(-1px)' }
              )}
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
                      ? { ...styles.categoryItemActive, transform: 'translateY(-1px)' }
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
                Showing category: <strong>{activeCategory}</strong>. Placeholder UI — navigation links are non-functional for now.
              </p>
            </div>
            <div style={styles.heroRight}>
              Future content area:
              <br />
              video previews, categories, and quick stats.
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
