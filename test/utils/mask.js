import mask from '../../src/utils/mask';
import { expect } from 'chai';

describe('utils/mask', () => {

  it('should correctly mask a string', () => {

    expect(mask('AL47 2121 1009 0000 0002 3569 8741', {
      ranges: 'A-Z0-9',
    })).to.equal('AL47 **** **** **** **** **** 8741');

    expect(mask('AL47-2121-1009-0000-0002-3569-8741', {
      ranges: 'A-Z0-9',
    })).to.equal('AL47-****-****-****-****-****-8741');

    expect(mask('AL47-21211009-0000 00023569.8741', {
      ranges: 'A-Z0-9',
    })).to.equal('AL47-********-**** ********.8741');

  });

});
