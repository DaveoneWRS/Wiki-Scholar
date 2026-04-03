import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Scholar - Dokumentation',
  tagline: 'Scholar',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.scholar.schule',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'wilhelm-raabe-schule',
  projectName: 'scholar-docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['de'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog-planora',
        routeBasePath: 'changelogplanora',
        path: './changelog_planora',
        blogTitle: 'Planora Changelog',
        showReadingTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog-scholar',
        routeBasePath: 'changelogscholar',
        path: './changelog_scholar',
        blogTitle: 'Scholar Changelog',
        showReadingTime: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Scholar',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Handbuch',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/changelogplanora', label: 'Planora Changelog', position: 'left'},
        {to: '/changelogscholar', label: 'Scholar Changelog', position: 'left'},
        {
          href: 'https://scholar.schule',
          label: 'Scholar',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Handbuch',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Service - Seiten',
          items: [
            {
              label: 'Dashtec',
              href: 'https://dashtec.de',
            },
            {
              label: 'CRM',
              href: 'https://crm.scholar.schule',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scholar, DashTec – Stand: ${new Date().toLocaleDateString('de-DE', {day: '2-digit', month: '2-digit', year: 'numeric'})}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
