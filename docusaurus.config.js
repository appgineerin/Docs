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
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'appgineering', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  themeConfig: {
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Appgineering Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'ATVO',
          to: '/#atvo',
          type: 'dropdown',
          items: [
            {
              label: 'Appgineering TV-Overlay for iRacing',
              href: '#',
            },
            {
              label: 'Theme Editor',
              href: '#',
            },
            {
              label: 'ATVO Theme 2022',
              href: '/atvo/atvo-theme-2022/intro',
            },
          ],
        },
        {
          href: 'https://gitlab.com/appgineering/websites/docs',
          label: 'GitLab',
          position: 'right',
        },
        {
          href: 'https://appgineering.com',
          label: 'Get Started',
          position: 'right',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'About Appgineering',
          items: [
            {
              label: 'Tutorial',
              to: '#',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '#',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
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
