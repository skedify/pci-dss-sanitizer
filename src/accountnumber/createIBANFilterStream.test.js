/* eslint-disable max-nested-callbacks */
import createIBANFilterStream from './createIBANFilterStream';

import { ACCOUNTNUMBERS } from '../index.data';

describe('accountnumber/createIBANFilterStream', () => {
  it('should mask a card number in a stream', done => {
    const inputs = Object.keys(ACCOUNTNUMBERS);
    let count = inputs.length;

    inputs.forEach(input => {
      const stream = createIBANFilterStream();
      const buffer = [];

      stream.on('data', buffer.push.bind(buffer));
      stream.on('end', () => {
        const output = Buffer.concat(buffer).toString();

        expect(output).toEqual(ACCOUNTNUMBERS[input]);

        if (--count === 0) {
          done();
        }
      });

      stream.end(input);
    });
  });
});
