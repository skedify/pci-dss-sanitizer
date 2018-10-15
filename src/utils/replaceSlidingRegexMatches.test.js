import replaceSlidingRegexMatches from './replaceSlidingRegexMatches'

import CardNumberRegExp from '../cardnumber/CardNumberRegExp'
import replaceIfCardNumber from '../cardnumber/replaceIfCardNumber'

describe('utils/replaceSlidingRegexMatches', () => {
  it('should correctly mask a cardnummer', () => {
    expect(
      replaceSlidingRegexMatches(
        '5420923878724339',
        replaceIfCardNumber,
        new CardNumberRegExp(16)
      )
    ).toEqual('5420********4339')
  })

  it('should correctly mask a cardnummer with all regex options', () => {
    const cardNumberRegex = new RegExp('(?=((?:\\d[\\s\\.\\-]?){16}))', 'gimyu')

    expect(
      replaceSlidingRegexMatches(
        '5420923878724339',
        replaceIfCardNumber,
        cardNumberRegex
      )
    ).toEqual('5420********4339')
  })

  it('should correctly mask a cardnummer with no regex options', () => {
    const cardNumberRegex = new RegExp('(?=((?:\\d[\\s\\.\\-]?){16}))', '')

    expect(
      replaceSlidingRegexMatches(
        '5420923878724339',
        replaceIfCardNumber,
        cardNumberRegex
      )
    ).toEqual('5420********4339')
  })
})
