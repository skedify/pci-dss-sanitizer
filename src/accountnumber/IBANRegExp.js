export const FILLER_CHARACTERS = '[\\s\\.\\-]'

export const IBAN_FORMATS = [
  `AE(?:${FILLER_CHARACTERS}?[0-9]){21}`, //United Arab Emirates
  `AD(?:${FILLER_CHARACTERS}?[0-9]){10}(?:${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Andorra
  `AL(?:${FILLER_CHARACTERS}?[0-9]){10}(?:${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Albania
  `AT(?:${FILLER_CHARACTERS}?[0-9]){18}`, //Austria
  `AZ(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //Republic of Azerbaijan
  `BA(?:${FILLER_CHARACTERS}?[0-9]){18}`, //Bosnia and Herzegovina
  `BE(?:${FILLER_CHARACTERS}?[0-9]){14}`, //Belgium
  `BG(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){6}(?:${FILLER_CHARACTERS}?[0-9A-Z]){8}`, //Bulgaria
  `BH(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){14}`, //Kingdom of Bahrain
  `BR(?:${FILLER_CHARACTERS}?[0-9]){25}(?:${FILLER_CHARACTERS}?[A-Z]){1}(?:${FILLER_CHARACTERS}?[0-9A-Z]){1}`, //Brazil
  `CH(?:${FILLER_CHARACTERS}?[0-9]){7}(?:${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Switzerland
  `CR(?:${FILLER_CHARACTERS}?[0-9]){19}`, //Costa Rica
  `CY(?:${FILLER_CHARACTERS}?[0-9]){10}(?:${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Cyprus
  `CZ(?:${FILLER_CHARACTERS}?[0-9]){22}`, //Czech Republic
  `DE(?:${FILLER_CHARACTERS}?[0-9]){20}`, //Germany
  `DK(?:${FILLER_CHARACTERS}?[0-9]){16}`, //Denmark
  `DO(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){20}`, //Dominican Republic
  `EE(?:${FILLER_CHARACTERS}?[0-9]){18}`, //Estonia
  `ES(?:${FILLER_CHARACTERS}?[0-9]){22}`, //Spain
  `FI(?:${FILLER_CHARACTERS}?[0-9]){16}`, //Finland
  `FO(?:${FILLER_CHARACTERS}?[0-9]){16}`, //Denmark
  `FR(?:${FILLER_CHARACTERS}?[0-9]){12}(?:${FILLER_CHARACTERS}?[0-9A-Z]){11}(?:${FILLER_CHARACTERS}?[0-9]){2}`, //France
  `GB(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){14}`, //United Kingdom
  `GE(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){2}(?:${FILLER_CHARACTERS}?[0-9]){16}`, //Georgia
  `GI(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){15}`, //Gibraltar
  `GL(?:${FILLER_CHARACTERS}?[0-9]){16}`, //Denmark
  `GR(?:${FILLER_CHARACTERS}?[0-9]){9}(?:${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Greece
  `GT(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){24}`, //Guatemala
  `HU(?:${FILLER_CHARACTERS}?[0-9]){26}`, //Hungary
  `HR(?:${FILLER_CHARACTERS}?[0-9]){19}`, //Croatia
  `IS(?:${FILLER_CHARACTERS}?[0-9]){24}`, //Iceland
  `IE(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){14}`, //Ireland
  `IL(?:${FILLER_CHARACTERS}?[0-9]){21}`, //Israel
  `IT(?:${FILLER_CHARACTERS}?[0-9]){2}${FILLER_CHARACTERS}?[A-Z](?:${FILLER_CHARACTERS}?[0-9]){10}(?:${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Italy
  `JO(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){18}`, //Jordan
  `KZ(?:${FILLER_CHARACTERS}?[0-9]){5}(?:${FILLER_CHARACTERS}?[0-9A-Z]){13}`, //Kazakhstan
  `KW(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){22}`, //KUWAIT
  `LV(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){13}`, //Latvia
  `LB(?:${FILLER_CHARACTERS}?[0-9]){6}(?:${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //LEBANON
  `LC(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){28}`, //Saint Lucia
  `LI(?:${FILLER_CHARACTERS}?[0-9]){7}(?:${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Liechtenstein ('Principality of')
  `LT(?:${FILLER_CHARACTERS}?[0-9]){18}`, //Lithuania
  `LU(?:${FILLER_CHARACTERS}?[0-9]){5}(?:${FILLER_CHARACTERS}?[0-9A-Z]){13}`, //Luxembourg
  `MK(?:${FILLER_CHARACTERS}?[0-9]){5}(?:${FILLER_CHARACTERS}?[0-9A-Z]){10}(?:${FILLER_CHARACTERS}?[0-9]){2}`, //Macedonia
  `MT(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){5}(?:${FILLER_CHARACTERS}?[0-9A-Z]){18}`, //Malta
  `MR(?:${FILLER_CHARACTERS}?[0-9]){25}`, //Mauritania
  `MU(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){19}(?:${FILLER_CHARACTERS}?[A-Z]){3}`, //Mauritius
  `MD(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //Moldova
  `MC(?:${FILLER_CHARACTERS}?[0-9]){12}(?:${FILLER_CHARACTERS}?[0-9A-Z]){11}(?:${FILLER_CHARACTERS}?[0-9]){2}`, //Monaco
  `ME(?:${FILLER_CHARACTERS}?[0-9]){20}`, //Montenegro
  `NL(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){10}`, //The Netherlands
  `NO(?:${FILLER_CHARACTERS}?[0-9]){13}`, //Norway
  `PK(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //Pakistan
  `PS(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[0-9A-Z]){25}`, //Palestine
  `PL(?:${FILLER_CHARACTERS}?[0-9]){10}(?:${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Poland
  `PT(?:${FILLER_CHARACTERS}?[0-9]){23}`, //Portugal
  `QA(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){21}`, //Qatar
  `RO(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Romania
  `RS(?:${FILLER_CHARACTERS}?[0-9]){20}`, //Serbia
  `SA(?:${FILLER_CHARACTERS}?[0-9]){4}(?:${FILLER_CHARACTERS}?[0-9A-Z]){18}`, //Saudi Arabia
  `SC(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){20}(?:${FILLER_CHARACTERS}?[A-Z]){3}`, //Seychelles
  `SE(?:${FILLER_CHARACTERS}?[0-9]){22}`, //Sweden
  `SI(?:${FILLER_CHARACTERS}?[0-9]){17}`, //Slovenia
  `SK(?:${FILLER_CHARACTERS}?[0-9]){22}`, //Slovak Republic
  `SM(?:${FILLER_CHARACTERS}?[0-9]){2}${FILLER_CHARACTERS}?[A-Z](?:${FILLER_CHARACTERS}?[0-9]){10}(?:${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //San Marino
  `ST(?:${FILLER_CHARACTERS}?[0-9]){23}`, //Sao Tome And Princip
  `TL38${FILLER_CHARACTERS}?(?:${FILLER_CHARACTERS}?[0-9]){19}`, //Timor-Leste
  `TN59${FILLER_CHARACTERS}?(?:${FILLER_CHARACTERS}?[0-9]){20}`, //Tunisia
  `TR(?:${FILLER_CHARACTERS}?[0-9]){7}(?:${FILLER_CHARACTERS}?[0-9A-Z]){17}`, //Turkey
  `UA(?:${FILLER_CHARACTERS}?[0-9]){8}(?:${FILLER_CHARACTERS}?[0-9A-Z]){19}`, //Ukraine
  `VG(?:${FILLER_CHARACTERS}?[0-9]){2}(?:${FILLER_CHARACTERS}?[A-Z]){4}(?:${FILLER_CHARACTERS}?[0-9]){16}`, //Virgin Islands, British
  `XK(?:${FILLER_CHARACTERS}?[0-9]){18}`, //Republic of Kosovo
]

/**
 * Regular Expression that matches a bank card number of a particular length
 */
export default class IBANRegExp extends RegExp {
  constructor() {
    // eslint-disable-line better/explicit-return
    super(IBAN_FORMATS.map(f => `(${f})`).join('|'), 'i')
  }
}
