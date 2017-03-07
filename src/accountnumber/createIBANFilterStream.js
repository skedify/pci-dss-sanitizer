import createFilterStream from '../utils/createFilterStream';
import expect from '../utils/expect';
import maskIBAN from './maskIBAN';
import pipe from 'multipipe';

const DIGIT = /[0-9]/;
const LETTER = /[A-Z]/i;
const ALPHANUM = /[0-9A-Z]/i;

export default function createIBANFilterStream() {
  return pipe.call(null, [
    //United Arab Emirates
    [expect('A'), expect('E'), expect(DIGIT, 21)],
    //Andorra
    [expect('A'), expect('D'), expect(DIGIT, 10), expect(ALPHANUM, 12)],
    //Albania
    [expect('A'), expect('L'), expect(DIGIT, 10), expect(ALPHANUM, 16)],
    //Austria
    [expect('A'), expect('T'), expect(DIGIT, 18)],
    //Republic of Azerbaijan
    [expect('A'), expect('Z'), expect(DIGIT, 2), expect(LETTER, 4), expect(ALPHANUM, 20)],
    //Bosnia and Herzegovina
    [expect('B'), expect('A'), expect(DIGIT, 18)],
    //Belgium
    [expect('B'), expect('E'), expect(DIGIT, 14)],
    //Bulgaria
    [expect('B'), expect('G'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 6), expect(ALPHANUM, 8)],
    //Kingdom of Bahrain
    [expect('B'), expect('H'), expect(DIGIT, 2), expect(LETTER, 4), expect(ALPHANUM, 14)],
    //Brazil
    [expect('B'), expect('R'), expect(DIGIT, 25), expect(LETTER, 1), expect(ALPHANUM, 1)],
    //Switzerland
    [expect('C'), expect('H'), expect(DIGIT, 7), expect(ALPHANUM, 12)],
    //Costa Rica
    [expect('C'), expect('R'), expect(DIGIT, 19)],
    //Cyprus
    [expect('C'), expect('Y'), expect(DIGIT, 10), expect(ALPHANUM, 16)],
    //Czech Republic
    [expect('C'), expect('Z'), expect(DIGIT, 22)],
    //Germany
    [expect('D'), expect('E'), expect(DIGIT, 20)],
    //Denmark
    [expect('D'), expect('K'), expect(DIGIT, 16)],
    //Dominican Republic
    [expect('D'), expect('O'), expect(DIGIT, 2), expect(ALPHANUM, 4), expect(DIGIT, 20)],
    //Estonia
    [expect('E'), expect('E'), expect(DIGIT, 18)],
    //Spain
    [expect('E'), expect('S'), expect(DIGIT, 22)],
    //Finland
    [expect('F'), expect('I'), expect(DIGIT, 16)],
    //Denmark
    [expect('F'), expect('O'), expect(DIGIT, 16)],
    //France
    [expect('F'), expect('R'), expect(DIGIT, 12), expect(ALPHANUM, 11), expect(DIGIT, 2)],
    //United Kingdom
    [expect('G'), expect('B'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 14)],
    //Georgia
    [expect('G'), expect('E'), expect(DIGIT, 2), expect(LETTER, 2), expect(DIGIT, 16)],
    //Gibraltar
    [expect('G'), expect('I'), expect(DIGIT, 2), expect(LETTER, 4), expect(ALPHANUM, 15)],
    //Denmark
    [expect('G'), expect('L'), expect(DIGIT, 16)],
    //Greece
    [expect('G'), expect('R'), expect(DIGIT, 9), expect(ALPHANUM, 16)],
    //Guatemala
    [expect('G'), expect('T'), expect(DIGIT, 2), expect(ALPHANUM, 24)],
    //Hungary
    [expect('H'), expect('U'), expect(DIGIT, 26)],
    //Croatia
    [expect('H'), expect('R'), expect(DIGIT, 19)],
    //Iceland
    [expect('I'), expect('S'), expect(DIGIT, 24)],
    //Ireland
    [expect('I'), expect('E'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 14)],
    //Israel
    [expect('I'), expect('L'), expect(DIGIT, 21)],
    //Italy
    [expect('I'), expect('T'), expect(DIGIT, 2), expect(LETTER), expect(DIGIT, 10), expect(ALPHANUM, 12)],
    //Jordan
    [expect('J'), expect('O'), expect(DIGIT, 2), expect(ALPHANUM, 4), expect(DIGIT, 4), expect(ALPHANUM, 18)],
    //Kazakhstan
    [expect('K'), expect('Z'), expect(DIGIT, 5), expect(ALPHANUM, 13)],
    //KUWAIT
    [expect('K'), expect('W'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 22)],
    //Latvia
    [expect('L'), expect('V'), expect(DIGIT, 2), expect(LETTER, 4), expect(ALPHANUM, 13)],
    //LEBANON
    [expect('L'), expect('B'), expect(DIGIT, 6), expect(ALPHANUM, 20)],
    //Saint Lucia
    [expect('L'), expect('C'), expect(DIGIT, 2), expect(ALPHANUM, 28)],
    //Liechtenstein ('Principality of')
    [expect('L'), expect('I'), expect(DIGIT, 7), expect(ALPHANUM, 12)],
    //Lithuania
    [expect('L'), expect('T'), expect(DIGIT, 18)],
    //Luxembourg
    [expect('L'), expect('U'), expect(DIGIT, 5), expect(ALPHANUM, 13)],
    //Macedonia
    [expect('M'), expect('K'), expect(DIGIT, 5), expect(ALPHANUM, 10), expect(DIGIT, 2)],
    //Malta
    [expect('M'), expect('T'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 5), expect(ALPHANUM, 18)],
    //Mauritania
    [expect('M'), expect('R'), expect(DIGIT, 25)],
    //Mauritius
    [expect('M'), expect('U'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 19), expect(LETTER, 3)],
    //Moldova
    [expect('M'), expect('D'), expect(DIGIT, 2), expect(ALPHANUM, 20)],
    //Monaco
    [expect('M'), expect('C'), expect(DIGIT, 12), expect(ALPHANUM, 11), expect(DIGIT, 2)],
    //Montenegro
    [expect('M'), expect('E'), expect(DIGIT, 20)],
    //The Netherlands
    [expect('N'), expect('L'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 10)],
    //Norway
    [expect('N'), expect('O'), expect(DIGIT, 13)],
    //Pakistan
    [expect('P'), expect('K'), expect(DIGIT, 2), expect(ALPHANUM, 20)],
    //Palestine
    [expect('P'), expect('S'), expect(DIGIT, 2), expect(ALPHANUM, 25)],
    //Poland
    [expect('P'), expect('L'), expect(DIGIT, 10), expect(ALPHANUM, 16)],
    //Portugal
    [expect('P'), expect('T'), expect(DIGIT, 23)],
    //Qatar
    [expect('Q'), expect('A'), expect(DIGIT, 2), expect(LETTER, 4), expect(ALPHANUM, 21)],
    //Romania
    [expect('R'), expect('O'), expect(DIGIT, 2), expect(LETTER, 4), expect(ALPHANUM, 16)],
    //Serbia
    [expect('R'), expect('S'), expect(DIGIT, 20)],
    //Saudi Arabia
    [expect('S'), expect('A'), expect(DIGIT, 4), expect(ALPHANUM, 18)],
    //Seychelles
    [expect('S'), expect('C'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 20), expect(LETTER, 3)],
    //Sweden
    [expect('S'), expect('E'), expect(DIGIT, 22)],
    //Slovenia
    [expect('S'), expect('I'), expect(DIGIT, 17)],
    //Slovak Republic
    [expect('S'), expect('K'), expect(DIGIT, 22)],
    //San Marino
    [expect('S'), expect('M'), expect(DIGIT, 2), expect(LETTER), expect(DIGIT, 10), expect(ALPHANUM, 12)],
    //Sao Tome And Princip
    [expect('S'), expect('T'), expect(DIGIT, 23)],
    //Timor-Leste
    [expect('T'), expect('L'), expect('3'), expect('8'), expect(DIGIT, 19)],
    //Tunisia
    [expect('T'), expect('N'), expect('5'), expect('9'), expect(DIGIT, 20)],
    //Turkey
    [expect('T'), expect('R'), expect(DIGIT, 7), expect(ALPHANUM, 17)],
    //Ukraine
    [expect('U'), expect('A'), expect(DIGIT, 8), expect(ALPHANUM, 19)],
    //Virgin Islands, British
    [expect('V'), expect('G'), expect(DIGIT, 2), expect(LETTER, 4), expect(DIGIT, 16)],
    //Republic of Kosovo
    [expect('X'), expect('K'), expect(DIGIT, 18)],
  ]
    .map(expectations => ({
      expectations,
      ignore: /[\s\.\-]/,
      mask: maskIBAN,
    }))
    .map(config => createFilterStream(config)));
}
