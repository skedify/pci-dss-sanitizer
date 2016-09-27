import replaceSlidingRegexMatches from './replaceSlidingRegexMatches';

export default function replaceRegexesWithDecreasingLength(input, replacer, RegExpClass, MIN_LENGTH, MAX_LENGTH, length = MAX_LENGTH) {
  if (length < MIN_LENGTH || length > MAX_LENGTH) {
    return input;
  }

  return replaceRegexesWithDecreasingLength(
    replaceSlidingRegexMatches(input, replacer, new RegExpClass(length)),
    replacer,
    RegExpClass,
    MIN_LENGTH,
    MAX_LENGTH,
    length - 1,
  );
}
