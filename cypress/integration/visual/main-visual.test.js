const { before } = require('lodash');

const SUITE_NAME = 'main-visual';

describe(`Test: ${SUITE_NAME}`, () => {
  it('should match the snapshot', () => {
    cy.visit('/').then(() => {
      cy.document().toMatchImageSnapshot({
        imageConfig: {
          threshold: 1,
          thresholdType: 'percent',
        },
        name: SUITE_NAME,
        separator: '_',
      });
    });
  });
});
