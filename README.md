<h1 align="center">
  <a href="https://github.com/romcal/romcal-api">
    <img alt="romcal" src="https://user-images.githubusercontent.com/1045997/89793747-854ede00-db26-11ea-8e46-837ab4ca0a96.png">
  </a>
</h1>

<p align="center">
  Generate the liturgical calendar of the Catholic Church used by the Roman Rite.
</p>

<p align="center">
  Supports Node v10+, Browsers (IE10+).
</p>

<p align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/romcal/romcal?color=blue&style=flat-square"></a>
  <a href="https://www.npmjs.com/package/romcal"><img alt="Downloads" src="https://img.shields.io/npm/dm/romcal?color=blue&style=flat-square"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/romcal/v/latest"><img alt="latest" src="https://img.shields.io/npm/v/romcal/latest?style=flat-square&logo=npm"></a>
  <a href="https://www.npmjs.com/package/romcal/v/beta"><img alt="beta" src="https://img.shields.io/npm/v/romcal/beta?style=flat-square&logo=npm"></a>
  <a href="https://www.npmjs.com/package/romcal/v/alpha"><img alt="alpha" src="https://img.shields.io/npm/v/romcal/alpha?style=flat-square&logo=npm"></a>
</p>

<p align="center">
  <a href="https://travis-ci.org/romcal/romcal/branches"><img alt="prod" src="https://img.shields.io/travis/romcal/romcal.svg?label=master&style=flat-square&logo=travis"></a>
  <a href="https://travis-ci.org/romcal/romcal/branches"><img alt="test" src="https://img.shields.io/travis/romcal/romcal.svg?label=test&style=flat-square&logo=travis"></a>
  <a href="https://travis-ci.org/romcal/romcal/branches"><img alt="dev" src="https://img.shields.io/travis/romcal/romcal.svg?label=dev&style=flat-square&logo=travis"></a>
</p>

## Documentation

