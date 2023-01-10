module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'eslint-plugin', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', 'node_modules', 'coverage', '.yarn'],
  overrides: [
    {
      files: '**/*.{spec,test}.ts',
      plugins: ['jest'],
      extends: ['plugin:jest/all'],
    },
  ],
  env: {
    es6: true,
    node: true,
  },
};
