import { describe, test, expect } from 'vitest'

import { Grade } from './Grade.js'

describe('class Grade', () => {
  test('Constructor / set', () => {
    let grade = new Grade()
    expect(grade.value).toBe(0)
    grade = new Grade(999)
    expect(grade.value).toBe(0)
    grade = new Grade(999.99)
    expect(grade.value).toBe(0)
    grade = new Grade(1000)
    expect(grade.value).toBe(1000)
    grade = new Grade(1000.99)
    expect(grade.value).toBe(1000)
    grade = new Grade(5000)
    expect(grade.value).toBe(5000)
    grade = new Grade(5001)
    expect(grade.value).toBe(0)
  })

  test('value set / get', () => {
    let grade = new Grade()
    grade.value = 999
    expect(grade.value).toBe(0)
    grade.value = 999.99
    expect(grade.value).toBe(0)
    grade.value = 1000
    expect(grade.value).toBe(1000)
    grade.value = 1000.99
    expect(grade.value).toBe(1000)
    grade.value = 5000
    expect(grade.value).toBe(5000)
    grade.value = 5001
    expect(grade.value).toBe(0)
  })

  test('valueShort get', () => {
    let grade = new Grade()
    expect(grade.valueShort).toBe(0)
    grade.value = 999
    expect(grade.valueShort).toBe(0)
    grade.value = 1000
    expect(grade.valueShort).toBe(1000)
    grade.value = 1001
    expect(grade.valueShort).toBe(1000)
    grade.value = 1099
    expect(grade.valueShort).toBe(1000)
    grade.value = 1100
    expect(grade.valueShort).toBe(1100)
    grade.value = 4999
    expect(grade.valueShort).toBe(4900)
    grade.value = 5000
    expect(grade.valueShort).toBe(5000)
    grade.value = 5001
    expect(grade.valueShort).toBe(0)
  })

  test('valueAsString get', () => {
    const grade = new Grade()
    expect(grade.valueAsString).toBe('0,000')
    grade.value = 999
    expect(grade.valueAsString).toBe('0,000')
    grade.value = 1000
    expect(grade.valueAsString).toBe('1,000')
    grade.value = 1001
    expect(grade.valueAsString).toBe('1,001')
    grade.value = 1099
    expect(grade.valueAsString).toBe('1,099')
    grade.value = 1100
    expect(grade.valueAsString).toBe('1,100')
    grade.value = 4999
    expect(grade.valueAsString).toBe('4,999')
    grade.value = 5000
    expect(grade.valueAsString).toBe('5,000')
    grade.value = 5001
    expect(grade.valueAsString).toBe('0,000')
  })

  test('valueShortAsString get', () => {
    const grade = new Grade()
    expect(grade.valueShortAsString).toBe('0,0')
    grade.value = 999
    expect(grade.valueShortAsString).toBe('0,0')
    grade.value = 1000
    expect(grade.valueShortAsString).toBe('1,0')
    grade.value = 1001
    expect(grade.valueShortAsString).toBe('1,0')
    grade.value = 1099
    expect(grade.valueShortAsString).toBe('1,0')
    grade.value = 1100
    expect(grade.valueShortAsString).toBe('1,1')
    grade.value = 4999
    expect(grade.valueShortAsString).toBe('4,9')
    grade.value = 5000
    expect(grade.valueShortAsString).toBe('5,0')
    grade.value = 5001
    expect(grade.valueShortAsString).toBe('0,0')
  })

  test('convertToShort()', () => {
    const grade = new Grade()
    expect(grade.convertToShort(0)).toBe(0)
    expect(grade.convertToShort(9)).toBe(0)
    expect(grade.convertToShort(99)).toBe(0)
    expect(grade.convertToShort(999)).toBe(900)
    expect(grade.convertToShort(9999)).toBe(9900)
    expect(grade.convertToShort(99999)).toBe(99900)
  })

  test('convertToString()', () => {
    const grade = new Grade()
    expect(grade.convertToString(0)).toBe('0,0')
    expect(grade.convertToString(0, true)).toBe('0,0')
    expect(grade.convertToString(0, false)).toBe('0,000')
    expect(grade.convertToString(99)).toBe('0,0')
    expect(grade.convertToString(99, true)).toBe('0,0')
    expect(grade.convertToString(99, false)).toBe('0,099')
    expect(grade.convertToString(999)).toBe('0,9')
    expect(grade.convertToString(999, true)).toBe('0,9')
    expect(grade.convertToString(999, false)).toBe('0,999')
    expect(grade.convertToString(1000)).toBe('1,0')
    expect(grade.convertToString(1000, true)).toBe('1,0')
    expect(grade.convertToString(1000, false)).toBe('1,000')
    expect(grade.convertToString(1001)).toBe('1,0')
    expect(grade.convertToString(1001, true)).toBe('1,0')
    expect(grade.convertToString(1001, false)).toBe('1,001')
    expect(grade.convertToString(1099)).toBe('1,0')
    expect(grade.convertToString(1099, true)).toBe('1,0')
    expect(grade.convertToString(1099, false)).toBe('1,099')
    expect(grade.convertToString(1100)).toBe('1,1')
    expect(grade.convertToString(1100, true)).toBe('1,1')
    expect(grade.convertToString(1100, false)).toBe('1,100')
    expect(grade.convertToString(4999)).toBe('4,9')
    expect(grade.convertToString(4999, true)).toBe('4,9')
    expect(grade.convertToString(4999, false)).toBe('4,999')
    expect(grade.convertToString(5000)).toBe('5,0')
    expect(grade.convertToString(5000, true)).toBe('5,0')
    expect(grade.convertToString(5000, false)).toBe('5,000')
    expect(grade.convertToString(5001)).toBe('5,0')
    expect(grade.convertToString(5001, true)).toBe('5,0')
    expect(grade.convertToString(5001, false)).toBe('5,001')
    expect(grade.convertToString(99999)).toBe('99,9')
    expect(grade.convertToString(99999, true)).toBe('99,9')
    expect(grade.convertToString(99999, false)).toBe('99,999')
  })

  test('floatToInt()', () => {
    expect(Grade.floatToInt(0)).toBe(0)
    expect(Grade.floatToInt(1)).toBe(1000)
    expect(Grade.floatToInt(1.2)).toBe(1200)
    expect(Grade.floatToInt(1.23)).toBe(1230)
    expect(Grade.floatToInt(1.234)).toBe(1234)
    expect(Grade.floatToInt(1.2345)).toBe(1234)
    expect(Grade.floatToInt(1.23456)).toBe(1234)
  })
})
