// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2025 Australasian Law Academics Association (ALAA) Conference',
  tagline: '2 - 4 July 2025',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Azure Static Webapps deployment
  url: 'https://alaa2025.netlify.app/',
  baseUrl: '/',

  // For GitHub pages deployment, it is often '/<projectName>/'
  // url: 'https://flinderslaw.github.io/',
  // baseUrl: '/2024ALAAConference',
  // organizationName: 'FlindersLaw', // Usually your GitHub org/user name.
  // projectName: '2024ALAAConference', // Usually your repo name.
  // deploymentBranch: 'gh-pages',
  // trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/legaltech.png',
      navbar: {
        title: '2025 ALAA Conference',
        logo: {
          alt: 'ALAA Logo',
          src: '/img/alaa_logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            label: 'Registration',
            to: '/registration',
            position: 'left'
          },
          {
            label: 'Call for Papers',
            to: '/call_for_papers',
            position: 'left',
          },
          {
            label: 'Accommodation',
            to: '/accommodation',
            position: 'left',
          },
          {
            label: 'Gala Dinner',
            to: '/gala_dinner',
            position: 'left',
          },
          {
            label: 'Conference Program',
            to: '/program',
            position: 'left'
          },
          {
            label: 'FAQ',
            to: '/faq',
            position: 'left',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://uq.edu.au"><img src="img/uq_logo3.png" height="30px"></a>',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About UQ',
            items: [
              {
                label: 'UQ Homepage',
                href: 'https://uq.edu.au',
              },
              {
                label: 'UQ Law School',
                href: 'https://law.uq.edu.au',
              }
            ],
          },
          {
            title: 'Conference hosted by UQ Law School',
            items: [
              {
                // Hard push from the left to manually align under title
                html: '<div style="margin-left: 00px; margin-top: 00px;"><img src="img/uq_logo_dark.png" style="height: 95px"></div>',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact ALAA',
                href: 'mailto:admin@alaa.asn.au',
              },
              {
                label: 'Contact UQ Law School',
                href: 'mailto:law@uq.edu.au',
              },
              {
                label: 'Contact the Conference Project Team',
                href: 'mailto:alaa2025conference@uq.edu.au',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      /* Disables dark mode */
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
