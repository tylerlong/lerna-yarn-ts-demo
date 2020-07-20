# lerna-yarn-ts-demo

This is a demo project to demonstrate how to use lerna + yarn + TypeScript together.


## Key takeaways

- If a **devDependency** is installed into root package.json (where lerna is installed), then it shouldn't be installed to individual packages any more. 
  - Because root level devDependency is also available to individual packages.
  - Sample dependency: `yarn-upgrade-all`, `gts`, `typescript`...etc.
- If you want to publish a public scoped package to NPM, add `"publishConfig": {"access": "public"}` to that package's `package.json` file.
- You need to NPM login as `@scope` user in order to publish `@scope/xxx`.
  - Or you create an org named `scope` using your NPM account.
- Each package could has its own configuration file such as `tsconfig.json` & `.eslintrc.json`, and this configuration file should extend root level configuration files (if they exist).


## Lint

```
yarn lint
```


## test

```
yarn jest
```


## Add local dependencies

```shell
# add @tylerlong/test-pkg1 as dependency to packages/tests
yarn lerna add @tylerlong/test-pkg1 packages/tests
# add @tylerlong/test-pkg2 as dependency to packages/tests
yarn lerna add @tylerlong/test-pkg2 packages/tests
```


## Upgrade all dependencies

```
yarn upgrade-all
```


## Compile

```
lerna exec tsc --ignore=@tylerlong/tests
```
