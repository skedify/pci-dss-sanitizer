export default class TransformStreamState {
  constructor(stream, options) {
    this.stream = stream;

    Object.defineProperties(this, {
      _buffer: { value: [] },
      _ignore: { value: options.ignore },
      _expectations: { value: options.expectations || [] },
      _mask: { value: options.mask },
      _sliding: { value: options.sliding || false },
    });

    this.reset();
  }

  reset() {
    this._buffer.splice(0, this._buffer.length);
    this._current_expectation = 0;
    this._in_match = false;
    this._expectations.forEach(e => e.reset());

    return this;
  }

  handleChar(c) {
    const RESULT = {
      next: this,
    };

    // if we are currently matching expectations, but we encounter a character to be ignored
    if (this._in_match && this._ignore !== undefined && this._ignore.test(c)) {
      // don't handle the character, but keep it in our buffer for later processing
      this.buffer(c);

      return RESULT;
    }

    const expectation = this._expectations[this._current_expectation];
    const expectsAnother = expectation ? expectation(c) : false;

    if (!this._in_match) {
      if (expectsAnother === undefined) {
        // expectation wasn't met
        // whatever, we weren't matching anything anyway
        // just stream on through
        this.stream(c);

        return RESULT;
      }
      // wow, we matched an expectation!
      this._in_match = true;
      // better keep track of the matched char
      this.buffer(c);
    } else {
      // we are currently in the business of matching expectations

      // apply our current char
      this.buffer(c);

      if (expectsAnother === undefined) {
        // expectation was not met
        // oh wait, we were matching but now the expectation isn't met?!
        // so now we know our current buffer won't match anything
        this.unmatch();

        return RESULT;
      }
    }

    if (expectsAnother === false) {
      // the current expectation has been fully met, move on to the next one
      this._current_expectation++;
      // expect of course if there is no next expectation,
      if (this._current_expectation === this._expectations.length) {
        // in which case all expectations have been met: YEEY! We found a match!!
        const buffer = this.unbuffer();
        const masked = this._mask(buffer);

        if (masked === undefined) {
          // the mask function aparently thinks this isn't a match after all...
          // rebuffer everything
          buffer.split('').forEach(this.buffer.bind(this));
          // unmatch the current match
          this.unmatch();
        } else {
          // stream the masked output
          this.stream(masked);
          // prepare for the next match
          this.reset();
        }

        return RESULT;
      }
    }

    return RESULT;
  }

  buffer(c) {
    this._buffer.push(c);

    return this;
  }

  unbuffer(amount = this._buffer.length, asString = true) {
    const chars = this._buffer.splice(0, amount);

    return asString ? chars.join('') : chars;
  }

  unmatch() {
    this.stream(
      this.unbuffer(this._sliding === true ? 1 : this._buffer.length)
    );

    const rest = this.unbuffer(this._buffer.length, false);

    this.reset();
    rest.forEach(this.handleChar.bind(this));

    return this;
  }
}
