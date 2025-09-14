import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ATVO',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ATVO is the premier solution for iRacing broadcasters. It allows you to control your overlay graphics during
        a broadcast and provides a variety of useful information to create the best and most immersive iRacing
        broadcasts you have ever produced.
        <br/>
        ATVO is used by many broadcasters such us iRacing, RaceSpot, SimSpeed, WSeries and many more!
      </>
    ),
    url: '/atvo/appgineering-tv-overlay-for-iracing/intro/',
  },
  {
    title: 'ATVO Theme 2023',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Our ATVO Theme is the most professional broadcasting solution for iRacing available for the public. If you are
          looking for a full feature set including highlights such as dedicated widgets for Championship Standings,
          Qualifying and many more this full version of the ATVO theme is the right choice for you!
      </>
    ),
    url: '/atvo/atvo-theme-2023/intro/',
  },
  {
    title: 'Live Timing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Appgineering Live Timing is a state-of-the-art timing application which gives you as a use the ability to
          provide live timings and scoring to your viewers.
      </>
    ),
    url: '/live-timing/intro/',
  },
];

function Feature({title, Svg, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={url}><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
