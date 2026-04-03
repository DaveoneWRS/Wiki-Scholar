import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Scholar & Planora
        </Heading>
        <p className="hero__subtitle">
          Scholar & Planora – ein Produkt von <a href="https://dashtec.de" target="_blank" rel="noopener noreferrer" style={{color: 'inherit'}}>Dashtec.de</a>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Zum Handbuch
          </Link>
        </div>
      </div>
    </header>
  );
}

type CardItem = {
  title: string;
  icon: string;
  description: string;
  link: string;
  external?: boolean;
  badge?: string;
};

const cards: CardItem[] = [
  {
    title: 'Scholar Demo',
    icon: '🏫',
    description: 'Vollversion von Scholar – der Schulverwaltung der Wilhelm-Raabe-Schule.',
    link: 'https://demo.scholar.schule/',
    external: true,
    badge: 'Live-Demo',
  },
  {
    title: 'Planora Demo',
    icon: '📋',
    description: 'Vollversion von Planora – Aufgaben, Projekte, Zeiterfassung und mehr.',
    link: 'https://planora.scholar.schule/',
    external: true,
    badge: 'Live-Demo',
  },
  {
    title: 'Neuigkeiten',
    icon: '📰',
    description: 'Ankündigungen, Hinweise und Neuigkeiten rund um Scholar und Planora.',
    link: '/blog',
  },
  {
    title: 'Scholar Changelog',
    icon: '📝',
    description: 'Alle Versionshinweise und Änderungen an Scholar im Überblick.',
    link: '/changelogscholar',
  },
  {
    title: 'Planora Changelog',
    icon: '📝',
    description: 'Alle Versionshinweise und Änderungen an Planora im Überblick.',
    link: '/changelogplanora',
  },
  {
    title: 'Handbuch',
    icon: '📖',
    description: 'Schritt-für-Schritt-Anleitungen für alle Funktionsbereiche beider Anwendungen.',
    link: '/docs/intro',
  },
];

function Card({title, icon, description, link, external, badge}: CardItem) {
  return (
    <div className={clsx('col col--4', styles.cardCol)}>
      <Link
        className={styles.card}
        to={link}
        {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardBody}>
          <div className={styles.cardTitleRow}>
            <strong>{title}</strong>
            {badge && <span className={styles.badge}>{badge}</span>}
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Schnellzugriff
        </Heading>
        <div className="row">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Dokumentation für Scholar und Planora – Anwendungen der Wilhelm-Raabe-Schule">
      <HomepageHeader />
      <main>
        <QuickLinks />
      </main>
    </Layout>
  );
}
