describe('Contact Form Tests - DemoQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('should fill and submit the form successfully', () => {
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#userEmail').type('john.doe@example.com');
      cy.get('#gender-radio-1').check({ force: true });
      cy.get('#userNumber').type('1234567890');
      cy.get('#submit').click();
  
      // Validate modal appears
      cy.get('.modal-content').should('be.visible');
      cy.contains('Thanks for submitting the form').should('exist');
    });
  });  