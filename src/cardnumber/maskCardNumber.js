const REPLACEMENT_CHARACTER = 'X';
const VISIBILE_DIGITS_HEAD = 4;
const VISIBILE_DIGITS_TAIL = 4;

export default function maskCardNumber(input) {
  // count the number of digits in the number
  const total_digits = input.split('')
    .filter(cc => cc.match(/\d/)) // only consider digits
    .length; // concat into a string

  const max_digits = total_digits - VISIBILE_DIGITS_TAIL + 1;

  // count the number of digits occurred
  let digit_counter = 0;
  return input.replace(/\d/g, (match) => {
    digit_counter++;
    // replace all digits except the first and last 4
    if (digit_counter > VISIBILE_DIGITS_HEAD && digit_counter < max_digits) {
      return REPLACEMENT_CHARACTER;
    }
    return match;
  });
}
