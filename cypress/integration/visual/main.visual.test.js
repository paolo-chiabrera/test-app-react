const { before } = require('lodash');

const SUITE_NAME = 'main.visual';

describe(`Test: ${SUITE_NAME}`, () => {
  beforeEach(() => {
    cy.route2('GET', 'https://reqres.in/api/users/1', {
      fixture: 'user.json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
  });

  it('should match the snapshot', () => {
    cy.visit('/').then(() => {
      cy.get('body').happoScreenshot();
    });
  });
});
