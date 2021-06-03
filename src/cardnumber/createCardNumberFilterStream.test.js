/* eslint-disable max-nested-callbacks */
import createCardNumberFilterStream from './createCardNumberFilterStream';

import { CARDNUMBERS, PSEUDO_CARDNUMBERS } from '../index.data';

describe('cardnumber/createCardNumberFilterStream', () => {
  it('should mask a card number in a stream', done => {
    const inputs = Object.keys(CARDNUMBERS);
    let count = inputs.length;

    inputs.forEach(input => {
      const stream = createCardNumberFilterStream();
      const buffer = [];

      stream.on('data', buffer.push.bind(buffer));
      stream.on('end', () => {
        const output = Buffer.concat(buffer).toString();

        expect(output).toEqual(CARDNUMBERS[input]);

        if (--count === 0) {
          done();
        }
      });

      stream.end(input);
    });
  });

  it("should not mask something that looks like a card number but isn't in a stream", done => {
    let count = PSEUDO_CARDNUMBERS.length;

    PSEUDO_CARDNUMBERS.forEach(input => {
      const stream = createCardNumberFilterStream();
      const buffer = [];

      stream.on('data', buffer.push.bind(buffer));
      stream.on('end', () => {
        const output = Buffer.concat(buffer).toString();

        expect(output).toEqual(input);

        if (--count === 0) {
          done();
        }
      });

      stream.end(input);
    });
  });
});
