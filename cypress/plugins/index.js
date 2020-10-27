const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);

  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse(),
    pa11y: pa11y(),
  });

  return config;
};
