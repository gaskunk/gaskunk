const base = require('../../../jest.config');

module.exports = {
  ...base,
  rootDir: './',
  globals: {
    SpreadsheetApp: {},
  },
};