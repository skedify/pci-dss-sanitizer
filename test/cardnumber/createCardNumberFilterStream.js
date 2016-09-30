import createCardNumberFilterStream from '../../src/cardnumber/createCardNumberFilterStream';
import { expect } from 'chai';

import { CARDNUMBERS } from '../.data';

describe('cardnumber', () => {

  describe.skip('createCardNumberFilterStream', () => {

    it('should mask a card number in a stream', (done) => {

      const inputs = Object.keys(CARDNUMBERS);

      inputs.forEach((input, i) => {
        const stream = createCardNumberFilterStream();
        const buffer = [];
        stream.on('data', buffer.push.bind(buffer));
        stream.on('end', () => {
          const output = Buffer.concat(buffer).toString();

          expect(output).to.equal(CARDNUMBERS[input]);

          if (i === inputs.length - 1) {
            done();
          }
        });

        stream.end(input);
      });

    });

    it('should not mask something that looks like a card number but isn\'t in a stream', (done) => {

      const stream = createCardNumberFilterStream();
      const buffer = [];
      stream.on('data', buffer.push.bind(buffer));
      stream.on('end', () => {
        const output = Buffer.concat(buffer).toString();

        expect(output).to.equal('lorem ipsum 6703-7342 1913 8211.1 lorem ipsum');
        done();
      });

      stream.end('lorem ipsum 6703-7342 1913 8211.1 lorem ipsum');
    });

  });

});
