describe('Performance test', () => {
  before(() => {
    cy.visit('/');
  });

  it('should pass', () => {
    cy.lighthouse({
      performance: 85,
    });
  });
});
