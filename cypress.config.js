const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '232wtd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
