const base = require('../../../jest.config');

module.exports = {
  ...base,
  rootDir: './',
  setupFilesAfterEnv: ['../../../scripts/jest-setup.js'],
};
