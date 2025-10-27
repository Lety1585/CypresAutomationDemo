describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + '/login');
  });

  it('should login successfully with valid credentials', () => {
    const user = Cypress.env('validUser');
    cy.get('#username').type(user.username);
    cy.get('#password').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  });

  it('should show an error for invalid credentials', () => {
    const user = Cypress.env('invalidUser');
    cy.get('#username').type(user.username);
    cy.get('#password').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });
});