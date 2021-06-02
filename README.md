# PCI-DSS Sanitizer

**Release:**
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/skedify/pci-dss-sanitizer/develop/LICENSE)
[![npm](https://img.shields.io/npm/v/pci-dss-sanitizer.svg?maxAge=2592000)](https://www.npmjs.com/package/pci-dss-sanitizer)
[![Build Status](https://img.shields.io/travis/skedify/pci-dss-sanitizer/master.svg?maxAge=2592000)](https://travis-ci.org/skedify/pci-dss-sanitizer)
[![Code Coverage](https://img.shields.io/codecov/c/github/skedify/pci-dss-sanitizer/master.svg?maxAge=2592000)](https://codecov.io/gh/skedify/pci-dss-sanitizer)

**Development:**
[![Build Status](https://img.shields.io/travis/skedify/pci-dss-sanitizer/develop.svg?maxAge=2592000)](https://travis-ci.org/skedify/pci-dss-sanitizer/branches)
[![Code Coverage](https://img.shields.io/codecov/c/github/skedify/pci-dss-sanitizer/develop.svg?maxAge=2592000)](https://codecov.io/gh/skedify/pci-dss-sanitizer/branch/develop)
[![GitHub issues](https://img.shields.io/github/issues/skedify/pci-dss-sanitizer.svg)](https://github.com/skedify/pci-dss-sanitizer/issues)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Usage

You can use this synchronously
```javascript
import sanitize from 'pci-dss-sanitizer';
const unsanitized_string = 'your string containing sensitive banking info';
const sanitized_string = sanitize(unsanitized_string);
```

Or you can use it as a stream _(this is actually the recommended way to use this library)_

```javascript
import { createStream as createSanitizerStream } from 'pci-dss-sanitizer';
const unsanitized_stream = process.stdin;
const sanitized_stream = unsanitized_stream.pipe(createSanitizerStream())
sanitized_stream.pipe(process.stdout);
// you could also write this as a one-liner:
process.stdin.pipe(createSanitizerStream()).pipe(process.stdout);
```

Or if you're more into Promises/callbacks, you could use it as an async function

```javascript
import { async as sanitizeAsync } from 'pci-dss-sanitizer';
const unsanitized_string = 'your string containing sensitive banking info';
const sanitized_promise = sanitizeAsync(unsanitized_string, your_optional_callback_here);
sanitized_promise.then(function(sanitized_string) {
  ...
});
```

## Contributing

### Commits

Use `npm run commit` when you want to commit a change.

### Stack

This repostiory uses [TSDX](https://tsdx.io/) for development.

## Commands

TSDX scaffolds your new library inside `/src`.

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
