import { validate } from 'luhn';

import CardNumberRegExp, { MIN_LENGTH, MAX_LENGTH } from './CardNumberRegExp';
import maskCardNumber from './maskCardNumber';
import replaceRegexesWithDecreasingLength from '../utils/replaceRegexesWithDecreasingLength';

export default function replace(input) {
  return replaceRegexesWithDecreasingLength(input, function(match, p1) {
    const only_digits = p1.split('')
      .filter(cc => cc.match(/\d/)) // only consider digits
      .join(''); // concat into a string

    if (validate(only_digits)) {
      return maskCardNumber(p1);
    }

    return p1;
  }, CardNumberRegExp, MIN_LENGTH, MAX_LENGTH);
}
