const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://www.amega.finance/'
  },
  env: {
    baseUrl: 'https://client.amega.finance/client-api/'
  }
});
