export const FILLER_CHARACTERS = '[\\s\\.\\-]';

export const IBAN_FORMATS = [
  `AL(${FILLER_CHARACTERS}?[0-9]){10}(${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Albania
  `AD(${FILLER_CHARACTERS}?[0-9]){10}(${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Andorra
  `AT(${FILLER_CHARACTERS}?[0-9]){18}`, //Austria
  `AZ(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //Republic of Azerbaijan
  `BH(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){14}`, //Kingdom of Bahrain
  `BE(${FILLER_CHARACTERS}?[0-9]){14}`, //Belgium
  `BA(${FILLER_CHARACTERS}?[0-9]){18}`, //Bosnia and Herzegovina
  `BR(${FILLER_CHARACTERS}?[0-9]){25}(${FILLER_CHARACTERS}?[A-Z]){1}(${FILLER_CHARACTERS}?[0-9A-Z]){1}`, //Brazil
  `BG(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){6}(${FILLER_CHARACTERS}?[0-9A-Z]){8}`, //Bulgaria
  `CR(${FILLER_CHARACTERS}?[0-9]){19}`, //Costa Rica
  `HR(${FILLER_CHARACTERS}?[0-9]){19}`, //Croatia
  `CY(${FILLER_CHARACTERS}?[0-9]){10}(${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Cyprus
  `CZ(${FILLER_CHARACTERS}?[0-9]){22}`, //Czech Republic
  `DK(${FILLER_CHARACTERS}?[0-9]){16}$|^FO(${FILLER_CHARACTERS}?[0-9]){16}$|^GL(${FILLER_CHARACTERS}?[0-9]){16}`, //Denmark
  `DO(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){20}`, //Dominican Republic
  `EE(${FILLER_CHARACTERS}?[0-9]){18}`, //Estonia
  `FI(${FILLER_CHARACTERS}?[0-9]){16}`, //Finland
  `FR(${FILLER_CHARACTERS}?[0-9]){12}(${FILLER_CHARACTERS}?[0-9A-Z]){11}(${FILLER_CHARACTERS}?[0-9]){2}`, //France
  `GE(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){2}(${FILLER_CHARACTERS}?[0-9]){16}`, //Georgia
  `DE(${FILLER_CHARACTERS}?[0-9]){20}`, //Germany
  `GI(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){15}`, //Gibraltar
  `GR(${FILLER_CHARACTERS}?[0-9]){9}(${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Greece
  `GT(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){24}`, //Guatemala
  `HU(${FILLER_CHARACTERS}?[0-9]){26}`, //Hungary
  `IS(${FILLER_CHARACTERS}?[0-9]){24}`, //Iceland
  `IE(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){14}`, //Ireland
  `IL(${FILLER_CHARACTERS}?[0-9]){21}`, //Israel
  `IT(${FILLER_CHARACTERS}?[0-9]){2}${FILLER_CHARACTERS}?[A-Z](${FILLER_CHARACTERS}?[0-9]){10}(${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Italy
  `JO(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){18}`, //Jordan
  `KZ(${FILLER_CHARACTERS}?[0-9]){5}(${FILLER_CHARACTERS}?[0-9A-Z]){13}`, //Kazakhstan
  `XK(${FILLER_CHARACTERS}?[0-9]){18}`, //Republic of Kosovo
  `KW(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){22}`, //KUWAIT
  `LV(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){13}`, //Latvia
  `LB(${FILLER_CHARACTERS}?[0-9]){6}(${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //LEBANON
  `LI(${FILLER_CHARACTERS}?[0-9]){7}(${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Liechtenstein ('Principality of')
  `LT(${FILLER_CHARACTERS}?[0-9]){18}`, //Lithuania
  `LU(${FILLER_CHARACTERS}?[0-9]){5}(${FILLER_CHARACTERS}?[0-9A-Z]){13}`, //Luxembourg
  `MK(${FILLER_CHARACTERS}?[0-9]){5}(${FILLER_CHARACTERS}?[0-9A-Z]){10}(${FILLER_CHARACTERS}?[0-9]){2}`, //Macedonia
  `MT(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){5}(${FILLER_CHARACTERS}?[0-9A-Z]){18}`, //Malta
  `MR(${FILLER_CHARACTERS}?[0-9]){25}`, //Mauritania
  `MU(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){19}(${FILLER_CHARACTERS}?[A-Z]){3}`, //Mauritius
  `MD(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //Moldova
  `MC(${FILLER_CHARACTERS}?[0-9]){12}(${FILLER_CHARACTERS}?[0-9A-Z]){11}(${FILLER_CHARACTERS}?[0-9]){2}`, //Monaco
  `ME(${FILLER_CHARACTERS}?[0-9]){20}`, //Montenegro
  `NL(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){10}`, //The Netherlands
  `NO(${FILLER_CHARACTERS}?[0-9]){13}`, //Norway
  `PK(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){20}`, //Pakistan
  `PS(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){25}`, //Palestine
  `PL(${FILLER_CHARACTERS}?[0-9]){10}(${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Poland
  `PT(${FILLER_CHARACTERS}?[0-9]){23}`, //Portugal
  `QA(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){21}`, //Qatar
  `RO(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){16}`, //Romania
  `LC(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[0-9A-Z]){28}`, //Saint Lucia
  `SM(${FILLER_CHARACTERS}?[0-9]){2}${FILLER_CHARACTERS}?[A-Z](${FILLER_CHARACTERS}?[0-9]){10}(${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //San Marino
  `ST(${FILLER_CHARACTERS}?[0-9]){23}`, //Sao Tome And Princip
  `SA(${FILLER_CHARACTERS}?[0-9]){4}(${FILLER_CHARACTERS}?[0-9A-Z]){18}`, //Saudi Arabia
  `RS(${FILLER_CHARACTERS}?[0-9]){20}`, //Serbia
  `SC(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){20}(${FILLER_CHARACTERS}?[A-Z]){3}`, //Seychelles
  `SK(${FILLER_CHARACTERS}?[0-9]){22}`, //Slovak Republic
  `SI(${FILLER_CHARACTERS}?[0-9]){17}`, //Slovenia
  `ES(${FILLER_CHARACTERS}?[0-9]){22}`, //Spain
  `SE(${FILLER_CHARACTERS}?[0-9]){22}`, //Sweden
  `CH(${FILLER_CHARACTERS}?[0-9]){7}(${FILLER_CHARACTERS}?[0-9A-Z]){12}`, //Switzerland
  `TL38${FILLER_CHARACTERS}?(${FILLER_CHARACTERS}?[0-9]){19}`, //Timor-Leste
  `TN59${FILLER_CHARACTERS}?(${FILLER_CHARACTERS}?[0-9]){20}`, //Tunisia
  `TR(${FILLER_CHARACTERS}?[0-9]){7}(${FILLER_CHARACTERS}?[0-9A-Z]){17}`, //Turkey
  `UA(${FILLER_CHARACTERS}?[0-9]){8}(${FILLER_CHARACTERS}?[0-9A-Z]){19}`, //Ukraine
  `AE(${FILLER_CHARACTERS}?[0-9]){21}`, //United Arab Emirates
  `GB(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){14}`, //United Kingdom
  `VG(${FILLER_CHARACTERS}?[0-9]){2}(${FILLER_CHARACTERS}?[A-Z]){4}(${FILLER_CHARACTERS}?[0-9]){16}`, //Virgin Islands, British
];

/**
 * Regular Expression that matches a bank card number of a particular length
 */
export default class IBANRegExp extends RegExp {

  constructor() { // eslint-disable-line better/explicit-return
    super(IBAN_FORMATS.map(f => `(${f})`).join('|'), 'i');
  }

}
