module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/stylistic-type-checked'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}


// ## Expanding the ESLint configuration

// If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

// - Configure the top-level `parserOptions` property like this:

// ```js
// export default {
//   // other rules...
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: ['./tsconfig.json', './tsconfig.node.json'],
//     tsconfigRootDir: __dirname,
//   },
// }
// ```

// - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
// - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
// - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
