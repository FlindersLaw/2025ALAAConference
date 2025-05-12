import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSponsors from '@site/src/components/HomepageSponsors';
import {CFPButton, RegisterNowButton} from '@site/src/components/EOIButton';
import RegisterBanner from '@site/src/components/EOIBanner';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <img src="img/uq_logo3.png" style={{height: '50px'}}></img>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`2025 ALAA Conference`}
      description="Australasian Legal Academics Association Conference 2025 <head />">
      <HomepageHeader />
      <RegisterNowButton />
      <main>
        <HomepageFeatures />
        <HomepageSponsors />
      </main>
    </Layout>
  );
}
