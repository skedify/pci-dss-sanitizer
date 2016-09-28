import CardNumberRegExp, { MIN_LENGTH, MAX_LENGTH } from './CardNumberRegExp';
import replaceIfCardNumber from './replaceIfCardNumber';
import replaceRegexesWithDecreasingLength from '../utils/replaceRegexesWithDecreasingLength';

export default function replace(input) {
  return replaceRegexesWithDecreasingLength(
    input,
    replaceIfCardNumber,
    CardNumberRegExp,
    MIN_LENGTH, MAX_LENGTH,
  );
}
