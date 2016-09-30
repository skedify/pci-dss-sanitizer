import sanitize, { async } from '../src/index';
import { expect } from 'chai';

import { CARDNUMBERS, ACCOUNTNUMBERS } from './.data.js';

const TESTS = Object.assign({}, CARDNUMBERS, ACCOUNTNUMBERS);

describe('pci-dss-sanitizer', () => {
  it('should export a function', () => {
    expect(sanitize).to.be.a('function');
  });

  it('should sanitize strings', () => {
    Object.keys(TESTS).forEach((input) => {
      expect(sanitize(input)).to.equal(TESTS[input]);
    });
  });

  it.skip('should also be available async', (done) => {
    Promise.all(Object.keys(TESTS).map((input) => {
      return async(input, (output) => {
        expect(output).to.equal(TESTS[input]);
      });
    })).then(done, done);
    return;
  });

});
