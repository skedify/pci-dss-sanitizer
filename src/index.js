import replaceCardNumber from './cardnumber/replace';
import replaceAccountNumber from './accountnumber/replace';
import createCardNumberFilterStream from './cardnumber/createCardNumberFilterStream';
import createIBANFilterStream from './accountnumber/createIBANFilterStream';
import pipe from 'multipipe';

export default function sanitize(input) {
  input = replaceAccountNumber(input);
  input = replaceCardNumber(input);

  return input;
}

export function createStream() {
  return pipe(createIBANFilterStream(), createCardNumberFilterStream());
}

export function async(input, callback) {
  return new Promise((resolve) => {
    const stream = createStream();

    const buffer = [];

    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      const output = Buffer.concat(buffer).toString();

      callback && callback(output);

      resolve(output);

      return;
    });

    stream.end(input);

    return;
  });
}
