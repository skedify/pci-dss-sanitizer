import replaceCardNumber from './cardnumber/replace';
import replaceAccountNumber from './accountnumber/replace';
import createCardNumberFilterStream from './cardnumber/createCardNumberFilterStream';

export default function sanitize(input) {
  input = replaceAccountNumber(input);
  input = replaceCardNumber(input);
  return input;
}

export function async(input, callback) {
  return new Promise((resolve) => {
    const stream = createCardNumberFilterStream();

    const buffer = [];
    stream.on('data', buffer.push.bind(buffer));
    stream.on('end', () => {
      const output = Buffer.concat(buffer).toString();

      if (callback) {
        callback(output);
      }

      resolve(output);
      return;
    });

    stream.end(input);
    return;
  });
}
