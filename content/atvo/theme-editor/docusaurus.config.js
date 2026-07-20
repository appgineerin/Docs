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
        editUrl: `https://github.com/appgineerin/Docs/blob/master`,
      },
    ],
  ],
  staticDirectories: [path.resolve(__dirname, 'static')],
};
