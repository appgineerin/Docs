import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Mirrors the marketing site's hero strip: three fills in brand order, near-black
// then blue then the darkened red (the bright --signal-red carries white 13px
// text at 4.3:1, below AA).
const STRIP = ['iRacing', 'Broadcast', 'Live Timing'];

/* The guillemet motif that trails the main site's hero headline. Decorative, so
   it is hidden from the accessibility tree rather than read out as punctuation.
   The glyph is U+203A (single angle quote) repeated three times, matching
   components/ui/chevrons.tsx on the main site. U+00BB (the double guillemet)
   is a different, heavier mark and reads as a typo beside the real thing. */
function Chevrons() {
  return (
    <span className="ft-chevrons" aria-hidden="true">
      {'›››'}
    </span>
  );
}

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span className="ft-chip ft-chip-blue ft-skew">
              <span className="ft-skew-i">Docs</span>
            </span>
            <span className="ft-label ft-muted">Appgineering GbR</span>
          </div>
          <h1 className="ft-display-1">
            Everything you need
            <br />
            to run the
            <span className={styles.accent}> broadcast</span>
            {/* The motif takes the accent colour, as it does on the main site. */}
            <span className={styles.accent}>
              <Chevrons />
            </span>
          </h1>
          <p className="ft-lead ft-muted" style={{maxWidth: 480, marginTop: 26}}>
            Setup guides, reference and release notes for ATVO, the ATVO Theme,
            Live Timing and the Launcher.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={`button ft-skew ${styles.ctaPrimary}`}
              to="/launcher/intro">
              <span className="ft-skew-i">Get started</span>
            </Link>
            <Link
              className={`button ft-skew ${styles.ctaGhost}`}
              to="/atvo/appgineering-tv-overlay-for-iracing/intro">
              <span className="ft-skew-i">ATVO docs</span>
            </Link>
          </div>
          <ul className={`${styles.strip} ft-skew`}>
            {STRIP.map((label) => (
              <li key={label}>
                <span className="ft-skew-i ft-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* The comp's near-black slab, skewed and bleeding off the right edge.
            Anchored to its own column rather than the section so it never ends
            up behind the headline once the grid collapses. */}
        <div className={styles.heroArt} aria-hidden="true">
          <div className={styles.slab} />
          <div className={styles.mark}>
            <img src="/img/logos/logo_white.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Documentation" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
