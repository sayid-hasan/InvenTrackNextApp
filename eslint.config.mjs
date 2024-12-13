import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // For client-side globals like `window`, `document`
        ...globals.node, // For server-side globals like `process`, `__dirname`
      },
    },
    rules: {
      "react/prop-types": "off", // Disable globally
    },
  },
];
