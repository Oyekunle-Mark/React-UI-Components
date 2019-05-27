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
    'arrow-body-style': 0,
    'react/no-unescaped-entities': 0,
    'jsx-quotes': 0,
    'quotes': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0
  },
};
