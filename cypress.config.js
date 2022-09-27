const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/desafioQA/*.js',
    chromeWebSecurity: false,
    edgeWebSecurity:false,
    fireFoxWebSecurity:false,
    electronSecurity: false
  },

  
});
