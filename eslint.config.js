const airbnbBase = require('eslint-config-airbnb');
const tsEslint = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const imports = require('eslint-plugin-import');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      import: imports,
      '@typescript-eslint': tsEslint,
      prettier,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      ...airbnbBase.rules,
      ...tsEslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      'linebreak-style': ['error', 'windows'],
      'prettier/prettier': ['error'],
      'react/state-in-constructor': ['error', 'never'],
      'react/static-property-placement': ['error', 'static public field'],
      'react/require-default-props': [0, { forbidDefaultForRequired: false }],
      'react/default-props-match-prop-types': [
        0,
        { allowRequiredDefaults: false },
      ],
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'import/extensions': [2, 'never'],
    },
  },
];
