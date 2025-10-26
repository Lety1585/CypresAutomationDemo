describe('Login Tests - The Internet Demo', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();
      cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    });
  
    it('should show an error for invalid credentials', () => {
      cy.get('#username').type('invalidUser');
      cy.get('#password').type('wrongPassword');
      cy.get('button[type="submit"]').click();
      cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });
  });  