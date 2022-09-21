const path = require('path');

module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'atvo-theme-2022',
        path: path.resolve(__dirname, 'docs'),
        routeBasePath: 'atvo/atvo-theme-2022',
        sidebarPath: path.resolve(__dirname, 'sidebars.js'),
        editUrl: 'https://gitlab.com/appgineering/websites/docs/-/tree/master/content/atvo/atvo-theme-2022',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, 'static')],
};
