/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'no-unused-vars': 100,
        'max-len': [1, 10000],
        'max-params': [2, 3]
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    "@typescript-eslint/no-this-alias": [
        'error',
        {
            allowDestructuring: true, // Allow `const { props, state } = this`; false by default
            allowedNames: ["self"] // Allow `const self = this`; `[]` by default
        }
    ],
    root: true,
};
