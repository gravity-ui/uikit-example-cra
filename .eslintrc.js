module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    __IS_DEV__: true,
    'process.env': true,
  },
  extends: [
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
  ],
  ignorePatterns: [
    "build/**",
  ],
  rules: {
    quotes: [
      0,
    ],
    "max-len": [
      "warn",
      {
        ignoreComments: true,
        code: 100,
      },
    ],
    "linebreak-style": 0,
    "react/jsx-indent": [
      2,
      2,
    ],
    "react/jsx-indent-props": [
      2,
      2,
    ],
    indent: [
      2,
      2,
    ],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [
          ".js",
          ".jsx",
          ".tsx",
        ],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
  },

  overrides: [
    {
      files: [
        "**/src/**/*.{test,stories}.{ts,tsx}",
      ],
      rules: {
        "max-len": "off",
      },
    },
  ],
};