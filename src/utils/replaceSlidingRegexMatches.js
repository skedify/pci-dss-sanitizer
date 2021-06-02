function cloneRegex(regex) {
  return new RegExp(
    regex.source,
    `${regex.global ? 'g' : ''}${regex.ignoreCase ? 'i' : ''}${
      regex.multiline ? 'm' : ''
    }${regex.sticky ? 'y' : ''}${regex.unicode ? 'u' : ''}`
  );
}

export default function replaceSlidingRegexMatches(input, replacer, regex) {
  const result = regex.exec(input);

  if (result === null) {
    return input;
  }

  const replacement = replacer(
    ...Array.from(result).concat([result.index, result.input])
  );

  const next_input = `${input.substr(
    0,
    result.index
  )}${replacement}${input.substr(result.index + result[1].length)}`;

  if (next_input !== input) {
    return replaceSlidingRegexMatches(next_input, replacer, cloneRegex(regex));
  }

  // move cursor of regex so the same match is not returned again
  regex.lastIndex++;

  return replaceSlidingRegexMatches(next_input, replacer, regex);
}
