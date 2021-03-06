import { Transform } from 'stream';
import TransformStreamState from './TransformStreamState';

export default function createFilterStream(options, streamOptions) {
  const stream = new Transform({
    transform(chunk, encoding, callback) {
      const input = encoding === 'buffer' ? chunk.toString() : chunk;

      input.split('').forEach(c => {
        const result = this._stream_state.handleChar(c);

        this._stream_state = result.next;
      });

      return callback();
    },

    flush(callback) {
      this.push(this._stream_state.unbuffer());

      return callback();
    },

    ...streamOptions,
  });

  stream._stream_state = new TransformStreamState(
    stream.push.bind(stream),
    options
  );

  return stream;
}
