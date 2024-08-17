/* eslint-disable */
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const path = require('path');

const compat = new FlatCompat({
    baseDirectory: path.resolve(__dirname, './'),
});

module.exports = [
    js.configs.recommended,
    ...compat.extends('plugin:react/recommended'),
    ...compat.extends('plugin:@typescript-eslint/recommended'),
    ...compat.extends('plugin:jsx-a11y/recommended'),
    ...compat.extends('plugin:prettier/recommended'),
    {
        rules: {
            'prettier/prettier': 'error',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
