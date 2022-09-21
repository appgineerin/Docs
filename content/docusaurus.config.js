const requireGlob = require('require-glob');

const configs = './*/**/docusaurus.config.js';

function reducer(_options, result, fileObject) {
  if (fileObject && fileObject.exports) {
    const { plugins = [], staticDirectories = []} = fileObject.exports;
    result.plugins.push(...plugins);
    result.staticDirectories.push(...staticDirectories);
  }

  return result;
}

const config = requireGlob.sync(configs, {
  initialValue: { plugins: [], staticDirectories: [] },
  reducer: reducer
});

module.exports = config;
