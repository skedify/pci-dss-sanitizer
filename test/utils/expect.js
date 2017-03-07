import expectChar from '../../src/utils/expect';
import { expect } from 'chai';

describe('utils/expect', () => {

  it('should return undefined for a character which does not match', () => {

    expect(expectChar(/[0-9]/)('a')).to.equal(undefined);
    expect(expectChar(/[0-9]/)('C')).to.equal(undefined);
    expect(expectChar(/[0-9]/, 10)('C')).to.equal(undefined);
    expect(expectChar(/[A-Z]/)('8')).to.equal(undefined);
    expect(expectChar(/[A-Z]/)('*')).to.equal(undefined);
    expect(expectChar(/[A-Z]/, 3)('*')).to.equal(undefined);
    expect(expectChar(/\*/)('_')).to.equal(undefined);
    expect(expectChar(/\*/, 2)('_')).to.equal(undefined);

  });

  it('should return false for a character which matches, when no more matches are expected', () => {

    expect(expectChar(/[0-9]/)('9')).to.equal(false, '\'9\' matches the regex');
    expect(expectChar(/[0-9]/)('2')).to.equal(false, '\'2\' matches the regex');
    expect(expectChar(/[A-Z]/i)('b')).to.equal(false, '\'b\' matches the regex');
    expect(expectChar(/[A-Z]/)('T')).to.equal(false, '\'T\' matches the regex');
    expect(expectChar(/\*/)('*')).to.equal(false, '\'*\' matches the regex');

  });

  it('should return true for a character which matches, when more matches are expected', () => {

    let expectation;

    expectation = expectChar(/[0-9]/, 2);
    expect(expectation('9')).to.equal(true, '\'9\' matches the regex and more are expected');
    expect(expectation('5')).to.equal(false, '\'9\' matches the regex');

    expectation = expectChar(/[A-Z]/i, 2);
    expect(expectation('G')).to.equal(true, '\'G\' matches the regex and more are expected');
    expect(expectation('b')).to.equal(false, '\'b\' matches the regex');

    expectation = expectChar(/[0-9A-Z]/i, 3);
    expect(expectation('9')).to.equal(true, '\'9\' matches the regex and more are expected');
    expect(expectation('c')).to.equal(true, '\'c\' matches the regex and more are expected');
    expect(expectation('T')).to.equal(false, '\'T\' matches the regex');

    expectation = expectChar(/\*/, 2);
    expect(expectation('*')).to.equal(true, '\'9\' matches the regex and more are expected');
    expect(expectation('*')).to.equal(false, '\'*\' matches the regex');

  });

  it('should progress through state correctly', () => {

    const expectation = expectChar(/[0-9]/, 2);

    expect(expectation('9')).to.equal(true, '\'9\' matches the regex and more are expected');
    expect(expectation('5')).to.equal(false, '\'9\' matches the regex');
    expectation.reset();
    expect(expectation('a')).to.equal(undefined);
    expect(expectation('6')).to.equal(true);
    expect(expectation('q')).to.equal(undefined);
    expect(expectation('2')).to.equal(true);

  });

});
