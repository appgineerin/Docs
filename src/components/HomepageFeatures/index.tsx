import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  kicker: string;
  title: string;
  description: string;
  url: string;
};

// The undraw_docusaurus_* illustrations that used to head these cards were
// template leftovers in a purple/teal palette with no relation to the brand,
// so the cards are type-led now: kicker, title, body, arrow. Same treatment as
// the service cards on the marketing site.
const FeatureList: FeatureItem[] = [
  {
    kicker: 'Overlay control',
    title: 'ATVO',
    description:
      'The premier solution for iRacing broadcasters. Control your overlay graphics live and pull the timing, standings and driver data that makes a broadcast worth watching. Used by iRacing, RaceSpot, SimSpeed, W Series and many more.',
    url: '/atvo/appgineering-tv-overlay-for-iracing/intro/',
  },
  {
    kicker: 'Graphics package',
    title: 'ATVO Theme 2023',
    description:
      'The most professional broadcasting theme available for iRacing, with dedicated widgets for championship standings, qualifying and the rest of a full race weekend.',
    url: '/atvo/atvo-theme-2023/intro/',
  },
  {
    kicker: 'Timing and scoring',
    title: 'Live Timing',
    description:
      'A state-of-the-art timing application that puts live timing and scoring in front of your viewers.',
    url: '/live-timing/intro/',
  },
];

function Feature({kicker, title, description, url}: FeatureItem) {
  return (
    <Link to={url} className={styles.card}>
      <span className={`ft-label ft-muted ${styles.kicker}`}>{kicker}</span>
      {/* .ft-h3 is the brand's card cut. .ft-h2 is a section heading at roughly
          double the size, which made three cards read as three sections. */}
      <h2 className="ft-h3">{title}</h2>
      <p className={`ft-muted ${styles.body}`}>{description}</p>
      {/* Decorative: the link's accessible name already comes from the title. */}
      <span className={styles.arrow} aria-hidden="true">
        {'›››'}
      </span>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <p className={`ft-label ft-accent-dash ${styles.sectionLabel}`}>
          Product documentation
        </p>
        <div className={styles.grid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
