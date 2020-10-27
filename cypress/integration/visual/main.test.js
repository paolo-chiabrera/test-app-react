describe('Visual test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should match the snapshot', () => {
    cy.document().toMatchImageSnapshot();
  });
});
