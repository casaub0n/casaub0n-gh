module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true
  },
  "rules": {
    "react/jsx-no-target-blank": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ]
  }
}