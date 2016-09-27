import { validate } from 'luhn';

import { CARDNUMBER_CHARS,
  CARDNUMBER_VISIBILE_DIGITS_HEAD,
  CARDNUMBER_VISIBILE_DIGITS_TAIL,
  REPLACEMENT_CHARACTER,
  FILLER_CHARACTERS,
  IBAN_FORMATS
} from './IBANRegExp';

export default function replace(input) {
  IBAN_FORMATS.forEach(format => {
    if (input.match(format)) {
      input = input.replace(format, sanitizeIBAN(input.split(''), format).join(''));
    }
  });
  return input;

}

function sanitizeIBAN(input, format) {
  let output = [];

  input = input
    .join('')   //turn array into string
    .replace(new RegExp(FILLER_CHARACTERS, 'g'), "") //filter out filler characters
    .split('');
  input.forEach(function (c, index) {
    if ((index < CARDNUMBER_VISIBILE_DIGITS_HEAD) || (index > (input.length - CARDNUMBER_VISIBILE_DIGITS_TAIL - 1))) {
      output.push(c);
    } else {
      output.push(REPLACEMENT_CHARACTER);
    }
    if (index % 4 == 3 && index < input.length-1) {
      output.push(' ');
    }
  });
  return output;
}
