const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false
  projectId: 'zwoj81',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
  },
});
