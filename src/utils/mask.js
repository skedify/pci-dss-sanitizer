export default function mask(
  input,
  {
    ranges = '0-9',
    ignoreLeading = 4,
    ignoreTrailing = 4,
    replacement = '*',
  } = {}
) {
  const maskable = new RegExp(`[${ranges}]`, 'g')

  // count the number of maskable characters
  const total_maskable = input.split('').filter(cc => cc.match(maskable)).length

  const max_maskable = total_maskable - ignoreTrailing

  // count the number of matches occurred
  let digit_counter = 0

  return input.replace(maskable, match => {
    digit_counter++

    // replace all matches except the first and last 4
    if (ignoreLeading < digit_counter && digit_counter <= max_maskable) {
      return replacement
    }

    return match
  })
}
