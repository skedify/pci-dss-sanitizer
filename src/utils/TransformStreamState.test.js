/* eslint-disable filenames/match-regex */
import TransformStreamState from './TransformStreamState';
import expectChar from './expect';

describe('utils/TransformStreamState', () => {
  it('should correctly transition through expectations', () => {
    const out = [];
    let masked = false;

    const state = new TransformStreamState(c => out.push(c), {
      mask: s => {
        masked = true;
        expect(s).toEqual('Hello');

        return s.replace(/E/i, 'a');
      },
      expectations: [expectChar(/H/i), expectChar(/E/i), expectChar(/L/i), expectChar(/L/i), expectChar(/O/i)],
    });

    expect(state._in_match).toEqual(false, 'no expectations met after ""');
    expect(state._current_expectation).toEqual(0);
    expect(masked).toEqual(false);
    expect(out.join('')).toEqual('');
    expect(state._buffer.join('')).toEqual('');

    state.handleChar('H');
    expect(state._in_match).toEqual(true, 'first expectation met after "H"');
    expect(state._current_expectation).toEqual(1);
    expect(masked).toEqual(false);
    expect(out.join('')).toEqual('');
    expect(state._buffer.join('')).toEqual('H');

    state.handleChar('e');
    expect(state._in_match).toEqual(true, 'second expectation met after "He"');
    expect(state._current_expectation).toEqual(2);
    expect(masked).toEqual(false);
    expect(out.join('')).toEqual('');
    expect(state._buffer.join('')).toEqual('He');

    state.handleChar('l');
    expect(state._in_match).toEqual(true, 'third expectation met after "Hal"');
    expect(state._current_expectation).toEqual(3);
    expect(masked).toEqual(false);
    expect(out.join('')).toEqual('');
    expect(state._buffer.join('')).toEqual('Hel');

    state.handleChar('l');
    expect(state._in_match).toEqual(true, 'fourth expectation met after "Hall"');
    expect(state._current_expectation).toEqual(4);
    expect(masked).toEqual(false);
    expect(out.join('')).toEqual('');
    expect(state._buffer.join('')).toEqual('Hell');

    state.handleChar('o');
    expect(state._in_match).toEqual(false, 'reset after all expectations were met');
    expect(state._current_expectation).toEqual(0);
    expect(masked).toEqual(true);
    expect(out.join('')).toEqual('Hallo');
    expect(state._buffer.join('')).toEqual('');

    state.handleChar('!');
    expect(state._in_match).toEqual(false, 'no expectations met after');
    expect(state._current_expectation).toEqual(0);
    expect(masked).toEqual(true);
    expect(out.join('')).toEqual('Hallo!');
    expect(state._buffer.join('')).toEqual('');
  });

  it('should correctly transition through false positives', () => {
    const out = [];
    let masked = false;

    const state = new TransformStreamState(c => out.push(c), {
      ignore: /[\s\.\-]/,
      mask: s => {
        masked = true;
        expect(s).toEqual('AL47 2121 1009 0000 0X02 3569 8741');

        return s.replace(/./g, '*');
      },

      expectations: [expectChar('A'), expectChar('L'), expectChar(/[0-9]/, 10), expectChar(/[0-9A-Z]/i, 16)],
    });

    let last_char = undefined;
    function type(c) {
      last_char = c;
      state.handleChar(c);
    }

    function verify(_out, expectation = 0, buffer = '', _masked = false) {
      expect(state._in_match).toEqual(expectation > 0, `currently matching (after +"${last_char}" -> "${_out}")`);
      expect(state._current_expectation).toEqual(expectation, `current expectation (after +"${last_char}" -> "${_out}")`);
      expect(masked).toEqual(_masked, `masked (after +"${last_char}" -> "${_out}")`);
      expect(out.join('')).toEqual(_out, `current output (after +"${last_char}" -> "${_out}")`);
      expect(state._buffer.join('')).toEqual(buffer, `current buffer (after +"${last_char}" -> "${_out}")`);
    }

    expect(state._in_match).toEqual(false, 'no expectations met after ""');
    verify('');

    type('T'); verify('T');
    type('r'); verify('Tr');
    type('a'); verify('Tra');
    type('n'); verify('Tran');
    type('s'); verify('Trans');
    type('f'); verify('Transf');
    type('e'); verify('Transfe');
    type('r'); verify('Transfer');
    type(' '); verify('Transfer ');
    type('A'); verify('Transfer ', 1, 'A');
    type('L'); verify('Transfer ', 2, 'AL');
    type('L'); verify('Transfer ALL', 0, '');
    type(' '); verify('Transfer ALL ');
    type('t'); verify('Transfer ALL t');
    type('o'); verify('Transfer ALL to');
    type(' '); verify('Transfer ALL to ');

    type('A'); verify('Transfer ALL to ', 1, 'A');
    type('L'); verify('Transfer ALL to ', 2, 'AL');
    type('4'); verify('Transfer ALL to ', 2, 'AL4');
    type('7'); verify('Transfer ALL to ', 2, 'AL47');

    type(' '); verify('Transfer ALL to ', 2, 'AL47 ');
    type('2'); verify('Transfer ALL to ', 2, 'AL47 2');
    type('1'); verify('Transfer ALL to ', 2, 'AL47 21');
    type('2'); verify('Transfer ALL to ', 2, 'AL47 212');
    type('1'); verify('Transfer ALL to ', 2, 'AL47 2121');

    type(' '); verify('Transfer ALL to ', 2, 'AL47 2121 ');
    type('1'); verify('Transfer ALL to ', 2, 'AL47 2121 1');
    type('0'); verify('Transfer ALL to ', 2, 'AL47 2121 10');
    type('0'); verify('Transfer ALL to ', 2, 'AL47 2121 100');
    type('9'); verify('Transfer ALL to ', 3, 'AL47 2121 1009');

    type(' '); verify('Transfer ALL to ', 3, 'AL47 2121 1009 ');
    type('0'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0');
    type('0'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 00');
    type('0'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 000');
    type('0'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000');

    type(' '); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 ');
    type('0'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0');
    type('X'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X');
    type('0'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X0');
    type('2'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02');

    type(' '); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 ');
    type('3'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 3');
    type('5'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 35');
    type('6'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 356');
    type('9'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 3569');

    type(' '); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 3569 ');
    type('8'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 3569 8');
    type('7'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 3569 87');
    type('4'); verify('Transfer ALL to ', 3, 'AL47 2121 1009 0000 0X02 3569 874');
    type('1'); verify('Transfer ALL to **********************************', 0, '', true);

    type('.'); verify('Transfer ALL to **********************************.', 0, '', true);
  });

  it('should correctly transition through false positives when sliding', () => {
    const out = [];
    let masked = 0;

    const state = new TransformStreamState(c => out.push(c), {
      ignore: /[\s\.]/,
      expectations: [expectChar(/[0-9]/, 4)],
      sliding: true,
      mask: s => {
        let ascending = undefined;
        let failed = false;

        s.split('').filter(c => c.match(/[0-9]/)).map(c => parseInt(c, 10)).reduce((a, b) => {
          if (ascending === undefined) {
            ascending = b > a;
          } else if (!failed) {
            failed = b > a !== ascending;
          }

          return b;
        });

        if (failed) {
          return undefined;
        }

        masked++;

        return s.replace(/[0-9]/g, ascending
          ? '+'
          : '-');
      },
    });

    let last_char = undefined;
    function type(c) {
      last_char = c;
      state.handleChar(c);
    }

    function verify(_out, matching = false, buffer = '', _masked = 0) {
      expect(state._in_match).toEqual(matching, `currently matching (after +"${last_char}" -> "${_out}")`);
      expect(masked).toEqual(_masked, `masked (after +"${last_char}" -> "${_out}")`);
      expect(out.join('')).toEqual(_out, `current output (after +"${last_char}" -> "${_out}")`);
      expect(state._buffer.join('')).toEqual(buffer, `current buffer (after +"${last_char}" -> "${_out}")`);
    }

    expect(state._in_match).toEqual(false, 'no expectations met after ""');
    verify('');

    type('n'); verify('n');
    type('r'); verify('nr');
    type(':'); verify('nr:');
    type('1'); verify('nr:', true, '1');
    type('3'); verify('nr:', true, '13');
    type('2'); verify('nr:', true, '132');
    type('4'); verify('nr:1', true, '324');
    type('6'); verify('nr:13', true, '246');
    type('.'); verify('nr:13', true, '246.');
    type('8'); verify('nr:13+++.+', false, '', 1);
    type('7'); verify('nr:13+++.+', true, '7', 1);
    type('6'); verify('nr:13+++.+', true, '76', 1);
    type(' '); verify('nr:13+++.+', true, '76 ', 1);
    type('7'); verify('nr:13+++.+', true, '76 7', 1);
    type('5'); verify('nr:13+++.+7', true, '6 75', 1);
    type('4'); verify('nr:13+++.+76 ', true, '754', 1);
    type('2'); verify('nr:13+++.+76 ----', false, '', 2);
    type('0'); verify('nr:13+++.+76 ----', true, '0', 2);
    type('.'); verify('nr:13+++.+76 ----', true, '0.', 2);
  });
});
