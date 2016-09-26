import resolve from 'rollup-plugin-node-resolve';
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';

import fs from 'fs';

const PACKAGE = require('./package.json');

const SOURCE_MAPS = process.env.NODE_ENV !== 'production';

const plugins = [
  eslint({
    exclude: ['node_modules/**', 'package.json'],
  }),
  babel(((babelrc) => {
    return Object.assign(babelrc, {
      babelrc: false,
      plugins: babelrc.plugins.filter(p => p !== 'transform-es2015-modules-commonjs'),
    });
  })(JSON.parse(fs.readFileSync('./.babelrc', 'utf8')))),
  resolve({
    jsnext: true,
    extensions: ['.js', '.json'],
  }),
];

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  format: 'cjs',
  exports: 'named',
  sourceMap: SOURCE_MAPS,
  external: Object.keys(PACKAGE.dependencies).concat([
    'assert', 'child_process', 'cluster', 'crypto', 'dns', 'events', 'fs',
    'http', 'https', 'module', 'net', 'os', 'path', 'querystring', 'readline',
    'repl', 'stream', 'string_decoder', 'tls', 'tty', 'dgram', 'url', 'v8',
    'vm', 'zlib',
  ]),
  banner: [
    '/**',
    ` * ${PACKAGE.name}`,
    ` * @version ${PACKAGE.version}`,
    ` * @author ${PACKAGE.author.name}`,
    ` * @license ${PACKAGE.license}`,
    ' */',
  ].join('\n'),
  plugins,
};
