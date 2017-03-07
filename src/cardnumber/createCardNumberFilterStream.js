import createFilterStream from '../utils/createFilterStream';
import expect from '../utils/expect';
import maskLuhn from './maskLuhn';
import pipe from 'multipipe';

const DIGIT = /[0-9]/;

export default function createCardNumberFilterStream() {
  return pipe.call(null, [
    [expect(DIGIT, 19)],
    [expect(DIGIT, 18)],
    [expect(DIGIT, 17)],
    [expect(DIGIT, 16)],
    [expect(DIGIT, 15)],
    [expect(DIGIT, 14)],
    [expect(DIGIT, 13)],
    [expect(DIGIT, 12)],
  ]
    .map(expectations => ({
      expectations,
      ignore: /[\s\.\-]/,
      mask: maskLuhn,
      sliding: true,
    }))
    .map(config => createFilterStream(config)));
}
