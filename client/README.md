# Client Testing

This section (`./client` directory) is directed at functionally testing this package's usage.

While the tests in `./src` already cover a great deal, the purpose of these "client" tests
is to actually verify real world usage of the exposes functions.

Currently the build system requires node `v16`, but once built (see `./dist` after `npm run build`)
the package should run on the supported versions (see `.github/workflows/main.yml`).

Because we want to support multiple node versions,
it's important to verify that our builds still work in all cases.

Right now there's a `./client/test/sh` directory that contains 
some tests for usage through `bash` scripts (as Skedify is currently using this approach).