const { defineConfig } = require('eslint/config');
const react = require('./react');

module.exports = defineConfig([
  {
    extends: [react],
  },
]);