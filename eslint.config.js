import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import typescriptParser from "@typescript-eslint/parser";
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // добавляем globals для браузера
        ...globals.jest, // добавляем globals для Jest
        ...globals.node, // добавляем globals для Jest
      },
      parserOptions: {
        ecmaVersion: 12, // Allow ES2021 syntax
        sourceType: "module", // Enable ES6 module support
      },
      parser: typescriptParser,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      "react/react-in-jsx-scope": "off",
      "object-curly-spacing": ["error", "always"],
      "@typescript-eslint/no-unused-vars": "warn",
      "constructor-super": "off",
      "@typescript-eslint/no-explicit-any": ["off"],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/display-name": "off"
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];
