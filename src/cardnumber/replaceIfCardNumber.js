import maskLuhn from './maskLuhn'

export default function replaceIfCardNumber(match, p1) {
  const masked = maskLuhn(p1)

  if (masked === undefined) {
    return p1
  }

  return masked
}
