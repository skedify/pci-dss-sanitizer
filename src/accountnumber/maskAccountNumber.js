import {
  FILLER_CHARACTERS,
} from './IBANRegExp';

const REPLACEMENT_CHARACTER = 'X';
const CARDNUMBER_VISIBILE_DIGITS_HEAD = 4;
const CARDNUMBER_VISIBILE_DIGITS_TAIL = 4;

export default function maskAccountNumber(input) {
  const output = [];

  input
    .split('')
    .filter(c => c.match(FILLER_CHARACTERS) === null) // filter out filler characters
    .forEach(function (c, index, arr) {
      if (index < CARDNUMBER_VISIBILE_DIGITS_HEAD || index > arr.length - CARDNUMBER_VISIBILE_DIGITS_TAIL - 1) {
        output.push(c);
      } else {
        output.push(REPLACEMENT_CHARACTER);
      }
      if (index % 4 === 3 && index < arr.length - 1) {
        output.push(' ');
      }
      return;
    });
  return output.join('');
}
