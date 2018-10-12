import CardNumberRegExp, { MIN_LENGTH, MAX_LENGTH } from './CardNumberRegExp'
import replaceIfCardNumber from './replaceIfCardNumber'
import replaceRegexesWithDecreasingLength from '../utils/replaceRegexesWithDecreasingLength'
import repeatUntilStable from '../utils/repeatUntilStable'

export default function replace(text) {
  return repeatUntilStable(text, input =>
    replaceRegexesWithDecreasingLength(
      input,
      replaceIfCardNumber,
      CardNumberRegExp,
      MIN_LENGTH,
      MAX_LENGTH
    )
  )
}
