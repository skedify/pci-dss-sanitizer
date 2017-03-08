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

Use `npm run commit` when you want to commit a change.
