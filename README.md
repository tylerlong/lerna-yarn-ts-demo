# lerna-yarn-ts-demo

This is a demo project to demonstrate how to use lerna + yarn + TypeScript together.


## Lint

```
yarn lint
```

## test

```
yarn jest
```

## Add local dependencies

```
yarn lerna add @tylerlong/pkg1 packages/tests
yarn lerna add @tylerlong/pkg2 packages/tests
```

## Upgrade all dependencies

```
yarn upgrade-all
```