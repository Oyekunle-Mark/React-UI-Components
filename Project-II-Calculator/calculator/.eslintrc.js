module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'quotes': 0,
    'jsx-quotes': 0,
    'arrow-body-style': 0,
    'react/prefer-stateless-function': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'object-curly-newline': 0,
    'comma-dangle': 0,
    'no-useless-return': 0
  },
};
