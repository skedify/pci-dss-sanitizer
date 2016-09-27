import filterStream from '../../src/cardnumber/filterStream';
import { expect } from 'chai';

describe('cardnumber', () => {

  describe('filterStream', () => {

    it('should mask a card number in a stream', (done) => {

      const stream = filterStream();
      const buffer = [];
      stream.on('data', buffer.push.bind(buffer));
      stream.on('end', () => {
        const output = Buffer.concat(buffer).toString();

        expect(output).to.equal('lorem ipsum 6703-XXXX XXXX X211.1 lorem ipsum');
        done();
      });

      stream.end('lorem ipsum 6703-7332 1913 8211.1 lorem ipsum');
    });

    it('should not mask something that looks like a card number but isn\'t in a stream', (done) => {

      const stream = filterStream();
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
