import createFilterStream from '../../src/utils/createFilterStream';
import expectChar from '../../src/utils/expect';
import { expect } from 'chai';

describe('utils/createFilterStream', () => {

  it('should create a stream that filters according to the set expectations', (done) => {
    const stream = createFilterStream({
      mask: s => {
        expect(s).to.equal('shit');
        return s.replace(/I/i, '*');
      },
      expectations: [expectChar(/S/i), expectChar(/H/i), expectChar(/I/i), expectChar(/T/i)],
    });
    const buffer = [];
    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      const output = Buffer.concat(buffer).toString();

      expect(output).to.equal('Holy sh*t!');

      done();
    });

    stream.end('Holy shit!');

  });

});
