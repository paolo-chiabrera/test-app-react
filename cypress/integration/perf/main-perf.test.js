describe('Performance test', () => {
  before(() => {
    cy.visit('/');
  });

  it('should show the title', () => {
    cy.lighthouse();
  });
});
