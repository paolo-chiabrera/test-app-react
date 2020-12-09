const { GITHUB_REPOSITORY, GITHUB_RUN_NUMBER } = process.env;

module.exports = {
  batchName: `${GITHUB_REPOSITORY}/${GITHUB_RUN_NUMBER}`,
  browser: [
    // Add browsers with different viewports
    { width: 800, height: 600, name: 'chrome' },
    { width: 700, height: 500, name: 'firefox' },
    { width: 1600, height: 1200, name: 'ie11' },
    { width: 800, height: 600, name: 'safari' },
    // Add mobile emulation devices in Portrait mode
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
  ],
  testConcurrency: 5,
};
