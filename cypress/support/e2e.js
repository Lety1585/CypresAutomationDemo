// Prevent Cypress from failing tests due to uncaught exceptions in the app
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});