module.exports = {
  extends: [
    // 'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'string-quotes': 'single',
  },
}
