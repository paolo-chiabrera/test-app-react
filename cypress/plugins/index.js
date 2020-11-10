const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const happoTask = require('happo-cypress/task');

module.exports = (on, config) => {
  initPlugin(on, config);

  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    ...happoTask,
    lighthouse: lighthouse(),
    pa11y: pa11y(),
  });

  return config;
};
