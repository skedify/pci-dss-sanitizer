import sanitize, { async } from '../src/index';
import { expect } from 'chai';

const TESTS = {
  '783 91n 405 6703-7332 1913 8211.1 15 3579': '783 91n 405 6703-XXXX XXXX XX11.1 15 3579',
  'lorem ipsum 6703-7332 1913 8211.1 lorem ipsum': 'lorem ipsum 6703-XXXX XXXX X211.1 lorem ipsum',
  '5105 1051 0510 5100': '5105 XXXX XXXX 5100',
};

describe('pci-dss-sanitizer', () => {
  it('should export a function', () => {
    expect(sanitize).to.be.a('function');
  });

  it('should sanitize strings', () => {
    Object.keys(TESTS).forEach((input) => {
      expect(sanitize(input)).to.equal(TESTS[input]);
    });
  });

  it('should also be available async', (done) => {
    Promise.all(Object.keys(TESTS).map((input) => {
      return async(input, (output) => {
        expect(output).to.equal(TESTS[input]);
      });
    })).then(done, done);
    return;
  });

});
