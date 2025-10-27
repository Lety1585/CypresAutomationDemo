describe('Contact Form Tests - DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill and submit the form successfully', () => {
    const user = Cypress.env('formUser');

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#gender-radio-1').check({ force: true });
    cy.get('#userNumber').type(user.mobile);
    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.contains('Thanks for submitting the form').should('exist');
  });
});