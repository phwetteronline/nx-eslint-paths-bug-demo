const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      // example default behaviour for all TS files in this project:
      'no-console': 'error',
    },
  },
  {
    // Say we want to change the severity of no-console for a given file. We can
    // do this by providing the file path here.
    // Path relative to workspace root: Works as expected when running `nx lint
    // nx-linting-demo`, but pattern does not match the main.ts when the VSCode
    // extension lints it.
    files: ['apps/nx-linting-demo/src/main.ts'],
    //-----
    // If you comment the `files` property above and uncomment the one below,
    // you will see a change in behaviour. When running `nx lint
    // nx-linting-demo`, you will get errors reported the console.logs in
    // main.ts, rather than warnings. But when using the ESLint extension for
    // VSCode, you will see warnings as expected. Also, when you go to the
    // project root and run `npx eslint src/main.ts`, it will output the logs as
    // warnings, as expected. It seems like the VSCode extension runs eslint
    // from the directory where the config is, and I think that is the most
    // convenient way to provide the pathes: relative to the config file.
    // files: ['src/main.ts'],
    rules: {
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
