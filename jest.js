const base = require('./index');

module.exports = {
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
      extends: base.overrides[0].extends.concat(['plugin:jest/recommended']),
    },
  ],
};