**Quick start** (above on this page)

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Revisions & Release History](#revisions)
- [Module Robustness & Data Integrity](#disclaimer)
- [Credits](#credits)
- [License](#license)

**Main usages**

- [Configure romcal ⇗](/docs/configure-romcal.md)
- [Output data and JSON schema ⇗](/docs/data-output.md)
- [Manipulate and refining data results ⇗](/docs/refining-data-results.md)

**Contribute**

- [Install, Build, Run and Test romcal locally ⇗](/docs/contribute-to-romcal.md)
- [Localization ⇗](/docs/localization.md)
- [Codebase Documentation ⇗](https://romcal.github.io/romcal/)

**Advanced usage**

- [Advanced usage and contributions ⇗](/docs/advanced-usage.md)

## Description

romcal generates the liturgical calendar of the Catholic Church used by the Roman Rite.
Output conforms to the revised liturgical calendar as approved by Paul VI in [Mysterii Paschalis](http://www.romcal.net/mysterii.html) dated 14 February 1969.

- :date: **Perpetual calendar:**<br> romcal allow querying liturgical dates for any year in the Gregorian calendar.
Note that dates for years before 1969 will still be returned in a format conforming to the calendar reforms of 1969, even though those years came before this calendar reform.

- :gear: **Configure and refine output:**<br> output can be configured for the standard calendar year (Jan 1st - Dec 31st) or the liturgical year (First Sunday of Advent - Christ the King).
You can filter queries to allow more streamlined date results to be obtained for the year. Additional output options are described below in the usage section.

- :globe_with_meridians: **i18n, localization and calendars:**<br> romcal aims to have liturgical date names in all your preferred languages, and for any liturgical calendars (national, diocesan...).
You are more than welcome to contribute, add new localization, and improve the quality of this library!

## Install

Install via **npm**:

```
$ npm install romcal
```

Install via **Yarn**:

```
$ yarn add romcal
```

Additionally, romcal is also available for installation via various "release tags" that represent different stages of development for a given version of the code.

- [`latest`](href="https://www.npmjs.com/package/romcal/v/latest)
  The latest, stable and production ready version of romcal is always released on the `master` branch. Releases on this branch are tagged in `npm` using the `latest` tag and can be installed via `npm install romcal@latest` or simply `npm install romcal` which defaults to the `latest` tag.

- [`beta`](href="https://www.npmjs.com/package/romcal/v/beta)
  The release candidate for production. Code here is mostly stable but may still lack some tests and so may be subject to some unexpected behavior. Install via `npm install romcal@beta`.

- [`alpha`](href="https://www.npmjs.com/package/romcal/v/alpha)
  The unstable development release tag. Code here might be unstable and untested. Use at your own risk! Normally, only developers would use this release for testing purposes. Install via `npm install romcal@alpha`.

- [`canary`](href="https://www.npmjs.com/package/romcal/v/canary)
  Bleeding edge features; high levels of code instability. Consumers should almost always never need to install these releases as they contain ongoing work that is not complete for general use. Install via `npm install romcal@canary`.

## Usage

Require romcal in your project:

```javascript
var romcal = require('romcal');
```

or as a CommonJS module:

```javascript
import romcal from 'romcal';
```

or in a webpage for direct usage on browsers:

```html
<script type="text/javascript" src="romcal.bundle.min.js"></script>
```

Including romcal directly in the browser will result in an object called Romcal being attached to the DOM window object.
All the functions below will exist as properties of the Romcal object.

Invoke the `calendarFor` method to retrieve an array of liturgical dates and celebrations in the Roman Calendar.
This method accepts an object of configuration properties to obtain customized output.

```javascript
romcal.calendarFor({
  year: 2020,
  country: 'unitedStates',
  locale: 'en',
  epiphanyOnSunday: true | false,
  corpusChristiOnSunday: true | false,
  ascensionOnSunday: true | false,
  outputOptionalMemorials: true | false,
  type: 'calendar' | 'liturgical',
});
```

For further information on the configuration properties: :books: [Configure romcal](/docs/configure-romcal.md).

This produces an array of date item objects (one date item per each day of the year):

```json5
[
  {
    key: 'maryMotherOfGod',
    name: 'Mary, Mother of God',
    date: '2020-01-01T00:00:00.000Z',
    rank: 'SOLEMNITY',
    liturgicalColors: ['WHITE'],
    seasons: ['CHRISTMASTIDE'],
    seasonNames: ['Christmas'],
    periods: ['CHRISTMAS_OCTAVE'],
    cycles: {
      sundayCycle: 'YEAR_A',
      ferialCycle: 'YEAR_2',
      psalterWeek: 'WEEK_2',
    },
    calendar: {
      totalWeeksInGregorianYear: 53,
      totalWeeksInLiturgicalYear: 52,
      weekOfGregorianYear: 1,
      weekOfLiturgicalYear: 5,
      weekOfSeason: 2,
      dayOfGregorianYear: 1,
      dayOfLiturgicalYear: 32,
      dayOfSeason: 8,
      dayOfWeek: 3,
      dayOfWeekCountInMonth: 1,
      startOfLiturgicalYear: '2019-12-01T00:00:00.000Z',
      endOfLiturgicalYear: '2020-11-28T00:00:00.000Z',
      easter: '2020-04-12T00:00:00.000Z',
    },
    metadata: {
      titles: [],
    },
  },
  // ...
]
```

For further information:
- :books: [Output data and JSON schema](docs/data-output.md).
- :books: [Manipulate and refining data results](/docs/refining-data-results.md).

## Contribute

romcal is an open source project, this means you are more than welcome to contribute!
Especially to find bugs or write new tests, verify or complete calendars, or pull new localization.

To jump into romcal’s codebase more easily, you might be interested in reading:
- :books: [Contributing Guide](CONTRIBUTING.md).
- :books: [Install, Build, Run and Test romcal locally](docs/contribute-to-romcal.md).
- :books: [Localization](/docs/localization.md).
- :books: [Codebase Documentation](https://romcal.github.io/romcal/).

## Revisions & Release History <a name="revisions"></a>

See [history](HISTORY.md) for latest updates and important/breaking changes.

## Module Robustness & Data Integrity <a name="disclaimer"></a>

**Calendar entries** are pulled from various sources from the internet and various liturgical books. As such their accuracy might not be ensured.
If you find an incorrect calendar entry (e.g. wrong date, wrong feast rank, spelling issue, typos), you are most welcome to contribute or inform the team on the GitHub issue tracker, so that the necessary changes can be made to make this a more robust and reliable module.

**romcal’s code logic** aim to be fully compliant with the _General Instruction of the Roman Missal_ and the _Universal Norms on the Liturgical Year and the General Roman Calendar_.

## Credits

This node module is inspired by the C program [romcal](http://www.romcal.net/) written by Kenneth G. Bath. This module, while exhibiting similar output, is written ground up using different tools and technologies and exposes many new functionalities.

Additional credits for bug fixes, localization and suggestions can be seen at [here](./AUTHORS.md).

## License

[MIT](LICENSE)

<p align="center">
  <a href="https://github.com/romcal/romcal">
    <img alt="romcal-icon" src="https://user-images.githubusercontent.com/1045997/89793396-1c676600-db26-11ea-9426-991ac1e32b82.png">
  </a>
</p>
