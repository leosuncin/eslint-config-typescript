const base = require('./index');

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['no-secrets'],
      extends: base.overrides[0].extends.concat([
        'plugin:security/recommended',
      ]),
      rules: {
        'no-secrets/no-secrets': 'error',
      },
    },
  ],
};
