import { describe, test, expect } from 'vitest'

import { Grade } from './../Grade.js'

describe('class Grade', () => {
  test('Constructor', () => {
    let grade = new Grade()
    expect(grade.value).toBe(0)

    const testData = [
      { input: 999, output: 0 },
      { input: 999.99, output: 0 },
      { input: 1000, output: 1000 },
      { input: 1000.99, output: 1000 },
      { input: 5000, output: 5000 },
      { input: 5001, output: 0 }
    ]

    for (const test of testData) {
      grade = new Grade(test.input)
      expect(grade.value).toBe(test.output)
    }
  })

  test('value set / get', () => {
    const grade = new Grade()

    const testData = [
      { input: 999, output: 0 },
      { input: 999.99, output: 0 },
      { input: 1000, output: 1000 },
      { input: 1000.99, output: 1000 },
      { input: 5000, output: 5000 },
      { input: 5001, output: 0 }
    ]

    for (const test of testData) {
      grade.value = test.input
      expect(grade.value).toBe(test.output)
    }
  })

  test('valueShort get', () => {
    const grade = new Grade()

    const testData = [
      { input: 999, output: 0 },
      { input: 1000, output: 1000 },
      { input: 1001, output: 1000 },
      { input: 1099, output: 1000 },
      { input: 1100, output: 1100 },
      { input: 4999, output: 4900 },
      { input: 5000, output: 5000 },
      { input: 5001, output: 0 }
    ]

    for (const test of testData) {
      grade.value = test.input
      expect(grade.valueShort).toBe(test.output)
    }
  })

  test('valueAsString get', () => {
    const grade = new Grade()

    const testData = [
      { input: 999, output: '0,000' },
      { input: 1000, output: '1,000' },
      { input: 1001, output: '1,001' },
      { input: 1099, output: '1,099' },
      { input: 1100, output: '1,100' },
      { input: 4999, output: '4,999' },
      { input: 5000, output: '5,000' },
      { input: 5001, output: '0,000' }
    ]

    for (const test of testData) {
      grade.value = test.input
      expect(grade.valueAsString).toBe(test.output)
    }
  })

  test('valueShortAsString get', () => {
    const grade = new Grade()

    const testData = [
      { input: 999, output: '0,0' },
      { input: 1000, output: '1,0' },
      { input: 1001, output: '1,0' },
      { input: 1099, output: '1,0' },
      { input: 1100, output: '1,1' },
      { input: 4999, output: '4,9' },
      { input: 5000, output: '5,0' },
      { input: 5001, output: '0,0' }
    ]

    for (const test of testData) {
      grade.value = test.input
      expect(grade.valueShortAsString).toBe(test.output)
    }
  })

  test('convertToShort()', () => {
    const grade = new Grade()

    const testData = [
      { input: 0, output: 0 },
      { input: 9, output: 0 },
      { input: 99, output: 0 },
      { input: 999, output: 900 },
      { input: 9999, output: 9900 },
      { input: 99999, output: 99900 }
    ]

    for (const test of testData) {
      expect(grade.convertToShort(test.input)).toBe(test.output)
    }
  })

  test('convertToString()', () => {
    const grade = new Grade()

    const testData = [
      { input: 0, output: { short: '0,0', long: '0,000' } },
      { input: 99, output: { short: '0,0', long: '0,099' } },
      { input: 999, output: { short: '0,9', long: '0,999' } },
      { input: 1000, output: { short: '1,0', long: '1,000' } },
      { input: 1001, output: { short: '1,0', long: '1,001' } },
      { input: 1099, output: { short: '1,0', long: '1,099' } },
      { input: 1100, output: { short: '1,1', long: '1,100' } },
      { input: 4999, output: { short: '4,9', long: '4,999' } },
      { input: 5000, output: { short: '5,0', long: '5,000' } },
      { input: 5001, output: { short: '5,0', long: '5,001' } },
      { input: 99999, output: { short: '99,9', long: '99,999' } }
    ]

    for (const test of testData) {
      expect(grade.convertToString(test.input)).toBe(test.output.short)
      expect(grade.convertToString(test.input, true)).toBe(test.output.short)
      expect(grade.convertToString(test.input, false)).toBe(test.output.long)
    }
  })

  test('floatToInt()', () => {
    const testData = [
      { input: 0, output: 0 },
      { input: 1, output: 1000 },
      { input: 1.2, output: 1200 },
      { input: 1.23, output: 1230 },
      { input: 1.234, output: 1234 },
      { input: 1.2345, output: 1234 },
      { input: 1.23456, output: 1234 }
    ]

    for (const test of testData) {
      expect(Grade.floatToInt(test.input)).toBe(test.output)
    }
  })
})
