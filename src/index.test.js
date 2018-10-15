/* eslint-disable max-nested-callbacks */
import sanitize, { async } from './index'

import { CARDNUMBERS, ACCOUNTNUMBERS, BOTH } from './index.data'

const TESTS = Object.assign({}, CARDNUMBERS, ACCOUNTNUMBERS, BOTH)

describe('pci-dss-sanitizer', () => {
  it('should export a function', () => {
    expect(sanitize).toBeInstanceOf(Function)
  })

  it('should sanitize strings', () => {
    Object.keys(TESTS).forEach(input => {
      expect(sanitize(input)).toEqual(TESTS[input])
    })
  })

  it('should also be available async', done => {
    Promise.all(
      Object.keys(TESTS).map(input =>
        async(input, output => {
          expect(output).toEqual(TESTS[input])
        })
      )
    ).then(() => done(), () => done())
  })

  it('should also be available async without callback', done => {
    const promises = []

    Object.keys(TESTS).forEach(input => {
      promises.push(
        async(input).then(output => {
          expect(output).toEqual(TESTS[input])
        })
      )
    })

    Promise.all(promises).then(() => done(), () => done())
  })
})
