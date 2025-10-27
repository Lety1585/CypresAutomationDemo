const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Use process.env or a default here
    baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Node event listeners go here
      return config;
    },
  },
});