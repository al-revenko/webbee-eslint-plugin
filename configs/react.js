const { defineConfig } = require('eslint/config');
const base = require('./base');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

module.exports = defineConfig([
  {
    plugins: {
      'react': reactPlugin,
    },
    extends: [
      base,
      reactHooksPlugin.configs['recommended-latest'],
      reactPlugin.configs.flat['recommended'],
    ],
    settings: {
      'import/resolver': {
        alias: {
          map: [['~', './src/']],
          extensions: ['.ts', '.js', '.tsx', '.jsx'],
        },
      },
    },
    rules: {
      // @NOTE: We decided against prop validations
      'react/prop-types': ['off'],

      // @NOTE: ОБЯЗАТЕЛЬНО нужно указывать все зависимости
      'react-hooks/exhaustive-deps': ['error'],
    },
  }
])
