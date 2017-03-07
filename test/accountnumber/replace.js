import replace from '../../src/accountnumber/replace';
import { expect } from 'chai';

import { ACCOUNTNUMBERS } from '../.data';

describe('accountnumber/replace', () => {

  it('should mask all digits except the first and final four', () => {

    Object.keys(ACCOUNTNUMBERS).forEach(input => {
      expect(replace(input)).to.equal(ACCOUNTNUMBERS[input]);
      return;
    });

  });

});
