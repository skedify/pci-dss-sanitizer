# PCI-DSS Sanitizer

**Release:**
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/skedify/pci-dss-sanitizer/develop/LICENSE)
[![npm](https://img.shields.io/npm/v/pci-dss-sanitizer.svg?maxAge=2592000)](https://www.npmjs.com/package/pci-dss-sanitizer)
![Build Status](https://github.com/skedify/pci-dss-sanitizer/actions/workflows/main.yml/badge.svg)

**Development:**
![Build Status](https://github.com/skedify/pci-dss-sanitizer/actions/workflows/main.yml/badge.svg?branch=develop)
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

### Releases

This project uses [GitHub actions](https://docs.github.com/en/actions/reference) 
and [semantic-release](https://github.com/semantic-release/semantic-release) for creating releases.

#### Release Candidates

To make a (temporary) release candidate, you can use the following commands:

```bash
# Create a new rc from the latest/remote develop
npm run release-candidate
```

or 

```bash
# Create a new rc from a specific branch
npm run release-candidate -- feature/SKED-XXXX
```

That command will make a new `rc` branch (locally and remotely) on which `semantic-release` is configured
to create a new release candidate (see `.releaserc`).

#### Final Releases

Since `semantic-release` is currently configured to run on any `push`'es to `master`,
creating and merging a GitHub Pull Request into `master` will trigger a new release automatically.

Typically we do this via a temporary `release/next` or `release/SKED-XXXX` branch and creating a PR via GitHub UI.

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

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types. Adjust according to your needs.

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
