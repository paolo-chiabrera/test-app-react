const { before } = require('lodash');

const SUITE_NAME = 'main.visual';

describe(`Test: ${SUITE_NAME}`, () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://reqres.in/api/users/1', {
      fixture: 'user.json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
    cy.visit('/');
  });

  it('should show the main page', () => {
    cy.eyesOpen({
      appName: 'test-app',
      testName: SUITE_NAME,
    });

    cy.eyesCheckWindow({
      tag: 'main',
      target: 'window',
      fully: true,
    });

    cy.get('#plus-btn').click();

    cy.eyesCheckWindow({
      tag: 'increase-counter',
      target: 'window',
      fully: true,
    });

    cy.get('#minus-btn').click();

    cy.eyesCheckWindow({
      tag: 'decrease-counter',
      target: 'window',
      fully: true,
    });

    cy.eyesClose();
  });
});
