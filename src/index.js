import replaceCardNumber from './cardnumber/replace';
import filterCardNumberStream from './cardnumber/filterStream';

export default function sanitize(input) {
  return replaceCardNumber(input);
  // TODO add bank account number matching
}

export function async(input, callback) {
  return new Promise((resolve, reject) => {
    const stream = filterCardNumberStream();

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
  });
  // TODO find possible matches for account-numbers (IBAN)
}
