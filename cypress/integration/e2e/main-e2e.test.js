describe('E2E test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show the title', () => {
    cy.contains('Simple counter app');
  });

  it('should increase the counter', () => {
    cy.contains('Count: 0');

    cy.get('#plus-btn').click();

    cy.contains('Count: 1');
  });

  it('should decrease the counter', () => {
    cy.contains('Count: 0');

    cy.get('#minus-btn').click();

    cy.contains('Count: -1');
  });

  it('should reset the counter', () => {
    cy.contains('Count: 0');

    cy.get('#minus-btn').click();

    cy.contains('Count: -1');

    cy.get('#reset-btn').click();

    cy.contains('Count: 0');
  });
});
