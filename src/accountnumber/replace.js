import IBANRegExp from './IBANRegExp'
import maskIBAN from './maskIBAN'
import repeatUntilStable from '../utils/repeatUntilStable'

const IBAN = new IBANRegExp()

export default function replace(text) {
  return repeatUntilStable(text, input =>
    input.replace(IBAN, match => maskIBAN(match))
  )
}
