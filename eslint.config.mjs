import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'plugin:react/recommended',
      'airbnb',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'prettier/prettier': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'global-require': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-underscore-dangle': 'off',
      'no-useless-constructor': 'off',
      'no-empty-function': 'off',

      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],

      'react/jsx-max-props-per-line': [
        1,
        {
          maximum: 1,
          when: 'multiline',
        },
      ],

      'react/jsx-first-prop-new-line': [1, 'multiline'],
      'react/jsx-closing-bracket-location': [1, 'line-aligned'],
      'react/function-component-definition': 'off',
      'no-param-reassign': 'off',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],

      'no-use-before-define': [
        'error',
        {
          variables: false,
        },
      ],

      camelcase: 'off',
      'react/prop-types': 'off',
      'import/order': 'off',
      'react/jsx-no-bind': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
];
