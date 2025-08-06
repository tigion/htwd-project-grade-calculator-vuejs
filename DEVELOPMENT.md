# Development

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Update

### Update Project Dependencies

#### With `npm-check-updates`

```sh
# Shows the latest versions.
npx npm-check-updates
# Updates the _package.json_ file to the latest versions.
npx npm-check-updates -u
# Like `npx npm-check-updates -u`, but you choose interactive which versions to update.
npx npm-check-updates -i
# Installs (updates) the packages with the new versions from _package.json_.
npm install
```

#### With `npm update`

```sh
npm outdated
npm update --save
```

> [!NOTE]
> By default `npm update` will not update the semver values of
> direct dependencies in your project _package.json_.
> Allow it with `npm update --save`.

> [!NOTE]
> `npm update` does not update to new major versions.
> Manually update the _package.json_ file to the new major version and run
> `npm update --save` again.
