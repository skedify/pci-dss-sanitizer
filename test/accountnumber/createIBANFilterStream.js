import createIBANFilterStream from '../../src/accountnumber/createIBANFilterStream';
import { expect } from 'chai';

import { ACCOUNTNUMBERS } from '../.data';

describe('accountnumber/createIBANFilterStream', function() {

  it('should mask a card number in a stream', function(done) {
    this.timeout(4000);

    const inputs = Object.keys(ACCOUNTNUMBERS);
    let count = inputs.length;

    inputs.forEach(input => {
      const stream = createIBANFilterStream();
      const buffer = [];
      stream.on('data', buffer.push.bind(buffer));
      stream.on('end', () => {
        const output = Buffer.concat(buffer).toString();

        expect(output).to.equal(ACCOUNTNUMBERS[input]);

        if (--count === 0) {
          done();
        }
      });

      stream.end(input);
    });

  });

});
