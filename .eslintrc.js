/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
    // Hinzufügen für striktere, typsichere Regeln
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  // parserOptions hinzufügen, um typsicheres Linting zu ermöglichen
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    // Regel so ändern, dass nur mit _ beginnende Variablen ignoriert werden
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // Optional: Regel für explizite Rückgabetypen hinzufügen
    // Verbessert die Lesbarkeit für Sie und den KI-Assistenten
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        extraFileExtensions: ['.vue'],
        // Wichtig für Vue 3 mit Script Setup
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
}
