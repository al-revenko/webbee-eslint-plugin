const { defineConfig } = require('eslint/config');
const vue = require('./vue');

module.exports = defineConfig([
  {
    extends: [vue],
    settings: {
      'import/resolver': 'nuxt',
    },
  },
]);
