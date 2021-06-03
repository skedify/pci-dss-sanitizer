#!/usr/bin/env node
// Read the input, pipe it through the stream, pipe it back out
import { createStream } from '../dist'

process.stdin.pipe(createStream()).pipe(process.stdout);