// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const content = require('./content/docusaurus.config');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Appgineering Docs',
  tagline: 'The documentation source to Appgineering software',
  url: 'https://docs.appgineering.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  trailingSlash: true,
  organizationName: 'appgineering', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    algolia: {
      appId: '1F63SYH1EI',
      apiKey: '35351903852f37f4385222e20ef30945',
      indexName: 'docs',
      contextualSearch: true,
    },
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Appgineering Logo',
        src: 'img/logos/appgineering.svg',
        srcDark: 'img/logos/appgineering-dark.svg',
      },
      items: [
        {
          label: 'ATVO',
          to: '#',
          type: 'dropdown',
          items: [
            {
              label: 'Appgineering TV-Overlay for iRacing',
              href: '/atvo/appgineering-tv-overlay-for-iracing/intro',
            },
            {
              label: 'ATVO Theme 2022',
              href: '/atvo/atvo-theme-2022/intro',
            },
            {
              label: 'Theme Editor',
              href: '/atvo/theme-editor/intro',
            },
          ],
        },
        {
          href: 'https://gitlab.com/appgineering/websites/docs',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Appgineering GbR',
              to: 'https://appgineering.com',
            },
            {
              label: 'Appgineering Shop',
              to: 'https://shop.appgineering.com',
            },
            {
              label: 'ATVO Themes',
              to: 'https://shop.appgineering.com/product-category/atvo-themes/',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/appgineeringcom',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/appgineerin',
            },
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/appgineering',
            },
            {
              label: 'YouTube',
              to: 'https://www.youtube.com/channel/UCHeQCMC6yE5ceB1TzyGHj4Q',
            },
            {
              label: 'Discord',
              to: 'https://discord.appgineering.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Imprint',
              to: 'https://appgineering.com/impressum',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/appgineerin',
            },
          ],
        },
      ],
      logo: {
        alt: 'Meta Open Source Logo',
        src: 'img/logos/appgineering.svg',
        srcDark: 'img/logos/appgineering-dark.svg',
        href: 'https://appgineering.com',
      },
      copyright: `© ${new Date().getFullYear()} Appgineering GbR. Built with Docusaurus.`,
    },
    socials: [
      {
        url: 'https://twitter.com/appgineering',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [
    ...content.plugins,
  ],
  staticDirectories: [
    './static',
    ...content.staticDirectories,
  ],
};

module.exports = config;
