import { Transform } from 'stream';

import CardNumberRegExp, { FILLER_CHARACTERS, CARDNUMBER_CHARACTERS, MIN_LENGTH, MAX_LENGTH } from './CardNumberRegExp';
import replaceIfCardNumber from './replaceIfCardNumber';
import replaceRegexesWithDecreasingLength from '../utils/replaceRegexesWithDecreasingLength';

export default function createCardNumberFilterStream() {
  const buffer = [];

  function unbuffer(amount = buffer.length) {
    return buffer.splice(0, amount);
  }

  function match(charlist) {
    const current_non_filler_chars = charlist.filter(bc => bc.match(FILLER_CHARACTERS) === null);
    const current_non_filler = current_non_filler_chars.join('');

    // if enough characters have been accumulated to match the longest possible number, start testing for matches
    if (current_non_filler_chars.length === MAX_LENGTH) {
      const replacement = replaceRegexesWithDecreasingLength(
        current_non_filler,
        replaceIfCardNumber,
        CardNumberRegExp,
        MIN_LENGTH, MAX_LENGTH,
        current_non_filler.length,
      );
      if (replacement !== current_non_filler) {
        // found a match. assume there won't be another match?
        return replacement;
      }

    }

    return false;
  }

  return new Transform({
    transform(chunk, encoding, callback) {
      const input = encoding === 'buffer'
        ? chunk.toString()
        : chunk;

      input.split('').forEach(c => {
        if (!c.match(CARDNUMBER_CHARACTERS)) {
          // current buffer might be a short card number, either way flush it
          const current_buffer = unbuffer();
          const found = match(current_buffer);
          if (found === false) {
            this.push(current_buffer.join(''));
          } else {
            this.push(found);
          }
          // flush current character
          this.push(c);
          return;
        }

        // store the current character in the internal buffer
        buffer.push(c);

        const found = match(buffer);
        if (found === false) {
          // the current contents of the buffer don't match, but they contain the max amount of chars that might match
          // this means the first digit (and any filler chars) can never be part of a bank card number
          // pass them on
          let first_digit_unseen = true;
          this.push(unbuffer(buffer.findIndex(e => {
            // if character is not a filler, it must be a digit
            if (e.match(FILLER_CHARACTERS) === null) {
              // if no digits were encountered yet
              if (first_digit_unseen) {
                // remember that now we HAVE seen a digit
                first_digit_unseen = false;
                return false;
              }
              // if this is the second digit we see, stop
              return true;
            }
            return false;
          })).join(''));
        } else {
          this.push(found);
        }
      });

      return callback();
    },
    flush(callback) {
      // if at the end of the stream we still have buffered characters, flush them
      this.push(unbuffer().join(''));
      return callback();
    },
  });
}
