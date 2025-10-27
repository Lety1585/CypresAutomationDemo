describe('Contact Form Tests - DemoQA', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('formUrl'), { timeout: 120000 });
  });

  it('fills and submits the form successfully', () => {
    const user = Cypress.env('formUser');

    cy.get('#firstName', { timeout: 10000 }).type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#gender-radio-1').check({ force: true });
    cy.get('#userNumber').type(user.mobile);
    cy.get('#submit').click();

    cy.get('.modal-content', { timeout: 10000 }).should('be.visible');
    cy.contains('Thanks for submitting the form').should('exist');
  });
});