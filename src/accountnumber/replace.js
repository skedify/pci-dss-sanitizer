import {
  CARDNUMBER_VISIBILE_DIGITS_HEAD,
  CARDNUMBER_VISIBILE_DIGITS_TAIL,
  REPLACEMENT_CHARACTER,
  FILLER_CHARACTERS,
  IBAN_FORMATS,
} from './IBANRegExp';

function sanitizeIBAN(input) {
  const output = [];

  input = input
    .join('')   //turn array into string
    .replace(new RegExp(FILLER_CHARACTERS, 'g'), '') //filter out filler characters
    .split('');
  input.forEach(function (c, index) {
    if (index < CARDNUMBER_VISIBILE_DIGITS_HEAD || index > input.length - CARDNUMBER_VISIBILE_DIGITS_TAIL - 1) {
      output.push(c);
    } else {
      output.push(REPLACEMENT_CHARACTER);
    }
    if (index % 4 === 3 && index < input.length - 1) {
      output.push(' ');
    }
    return;
  });
  return output;
}

export default function replace(input) {
  return IBAN_FORMATS.reduce((acc, format) => {
    if (!acc.match(format)) {
      return acc;
    }
    return acc.replace(format, sanitizeIBAN(acc.split(''), format).join(''));
  }, input);
}

