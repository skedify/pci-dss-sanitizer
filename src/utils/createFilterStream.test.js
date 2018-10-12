import createFilterStream from './createFilterStream';
import expectChar from './expect';

describe('utils/createFilterStream', () => {
  it('should create a stream that filters according to the set expectations', (done) => {
    const stream = createFilterStream({
      mask: s => {
        expect(s).toEqual('Hello');

        return s.replace(/E/i, 'a');
      },
      expectations: [expectChar(/H/i), expectChar(/E/i), expectChar(/L/i), expectChar(/L/i), expectChar(/O/i)],
    });
    const buffer = [];

    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      const output = Buffer.concat(buffer).toString();

      expect(output).toEqual('Hallo!');

      done();
    });

    stream.end('Hello!');
  });
});
