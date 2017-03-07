import { validate } from 'luhn';
import mask from '../utils/mask';

export default function maskLuhn(input) {
  const only_digits = input.split('')
    .filter(cc => cc.match(/\d/)) // only consider digits
    .join(''); // concat into a string

  if (validate(only_digits)) {
    return mask(input, {
      ranges: '0-9',
    });
  }

  return undefined;
}
