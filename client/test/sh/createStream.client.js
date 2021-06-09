#!/usr/bin/env node
const path  = require('path');

const dist_path = path.resolve('./dist');

// Read the input, pipe it through the stream, pipe it back out
process.stdin.pipe(require(dist_path).createStream()).pipe(process.stdout);