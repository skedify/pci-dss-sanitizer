import maskCardNumber from '../../src/cardnumber/maskCardNumber';
import { expect } from 'chai';

describe('cardnumber', () => {

  describe('maskCardNumber', () => {

    it('should mask all digits except the first and final four', () => {

      expect(maskCardNumber('6703-7332 1913 8211.1')).to.equal('6703-XXXX XXXX X211.1');

    });

  });

});
