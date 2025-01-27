This project demonstrates the issue around relative paths inside eslint configs.

The relevant files are:

- apps/nx-linting-demo/eslint.config.cjs: Here, you can find a sample config
  with some explanations and a commented line of config which can be swapped in
  in order to demonstrate the issue
- apps/nx-linting-demo/src/main.ts: Contains 2 calls of `console.*` functions
  which are linting violations in terms of the sample config. These `console.*`
  calls can be used in order to verify the issue described on GitHub and in the
  comments of the config file
