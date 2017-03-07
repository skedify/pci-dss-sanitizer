import replace from '../../src/cardnumber/replace';
import { expect } from 'chai';

import { CARDNUMBERS, PSEUDO_CARDNUMBERS } from '../.data';

describe('cardnumber/replace', () => {

  it('should mask all digits except the first and final four', () => {

    Object.keys(CARDNUMBERS).forEach(input => {
      expect(replace(input)).to.equal(CARDNUMBERS[input]);
      return;
    });

  });

  it('should not mask something that looks like a card number but isn\'t', () => {

    PSEUDO_CARDNUMBERS.forEach(input => {
      expect(replace(input)).to.equal(input);
      return;
    });
  });

});
