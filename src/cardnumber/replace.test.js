import replace from './replace'

import { CARDNUMBERS, PSEUDO_CARDNUMBERS } from '../index.data'

describe('cardnumber/replace', () => {
  it('should mask all digits except the first and final four', () => {
    Object.keys(CARDNUMBERS).forEach(input => {
      expect(replace(input)).toEqual(CARDNUMBERS[input])
    })
  })

  it("should not mask something that looks like a card number but isn't", () => {
    PSEUDO_CARDNUMBERS.forEach(input => {
      expect(replace(input)).toEqual(input)
    })
  })
})
