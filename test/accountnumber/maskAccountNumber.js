import maskAccountNumber from '../../src/accountnumber/maskAccountNumber';
import { expect } from 'chai';

import { ACCOUNTNUMBERS } from '../.data';

describe('accountnumber', () => {

  describe('maskAccountNumber', () => {

    it('should mask all digits except the first and final four', () => {

      Object.keys(ACCOUNTNUMBERS).forEach(input => {
        expect(maskAccountNumber(input)).to.equal(ACCOUNTNUMBERS[input]);
        return;
      });

    });

  });

});
