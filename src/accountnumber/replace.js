import IBANRegExp from './IBANRegExp';

import maskAccountNumber from './maskAccountNumber';

export default function replace(input) {

  const masked = input.replace(new IBANRegExp(), (match) => {
    return maskAccountNumber(match);
  });

  if (masked === input) { // no more matches were found, so we can stop processing
    return input;
  }

  // try to find another match
  return replace(masked);
}
