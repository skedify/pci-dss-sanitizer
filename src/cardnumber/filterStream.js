import { Transform } from 'stream';
import { validate } from 'luhn';

import { CARDNUMBER_CHARS, MIN_LENGTH, MAX_LENGTH } from './CardNumberRegExp';

export default function filterCardNumberStream() {
  const buffer = [];

  function unbuffer(amount = buffer.length) {
    return buffer.splice(0, amount).join('');
  }

  function matchBuffer() {
    // take all the numbers currently buffered to check if they form a bank card number
    const possible_card_number = buffer // take currently buffered characters
      .filter(cc => cc.match(/\d/)) // only consider digits
      .join(''); // concat into a string

    // console.log(`trying to match current buffer: ${buffer.join('')} | reduced to ${possible_card_number}`);

    // if the
    if (possible_card_number.length >= MIN_LENGTH && validate(possible_card_number)) {
      return unbuffer().replace(/\d/g, (match, offset, string) => {
        // console.log(`match: ${match}, offset: ${offset}, string: ${string}`);
        if (offset > 1 && offset < string.length - 1) {
          return 'x';
        }
        return match;
      });
    }

    return false;
  }

  return new Transform({
    transform(chunk, encoding, callback) {
      const input = encoding === 'buffer'
        ? chunk.toString()
        : chunk;

      input.split('').forEach(c => {
        if (!c.match(CARDNUMBER_CHARS)) {
          // current buffer will never be a card number, flush it
          this.push(unbuffer());
          // flush current character
          this.push(c);
          return;
        }

        // store the current character in the internal buffer
        buffer.push(c);

        // take all the numbers currently buffered to check if they form a bank card number
        const match_with_new_char = matchBuffer();

        // if the
        if (match_with_new_char !== false) {
          this.push(match_with_new_char);
        } else if (buffer.length > MAX_LENGTH * 2) {
          this.push(unbuffer(1));

          const match_with_old_char_removed = matchBuffer();
          if (match_with_old_char_removed !== false) {
            this.push(match_with_old_char_removed);
          }
        }
      });

      return callback();
    },
    flush(callback) {
      // if at the end of the stream we still have buffered characters, flush them
      this.push(unbuffer());
      return callback();
    },
  });
}
