import airbnbBase from 'eslint-config-airbnb';
import tsEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import imports from 'eslint-plugin-import';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['babel.config.js', 'docusaurus/**', 'lib/**'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
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
