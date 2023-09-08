module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-css-variables'),
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'on',
  },
};
