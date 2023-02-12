import React from 'react';

import clsx from 'clsx';

import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const Badge = ({ link, source, alt }) => {
  return (
    <a href={link} style={{ padding: '5px' }}>
      <img src={source} alt={alt} />
    </a>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <Badge //
          alt="Downloads badge"
          source="https://img.shields.io/npm/dm/react-star-picker"
          link="https://www.npmjs.com/package/react-star-picker"
        />

        <Badge //
          alt="License badge"
          source="https://img.shields.io/npm/l/react-star-picker"
          link="https://github.com/mmkari/react-star-picker/blob/master/LICENSE"
        />

        <Badge //
          alt="Version badge"
          source="https://img.shields.io/npm/v/react-star-picker"
          link="https://github.com/mmkari/react-star-picker/releases"
        />

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/examples"
          >
            See Examples 👀 🔍✨ 💡
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
