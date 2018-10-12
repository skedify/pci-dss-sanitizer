import replace from './replace';

import { ACCOUNTNUMBERS } from '../index.data';

describe('accountnumber/replace', () => {
  it('should mask all digits except the first and final four', () => {
    Object.keys(ACCOUNTNUMBERS).forEach(input => {
      expect(replace(input)).toEqual(ACCOUNTNUMBERS[input]);

      return;
    });
  });
});
