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
  organizationName: 'appgineerin', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
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
              href: '/atvo/atvo-theme-2023/intro',
            },
            {
              label: 'Theme Editor',
              href: '/atvo/theme-editor/intro',
            },
          ],
        },
        {
          href: 'https://github.com/appgineerin/Docs',
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
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 10,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        }
      }
    ]
  ],
  staticDirectories: [
    './static',
    ...content.staticDirectories,
  ],
};

module.exports = config;
