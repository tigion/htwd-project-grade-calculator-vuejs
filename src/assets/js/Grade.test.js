import { describe, test, expect } from '@jest/globals'

import { Grade } from './Grade.js'

describe('class Grade', () => {
  test('Constructor / set / get', () => {
    // Constructor / get
    let grade = new Grade(2300)
    expect(grade.value).toBe(2300)
    grade = new Grade()
    expect(grade.value).toBe(0)
    grade = new Grade(999)
    expect(grade.value).toBe(0)
    grade = new Grade(5001)
    expect(grade.value).toBe(0)

    // set / get
    grade.value = 2300
    expect(grade.value).toBe(2300)
    grade.value = 999
    expect(grade.value).toBe(0)
    grade.value = 5001
    expect(grade.value).toBe(0)
  })

  test('valueShort()', () => {
    let grade = new Grade(2299)
    expect(grade.valueShort).toBe(2200)
    grade = new Grade(2300)
    expect(grade.valueShort).toBe(2300)
    grade = new Grade(2399)
    expect(grade.valueShort).toBe(2300)
  })

  test('valueAsString()', () => {
    const grade = new Grade(2345)
    expect(grade.valueAsString).toBe('2,345')
  })

  test('valueShortAsString()', () => {
    const grade = new Grade(2345)
    expect(grade.valueShortAsString).toBe('2,3')
  })

  test('convertToString()', () => {
    const grade = new Grade(2345)
    expect(grade.convertToString(2345)).toBe('2,3')
    expect(grade.convertToString(2345, true)).toBe('2,3')
    expect(grade.convertToString(2345, false)).toBe('2,345')
  })

  test('floatToInt()', () => {
    expect(Grade.floatToInt(2.345)).toBe(2345)
    expect(Grade.floatToInt(2.3)).toBe(2300)
    expect(Grade.floatToInt(2.345678)).toBe(2345)
  })
})
