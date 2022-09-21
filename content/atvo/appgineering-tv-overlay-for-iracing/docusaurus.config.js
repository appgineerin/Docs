const path = require('path');

const name = path.basename(path.resolve(__dirname));

module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: name,
        path: path.resolve(__dirname, 'docs'),
        routeBasePath: `atvo/${name}`,
        sidebarPath: path.resolve(__dirname, 'sidebars.js'),
        editUrl: `https://gitlab.com/appgineering/websites/docs/-/tree/master/content/atvo/${name}`,
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, 'static')],
};
