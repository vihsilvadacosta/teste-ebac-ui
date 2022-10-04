const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zwoj81',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
