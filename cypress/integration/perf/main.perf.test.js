describe('Performance test', () => {
  beforeEach(() => {
    cy.route2('GET', 'https://reqres.in/api/users/1', {
      fixture: 'user.json',
      headers: {
        'access-control-allow-origin': '*',
      },
    });
    cy.visit('/');
  });

  it('should pass', () => {
    cy.lighthouse({
      performance: 85,
    });
  });
});
