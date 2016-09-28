export const FILLER_CHARACTERS = '[\\s\\.\\-]';

export const IBAN_FORMATS = [
  `^AL([0-9]${FILLER_CHARACTERS}?){10}([0-9A-Z]${FILLER_CHARACTERS}?){16}$`, //Albania
  `^AD([0-9]${FILLER_CHARACTERS}?){10}([0-9A-Z]${FILLER_CHARACTERS}?){12}$`, //Andorra
  `^AT([0-9]${FILLER_CHARACTERS}?){18}$`, //Austria
  `^AZ([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){20}$`, //Republic of Azerbaijan
  `^BH([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){14}$`, //Kingdom of Bahrain
  `^BE([0-9]${FILLER_CHARACTERS}?){14}$`, //Belgium
  `^BA([0-9]${FILLER_CHARACTERS}?){18}$`, //Bosnia and Herzegovina
  `^BR([0-9]${FILLER_CHARACTERS}?){25}([A-Z]${FILLER_CHARACTERS}?){1}([0-9A-Z]${FILLER_CHARACTERS}?){1}$`, //Brazil
  `^BG([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){6}([0-9A-Z]${FILLER_CHARACTERS}?){8}$`, //Bulgaria
  `^CR([0-9]${FILLER_CHARACTERS}?){19}$`, //Costa Rica
  `^HR([0-9]${FILLER_CHARACTERS}?){19}$`, //Croatia
  `^CY([0-9]${FILLER_CHARACTERS}?){10}([0-9A-Z]${FILLER_CHARACTERS}?){16}$`, //Cyprus
  `^CZ([0-9]${FILLER_CHARACTERS}?){22}$`, //Czech Republic
  `^DK([0-9]${FILLER_CHARACTERS}?){16}$|^FO([0-9]${FILLER_CHARACTERS}?){16}$|^GL([0-9]${FILLER_CHARACTERS}?){16}$`, //Denmark
  `^DO([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){20}$`, //Dominican Republic
  `^EE([0-9]${FILLER_CHARACTERS}?){18}$`, //Estonia
  `^FI([0-9]${FILLER_CHARACTERS}?){16}$`, //Finland
  `^FR([0-9]${FILLER_CHARACTERS}?){12}([0-9A-Z]${FILLER_CHARACTERS}?){11}([0-9]${FILLER_CHARACTERS}?){2}$`, //France
  `^GE([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){2}([0-9]${FILLER_CHARACTERS}?){16}$`, //Georgia
  `^DE([0-9]${FILLER_CHARACTERS}?){20}$`, //Germany
  `^GI([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){15}$`, //Gibraltar
  `^GR([0-9]${FILLER_CHARACTERS}?){9}([0-9A-Z]${FILLER_CHARACTERS}?){16}$`, //Greece
  `^GT([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){24}$`, //Guatemala
  `^HU([0-9]${FILLER_CHARACTERS}?){26}$`, //Hungary
  `^IS([0-9]${FILLER_CHARACTERS}?){24}$`, //Iceland
  `^IE([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){14}$`, //Ireland
  `^IL([0-9]${FILLER_CHARACTERS}?){21}$`, //Israel
  `^IT([0-9]${FILLER_CHARACTERS}?){2}[A-Z]([0-9]${FILLER_CHARACTERS}?){10}([0-9A-Z]${FILLER_CHARACTERS}?){12}$`, //Italy
  `^JO([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){18}$`, //Jordan
  `^KZ([0-9]${FILLER_CHARACTERS}?){5}([0-9A-Z]${FILLER_CHARACTERS}?){13}$`, //Kazakhstan
  `^XK([0-9]${FILLER_CHARACTERS}?){18}$`, //Republic of Kosovo
  `^KW([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){22}$`, //KUWAIT
  `^LV([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){13}$`, //Latvia
  `^LB([0-9]${FILLER_CHARACTERS}?){6}([0-9A-Z]${FILLER_CHARACTERS}?){20}$`, //LEBANON
  `^LI([0-9]${FILLER_CHARACTERS}?){7}([0-9A-Z]${FILLER_CHARACTERS}?){12}$`, //Liechtenstein ('Principality of')
  `^LT([0-9]${FILLER_CHARACTERS}?){18}$`, //Lithuania
  `^LU([0-9]${FILLER_CHARACTERS}?){5}([0-9A-Z]${FILLER_CHARACTERS}?){13}$`, //Luxembourg
  `^MK([0-9]${FILLER_CHARACTERS}?){5}([0-9A-Z]${FILLER_CHARACTERS}?){10}([0-9]${FILLER_CHARACTERS}?){2}$`, //Macedonia
  `^MT([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){5}([0-9A-Z]${FILLER_CHARACTERS}?){18}$`, //Malta
  `^MR([0-9]${FILLER_CHARACTERS}?){25}$`, //Mauritania
  `^MU([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){19}([A-Z]${FILLER_CHARACTERS}?){3}$`, //Mauritius
  `^MD([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){20}$`, //Moldova
  `^MC([0-9]${FILLER_CHARACTERS}?){12}([0-9A-Z]${FILLER_CHARACTERS}?){11}([0-9]${FILLER_CHARACTERS}?){2}$`, //Monaco
  `^ME([0-9]${FILLER_CHARACTERS}?){20}$`, //Montenegro
  `^NL([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){10}$`, //The Netherlands
  `^NO([0-9]${FILLER_CHARACTERS}?){13}$`, //Norway
  `^PK([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){20}$`, //Pakistan
  `^PS([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){25}$`, //Palestine
  `^PL([0-9]${FILLER_CHARACTERS}?){10}([0-9A-Z]${FILLER_CHARACTERS}?){16}$`, //Poland
  `^PT([0-9]${FILLER_CHARACTERS}?){23}$`, //Portugal
  `^QA([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){21}$`, //Qatar
  `^RO([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){16}$`, //Romania
  `^LC([0-9]${FILLER_CHARACTERS}?){2}([0-9A-Z]${FILLER_CHARACTERS}?){28}$`, //Saint Lucia
  `^SM([0-9]${FILLER_CHARACTERS}?){2}[A-Z]([0-9]${FILLER_CHARACTERS}?){10}([0-9A-Z]${FILLER_CHARACTERS}?){12}$`, //San Marino
  `^ST([0-9]${FILLER_CHARACTERS}?){23}$`, //Sao Tome And Princip
  `^SA([0-9]${FILLER_CHARACTERS}?){4}([0-9A-Z]${FILLER_CHARACTERS}?){18}$`, //Saudi Arabia
  `^RS([0-9]${FILLER_CHARACTERS}?){20}$`, //Serbia
  `^SC([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){20}([A-Z]${FILLER_CHARACTERS}?){3}$`, //Seychelles
  `^SK([0-9]${FILLER_CHARACTERS}?){22}$`, //Slovak Republic
  `^SI([0-9]${FILLER_CHARACTERS}?){17}$`, //Slovenia
  `^ES([0-9]${FILLER_CHARACTERS}?){22}$`, //Spain
  `^SE([0-9]${FILLER_CHARACTERS}?){22}$`, //Sweden
  `^CH([0-9]${FILLER_CHARACTERS}?){7}([0-9A-Z]${FILLER_CHARACTERS}?){12}$`, //Switzerland
  `^TL38${FILLER_CHARACTERS}?([0-9]${FILLER_CHARACTERS}?){19}$`, //Timor-Leste
  `^TN59${FILLER_CHARACTERS}?([0-9]${FILLER_CHARACTERS}?){20}$`, //Tunisia
  `^TR([0-9]${FILLER_CHARACTERS}?){7}([0-9A-Z]${FILLER_CHARACTERS}?){17}$`, //Turkey
  `^UA([0-9]${FILLER_CHARACTERS}?){8}([0-9A-Z]${FILLER_CHARACTERS}?){19}$`, //Ukraine
  `^AE([0-9]${FILLER_CHARACTERS}?){21}$`, //United Arab Emirates
  `^GB([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){14}$`, //United Kingdom
  `^VG([0-9]${FILLER_CHARACTERS}?){2}([A-Z]${FILLER_CHARACTERS}?){4}([0-9]${FILLER_CHARACTERS}?){16}$`, //Virgin Islands, British
];

/**
 * Regular Expression that matches a bank card number of a particular length
 */
export default class IBANRegExp extends RegExp {

  constructor() { // eslint-disable-line better/explicit-return
    super(IBAN_FORMATS.map(f => `(${f})`).join('|'), 'i');
  }

}
