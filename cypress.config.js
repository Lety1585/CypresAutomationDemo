const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: Cypress.env('baseUrl') || 'https://the-internet.herokuapp.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'spec',
    chromeWebSecurity: false, 
      
    },
  },
);