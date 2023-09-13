/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-var-requires': 0,
        'no-unused-vars': 0,
        'max-len': [1, 10000],
        'max-params': [2, 3]
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    root: true,
};
