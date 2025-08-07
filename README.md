# Grade Calculator

Web application for calculating the assessment of final theses.
Optimized for mobile devices.

<!-- TODO: Add an screenshot. -->

## Calculation

The calculation is performed as an integer, with three decimal places.

| Partial Grade       |  Calculation                        |
| ------------------- | ----------------------------------- |
| Schriftliche Arbeit | `(1. Gutachten + 2. Gutachten) / 2` |
| Verteidigung        | `(Vortrag + Diskussion) / 2`        |

| Final Grade                                |  Calculation                                   |
| ------------------------------------------ | ---------------------------------------------- |
| Informatik/Mathematik<br />(2/3 + 1/3)     | `(2x Schriftliche Arbeit + Verteidigung) / 3`  |
| Wirtschaftswissenschaften<br />(3/4 + 1/4) | `(3x Schriftliche Arbeit + Verteidigung) / 4`  |

> [!NOTE]
> For the partial grades and the final grade, all digits after the first
> decimal place are irrelevant and are truncated. The uncut result is displayed
> below the grades for verification purposes.

## Development

The project uses [Vue.js] with [PrimeVue] and [Tailwind CSS].
The calculation is implemented in the JavaScript classes `Calculation` and
`Grade`.

[Vue.js]: https://vuejs.org/
[PrimeVue]: https://primevue.org/
[Tailwind CSS]: https://tailwindcss.com/

For more details, see [DEVELOPMENT.md](./DEVELOPMENT.md)

## History

- **vuejs**:
  - 2025-08-07, v3: Vue.js v3, Vitest v3, PrimeVue v4, Tailwind CSS v4
  - 2024-06-24, v3: Vue.js v3, Jest v29, PrimeVue v4, Tailwind CSS v3
- **js**:
  - 2022-02-01, v2: JavaScript, HTML, Bootstrap (archived)
- **php**:
  - 2016-10-20, v1: PHP, jQuery, HTML, CSS (archived, private)
