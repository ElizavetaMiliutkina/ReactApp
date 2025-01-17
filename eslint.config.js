import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
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
      "constructor-super": "off"
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];
