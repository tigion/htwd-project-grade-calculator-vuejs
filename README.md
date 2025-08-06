# Grade Calculator

Web application for calculating the assessment of final theses.
Optimized for mobile devices.

<!-- TODO: Add an screenshot. -->

## Calculation

| Partial Grade       |  Calculation                        |
| ------------------- | ----------------------------------- |
| Schriftliche Arbeit | `(1. Gutachten + 2. Gutachten) / 2` |
| Verteidigung        | `(Vortrag + Diskussion) / 2`        |

| Final Grade                                |  Calculation                                   |
| ------------------------------------------ | ---------------------------------------------- |
| Informatik/Mathematik<br />(2/3 + 1/3)     | `(2x Schriftliche Arbeit + Verteidigung) / 3`  |
| Wirtschaftswissenschaften<br />(3/4 + 1/4) | `(3x Schriftliche Arbeit + Verteidigung) / 4`  |

> [!NOTE]
> The calculation is performed as an integer, with three decimal places.

> [!NOTE]
> For the partial grades (**Schriftliche Arbeit**, **Verteidigung** and
> **Gesamtnoten**), everything after the first decimal place is cut off in the
> result. The uncut result is displayed below the grades for control purposes.

## Development

The project uses [Vue.js] with [PrimeVue] and [Tailwind CSS].
The calculation is implemented in the JavaScript classes `Calculation` and
`Grade`.

[Vue.js]: https://vuejs.org/
[PrimeVue]: https://primevue.org/
[Tailwind CSS]: https://tailwindcss.com/

For more details, see [DEVELOPMENT.md](./DEVELOPMENT.md)
