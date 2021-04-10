module.exports = {
  extends: ['@dfp/eslint-config'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/display-name': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@dfp/components', './packages/components/src']],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
