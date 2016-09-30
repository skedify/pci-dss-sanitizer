export const FILLER_CHARACTERS = /[\s\.\-]/;
export const CARDNUMBER_CHARACTERS = /[0-9\s\.\-]/;
export const MIN_LENGTH = 12;
export const MAX_LENGTH = 19;

/**
 * Regular Expression that matches a bank card number of a particular length
 */
export default class CardNumberRegExp extends RegExp {

  constructor(length) { // eslint-disable-line better/explicit-return
    super(`(?=((?:\\d[\\s\\.\\-]?){${length}}))`, 'g');
  }

}
