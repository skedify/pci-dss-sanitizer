export const CARDNUMBER_CHARS = /[0-9\s\.\-]/;
export const MIN_LENGTH = 12;
export const MAX_LENGTH = 19;

export const REPLACEMENT_CHARACTER = 'X';
export const CARDNUMBER_VISIBILE_DIGITS_HEAD = 4;
export const CARDNUMBER_VISIBILE_DIGITS_TAIL = 4;

/**
 * Regular Expression that matches a bank card number of a particular length
 */
export default class CardNumberRegExp extends RegExp {

  constructor(length) { // eslint-disable-line better/explicit-return
    super(`(?=((?:\\d[\\s\\.\\-]?){${length}}))`, 'g');
  }

}
