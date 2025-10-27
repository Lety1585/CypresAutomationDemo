const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://demoqa.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 20000,
    waitForAnimations: true,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});