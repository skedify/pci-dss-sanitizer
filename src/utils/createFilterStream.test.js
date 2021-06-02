import createFilterStream from './createFilterStream';
import expectChar from './expect';

describe('utils/createFilterStream', () => {
  it('should create a stream that filters according to the set expectations', done => {
    const stream = createFilterStream({
      mask: s => {
        expect(s).toEqual('Hello');

        return s.replace(/E/i, 'a');
      },
      expectations: [
        expectChar(/H/i),
        expectChar(/E/i),
        expectChar(/L/i),
        expectChar(/L/i),
        expectChar(/O/i),
      ],
    });
    const buffer = [];

    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      expect(Buffer.concat(buffer).toString()).toEqual('Hallo!');

      done();
    });

    stream.end('Hello!');
  });

  it('should create a stream that filters according to the set expectations when the stream encoding is set to utf8', done => {
    const stream = createFilterStream({
      mask: s => {
        expect(s).toEqual('Hello');

        return s.replace(/E/i, 'a');
      },
      expectations: [
        expectChar(/H/i),
        expectChar(/E/i),
        expectChar(/L/i),
        expectChar(/L/i),
        expectChar(/O/i),
      ],
    });
    const buffer = [];

    stream.setEncoding('utf8');
    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      expect(buffer.join('')).toEqual('Hallo!');

      done();
    });

    stream.end('Hello!');
  });

  it("should create a stream that doesn't filter anything when no expectations are set", done => {
    const stream = createFilterStream({
      mask: s => {
        expect(s).toEqual('Hello');

        return s.replace(/E/i, 'a');
      },
    });
    const buffer = [];

    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      expect(Buffer.concat(buffer).toString()).toEqual('Hello!');

      done();
    });

    stream.end('Hello!');
  });

  it('should create a stream that filters according to the set expectations when objectMode is set', done => {
    const stream = createFilterStream(
      {
        mask: s => {
          expect(s).toEqual('Hello');

          return s.replace(/E/i, 'a');
        },
        expectations: [
          expectChar(/H/i),
          expectChar(/E/i),
          expectChar(/L/i),
          expectChar(/L/i),
          expectChar(/O/i),
        ],
      },
      {
        objectMode: true,
      }
    );
    const buffer = [];

    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      expect(buffer.join('')).toEqual('Hallo!');

      done();
    });

    stream.end('Hello!');
  });
});
