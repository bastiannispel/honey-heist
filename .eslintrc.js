module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      tsconfigRootDir: __dirname,
      project: [
        "./tsconfig.eslint.json",
        "./packages/*/tsconfig.json"
      ]
    },
    plugins: [
      "@typescript-eslint",
      "eslint-plugin",
      "import",
      "jest"
    ],
    extends: [
      "eslint:recommended",
      "plugin:eslint-plugin/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:jest/all"
    ],
    env: {
      es6: true,
      node: true
    },
    
    ignorePatterns: [
      "dist", 
      "node_modules", 
      "coverage", 
      ".yarn"
    ]
  }