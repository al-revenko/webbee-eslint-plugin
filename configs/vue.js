module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/strongly-recommended',
  ],
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.vue'],
      },
    },
  },
  rules: {
    'vue/max-attributes-per-line': ['off'],
    'vue/attribute-hyphenation': ['off'],
    'vue/html-self-closing': ['off'],

    'vue/script-indent': ['off'],
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        'vue/html-indent': ['error', 2, {
          alignAttributesVertically: false,
          closeBracket: 1,
        }],
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 1,
        }],
      },
    },
  ],
};
