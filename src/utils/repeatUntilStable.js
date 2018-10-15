export default function repeatUntilStable(input, fn) {
  const masked = fn(input)

  if (masked === input) {
    // no more matches were found, so we can stop processing
    return input
  }

  // try to find another match
  return repeatUntilStable(masked, fn)
}
