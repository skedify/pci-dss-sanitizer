import { validate } from 'luhn';

import maskCardNumber from './maskCardNumber';

export default function replaceIfCardNumber(match, p1) {
  const only_digits = p1.split('')
    .filter(cc => cc.match(/\d/)) // only consider digits
    .join(''); // concat into a string

  if (validate(only_digits)) {
    return maskCardNumber(p1);
  }

  return p1;
}
