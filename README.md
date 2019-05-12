# 📅👍 isDateValid

> Simple utility function to validate that the input is actually a real date

```sh
yarn add isdatevalid
```

## Usage

Given a `year`, `month` and `day` (as either strings or numbers) return `true`/`false` if the given values are valid. Invalid dates are the 29th Feb in a non-leap-year or the 45th January for example.

```js
import { isDateValid } from 'isdatevalid'

/**
 * parameters
 * isDateValid(year, month, day)
 *
 * parameter types
 * isDateValid(year: number | string, month: number | string, day: number | string): boolean
 */

// 👍 valid
isDateValid(2016, 02, 29) // => true
// 2016 is a leap-year so it is possible to have 29th Feb

isDateValid(2016, 02, 1) // => true

// 👎 invalid
isDateValid(2019, 02, 29) // => false
// 2019 is not a leap-year so it is not possible to have 29th Feb

isDateValid(2019, 45, 29) // => false
```

Thanks to [@ivoreis](https://github.com/ivoreis) for drastically simplifying my previous efforts and basically writing this entire function on my behalf

> Made by [ZΛNDΞR ⚡](https://github.com/mrmartineau/)
