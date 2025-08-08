# Development

Some commands and tips for developing the project with Vue 3 in Vite.

- Prerequisites: [Node.js](https://nodejs.org/) version 18.3 or higher

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

Run unit tests with code coverage:

```sh
npm run test:coverage
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

## Notes

### Project Initialization

| Name                         | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| [Vue.js](https://vuejs.org/) | A JavaScript framework for building user interfaces. |

- The Vue.js build setup is based on [Vite](https://vite.dev/).

```sh
# create a new project folder
mkdir htwd-project-grade-calculator-vuejs
cd htwd-project-grade-calculator-vuejs

# create a new Vue.js project
npm create vue@latest
```

- Project name: `grade-calculator`
- Features: Vitest, ESLint, Prettier

### Project Dependencies

| Name                                     | Description                       |
| ---------------------------------------- | --------------------------------- |
| [PrimeVue](https://primevue.org/)        | The Next-Gen UI Suite for Vue.js. |
| [Tailwind CSS](https://tailwindcss.com/) | A utility-first CSS framework.    |

#### Installation

1. [**PrimeVue**](https://primevue.org/vite)

   ```shell
   npm install primevue @primeuix/themes
   ```

   _main.js_:

   ```js
   // add import
   import PrimeVue from 'primevue/config'
   import Aura from '@primeuix/themes/aura'

   // replace `createApp(App).mount('#app')` with following
   const app = createApp(App)

   app.use(PrimeVue, {
     theme: {
       preset: Aura
     }
   })

   app.mount('#app')
   ```

2. [**PrimeVue** Icons](https://primevue.org/icons/)

   ```shell
   npm install primeicons
   ```

   _main.js_:

   ```javascript
   // add import
   import 'primeicons/primeicons.css'
   ```

3. [**Tailwind CSS**](https://tailwindcss.com/docs/installation/using-vite)

   ```shell
   npm install tailwindcss @tailwindcss/vite
   ```

   _vite.config.js_:

   ```js
   // add import
   import tailwindcss from '@tailwindcss/vite'

   // add plugin `tailwindcss()`
   export default defineConfig({
     plugins: [vue(), vueDevTools(), tailwindcss()]
   })
   ```

   _main.css_:

   ```css
   /* add import */
   @import 'tailwindcss';
   ```

4. [**PrimeVue** Tailwind CSS Integration](https://primevue.org/tailwind/)

   Use Tailwind v4 not Volt UI:

   ```shell
   npm install tailwindcss-primeui
   ```

   _main.css_:

   ```css
   @import 'tailwindcss';
   /* add import */
   @import 'tailwindcss-primeui';
   ```
