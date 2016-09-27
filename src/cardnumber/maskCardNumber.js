export default function maskCardNumber(input) {
  // count the number of digits in the number
  const total_digits = input.split('')
    .filter(cc => cc.match(/\d/)) // only consider digits
    .length; // concat into a string

  const min_digits = 4;
  const max_digits = total_digits - min_digits + 1;

  // count the number of digits occurred
  let digit_counter = 0;
  return input.replace(/\d/g, (match) => {
    digit_counter++;
    // replace all digits except the first and last 4
    if (digit_counter > min_digits && digit_counter < max_digits) {
      return 'X';
    }
    return match;
  });
}
