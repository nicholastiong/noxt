module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    __ENV__: "readonly",
    __LOCALE__: "readonly",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ],
  plugins: ["react-hooks"],
  rules: {
    "prefer-template": "warn",
    "prettier/prettier": "warn",
    // recommended from eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-types": 1,
    "prefer-const": 1,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "react/display-name": 0,
    "@typescript-eslint/ban-ts-comment": 1,
    "react/no-unescaped-entities": 1,
    "react/jsx-curly-brace-presence": 1,
    "object-shorthand": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
