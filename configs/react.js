module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
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
};
