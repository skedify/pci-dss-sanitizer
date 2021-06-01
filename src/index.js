import replaceCardNumber from './cardnumber/replace'
import replaceAccountNumber from './accountnumber/replace'
import createCardNumberFilterStream from './cardnumber/createCardNumberFilterStream'
import createIBANFilterStream from './accountnumber/createIBANFilterStream'
import pipe from 'multipipe'

const sanitizers = [replaceAccountNumber, replaceCardNumber]

export default function sanitize(input) {
  return sanitizers.reduce(
    (sanitizedInput, sanitizer) => sanitizer(sanitizedInput),
    input
  )
}

export function createStream() {
  return pipe(createIBANFilterStream(), createCardNumberFilterStream())
}

export function async(input, callback) {
  return new Promise(resolve => {
    const stream = createStream()

    const buffer = []

    stream.on('data', buffer.push.bind(buffer))
    stream.on('end', () => {
      const output = Buffer.concat(buffer).toString()

      if (callback) {
        callback(output)
      }

      resolve(output)
    })

    stream.end(input)
  })
}
