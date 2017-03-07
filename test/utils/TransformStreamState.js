import TransformStreamState from '../../src/utils/TransformStreamState';
import expectChar from '../../src/utils/expect';
import { expect } from 'chai';

describe('utils/TransformStreamState', () => {

  it('should correctly transition through expectations', () => {
    const out = [];
    let masked = false;

    const state = new TransformStreamState(c => out.push(c), {
      mask: s => {
        masked = true;
        expect(s).to.equal('shit');
        return s.replace(/I/i, '*');
      },
      expectations: [expectChar(/S/i), expectChar(/H/i), expectChar(/I/i), expectChar(/T/i)],
    });
    expect(state._in_match).to.equal(false, 'no expectations met after ""');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar('H');
    expect(state._in_match).to.equal(false, 'no expectations met after "H"');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('H');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar('o');
    expect(state._in_match).to.equal(false, 'no expectations met after "Ho"');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Ho');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar('l');
    expect(state._in_match).to.equal(false, 'no expectations met after "Hol"');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Hol');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar('y');
    expect(state._in_match).to.equal(false, 'no expectations met after "Holy"');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Holy');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar(' ');
    expect(state._in_match).to.equal(false, 'no expectations met after "Holy "');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Holy ');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar('s');
    expect(state._in_match).to.equal(true, 'first expectation met after "Holy s"');
    expect(state._current_expectation).to.equal(1);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Holy ');
    expect(state._buffer.join('')).to.equal('s');

    state.handleChar('h');
    expect(state._in_match).to.equal(true, 'second expectation met after "Holy sh"');
    expect(state._current_expectation).to.equal(2);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Holy ');
    expect(state._buffer.join('')).to.equal('sh');

    state.handleChar('i');
    expect(state._in_match).to.equal(true, 'third expectation met after "Holy shi"');
    expect(state._current_expectation).to.equal(3);
    expect(masked).to.equal(false);
    expect(out.join('')).to.equal('Holy ');
    expect(state._buffer.join('')).to.equal('shi');

    state.handleChar('t');
    expect(state._in_match).to.equal(false, 'reset after all expectations were met');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(true);
    expect(out.join('')).to.equal('Holy sh*t');
    expect(state._buffer.join('')).to.equal('');

    state.handleChar('!');
    expect(state._in_match).to.equal(false, 'no expectations met after');
    expect(state._current_expectation).to.equal(0);
    expect(masked).to.equal(true);
    expect(out.join('')).to.equal('Holy sh*t!');
    expect(state._buffer.join('')).to.equal('');

  });

  it('should correctly transition through false positives', () => {
    const out = [];
    let masked = false;

    const state = new TransformStreamState(c => out.push(c), {
      ignore: /[\s\.\-]/,
      mask: s => {
        masked = true;
        expect(s).to.equal('AL47 2121 1009 0000 0X02 3569 8741');
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
      expect(state._in_match).to.equal(expectation > 0, `currently matching (after +"${last_char}" -> "${_out}")`);
      expect(state._current_expectation).to.equal(expectation, `current expectation (after +"${last_char}" -> "${_out}")`);
      expect(masked).to.equal(_masked, `masked (after +"${last_char}" -> "${_out}")`);
      expect(out.join('')).to.equal(_out, `current output (after +"${last_char}" -> "${_out}")`);
      expect(state._buffer.join('')).to.equal(buffer, `current buffer (after +"${last_char}" -> "${_out}")`);
    }

    expect(state._in_match).to.equal(false, 'no expectations met after ""');
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
      expect(state._in_match).to.equal(matching, `currently matching (after +"${last_char}" -> "${_out}")`);
      expect(masked).to.equal(_masked, `masked (after +"${last_char}" -> "${_out}")`);
      expect(out.join('')).to.equal(_out, `current output (after +"${last_char}" -> "${_out}")`);
      expect(state._buffer.join('')).to.equal(buffer, `current buffer (after +"${last_char}" -> "${_out}")`);
    }

    expect(state._in_match).to.equal(false, 'no expectations met after ""');
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
