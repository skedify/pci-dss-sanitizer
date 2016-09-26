import sanitize from '../src/index';
import { expect } from 'chai';

describe('pci-dss-sanitizer', () => {

  it('should be a function', () => {
    expect(sanitize).to.be.a('function');
  });

  it('should return a string', () => {
    expect(sanitize('wow, what a test')).to.be.a('string');
  });

});
