import expectChar from './expect';

describe('utils/expect', () => {
  it('should return undefined for a character which does not match', () => {
    expect(expectChar(/[0-9]/)('a')).toEqual(undefined);
    expect(expectChar(/[0-9]/)('C')).toEqual(undefined);
    expect(expectChar(/[0-9]/, 10)('C')).toEqual(undefined);
    expect(expectChar(/[A-Z]/)('8')).toEqual(undefined);
    expect(expectChar(/[A-Z]/)('*')).toEqual(undefined);
    expect(expectChar(/[A-Z]/, 3)('*')).toEqual(undefined);
    expect(expectChar(/\*/)('_')).toEqual(undefined);
    expect(expectChar(/\*/, 2)('_')).toEqual(undefined);
  });

  it('should return false for a character which matches, when no more matches are expected', () => {
    expect(expectChar(/[0-9]/)('9')).toEqual(false, "'9' matches the regex");
    expect(expectChar(/[0-9]/)('2')).toEqual(false, "'2' matches the regex");
    expect(expectChar(/[A-Z]/i)('b')).toEqual(false, "'b' matches the regex");
    expect(expectChar(/[A-Z]/)('T')).toEqual(false, "'T' matches the regex");
    expect(expectChar(/\*/)('*')).toEqual(false, "'*' matches the regex");
  });

  it('should return true for a character which matches, when more matches are expected', () => {
    let expectation;

    expectation = expectChar(/[0-9]/, 2);
    expect(expectation('9')).toEqual(
      true,
      "'9' matches the regex and more are expected"
    );
    expect(expectation('5')).toEqual(false, "'9' matches the regex");

    expectation = expectChar(/[A-Z]/i, 2);
    expect(expectation('G')).toEqual(
      true,
      "'G' matches the regex and more are expected"
    );
    expect(expectation('b')).toEqual(false, "'b' matches the regex");

    expectation = expectChar(/[0-9A-Z]/i, 3);
    expect(expectation('9')).toEqual(
      true,
      "'9' matches the regex and more are expected"
    );
    expect(expectation('c')).toEqual(
      true,
      "'c' matches the regex and more are expected"
    );
    expect(expectation('T')).toEqual(false, "'T' matches the regex");

    expectation = expectChar(/\*/, 2);
    expect(expectation('*')).toEqual(
      true,
      "'9' matches the regex and more are expected"
    );
    expect(expectation('*')).toEqual(false, "'*' matches the regex");
  });

  it('should progress through state correctly', () => {
    const expectation = expectChar(/[0-9]/, 2);

    expect(expectation('9')).toEqual(
      true,
      "'9' matches the regex and more are expected"
    );
    expect(expectation('5')).toEqual(false, "'9' matches the regex");
    expectation.reset();
    expect(expectation('a')).toEqual(undefined);
    expect(expectation('6')).toEqual(true);
    expect(expectation('q')).toEqual(undefined);
    expect(expectation('2')).toEqual(true);
  });
});
