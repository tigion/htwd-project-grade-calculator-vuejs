import { describe, beforeEach, test, expect } from '@jest/globals'

import { Calculation } from './Calculation.js'

describe('class Calculation', () => {
  let calcExample1
  let calcExample2
  const gradeRating1 = 1300
  const gradeRating2 = 2000
  const gradePresentation = 2000
  const gradeDiscussion = 1700
  const variant1 = 1
  const factorWrittenThesis1 = 2
  const factorDefense1 = 1
  const variant2 = 2
  const factorWrittenThesis2 = 3
  const factorDefense2 = 1
  const gradeWrittenThesis = 1650
  const gradeDefense = 1850
  const gradeThesisVariant1 = 1666
  const gradeThesisAsText1 = 'Gut'
  const gradeThesisVariant2 = 1650
  const gradeThesisAsText2 = 'Gut'

  beforeEach(() => {
    calcExample1 = new Calculation()
    calcExample1.setInputGrades(1.3, 2, 2, 1.7, 1)
    calcExample2 = new Calculation()
    calcExample2.setInputGrades(1.3, 2, 2, 1.7, 2)
  })

  test('Constructor / set / get', () => {
    const calc = new Calculation()
    expect(calc.gradeRating1.value).toBe(0)
    expect(calc.gradeRating2.value).toBe(0)
    expect(calc.gradePresentation.value).toBe(0)
    expect(calc.gradeDiscussion.value).toBe(0)
    expect(calc.variant).toBe(0)
    expect(calc.gradeWrittenThesis.value).toBe(0)
    expect(calc.gradeDefense.value).toBe(0)
    expect(calc.gradeThesis.value).toBe(0)
    expect(calc.gradeThesisAsText).toBe('')
  })

  test('variant set / get', () => {
    calcExample1.variant = variant1
    calcExample2.variant = variant2
    expect(calcExample1.variant).toBe(variant1)
    expect(calcExample2.variant).toBe(variant2)
    expect(calcExample1.factorWrittenThesis).toBe(factorWrittenThesis1)
    expect(calcExample2.factorWrittenThesis).toBe(factorWrittenThesis2)
    expect(calcExample1.factorDefense).toBe(factorDefense1)
    expect(calcExample2.factorDefense).toBe(factorDefense2)
    expect(calcExample1.factorDivisor).toBe(factorWrittenThesis1 + factorDefense1)
    expect(calcExample2.factorDivisor).toBe(factorWrittenThesis2 + factorDefense2)
  })

  test('setInputGrades()', () => {
    expect(calcExample1.gradeRating1.value).toBe(gradeRating1)
    expect(calcExample1.gradeRating2.value).toBe(gradeRating2)
    expect(calcExample1.gradePresentation.value).toBe(gradePresentation)
    expect(calcExample1.gradeDiscussion.value).toBe(gradeDiscussion)
    expect(calcExample1.variant).toBe(variant1)
  })

  test('calc()', () => {
    // calc variant 1
    calcExample1.calc()
    expect(calcExample1.variant).toBe(variant1)
    expect(calcExample1.gradeWrittenThesis.value).toBe(gradeWrittenThesis)
    expect(calcExample1.gradeDefense.value).toBe(gradeDefense)
    expect(calcExample1.gradeThesis.value).toBe(gradeThesisVariant1)
    expect(calcExample1.gradeThesisAsText).toBe(gradeThesisAsText1)

    // calc variant 2
    calcExample2.calc()
    expect(calcExample2.variant).toBe(variant2)
    expect(calcExample2.gradeWrittenThesis.value).toBe(gradeWrittenThesis)
    expect(calcExample2.gradeDefense.value).toBe(gradeDefense)
    expect(calcExample2.gradeThesis.value).toBe(gradeThesisVariant2)
    expect(calcExample2.gradeThesisAsText).toBe(gradeThesisAsText2)
  })

  test('calcGradeWrittenThesis()', () => {
    calcExample1.calcGradeWrittenThesis()
    expect(calcExample1.gradeWrittenThesis.value).toBe(gradeWrittenThesis)
  })

  test('calcGradeDefense()', () => {
    const calc = calcExample1.clone()
    calc.calcGradeDefense()
    expect(calc.gradeDefense.value).toBe(gradeDefense)
  })

  test('calcGradeThesis()', () => {
    // calc variant 1
    const calc1 = calcExample1.clone()
    calc1.calcGradeThesis()
    expect(calcExample1.variant).toBe(variant1)
    expect(calc1.gradeThesis.value).toBe(gradeThesisVariant1)
    expect(calcExample1.gradeThesisAsText).toBe(gradeThesisAsText1)

    // calc variant 2
    const calc2 = calcExample2.clone()
    calc2.calcGradeThesis()
    expect(calcExample2.variant).toBe(variant2)
    expect(calc2.gradeThesis.value).toBe(gradeThesisVariant2)
    expect(calcExample2.gradeThesisAsText).toBe(gradeThesisAsText2)
  })

  test('getGradeAsText()', () => {
    const calc = new Calculation()
    expect(calc.getGradeAsText(999)).toBe(' - ')
    expect(calc.getGradeAsText(1500)).toBe('Sehr gut')
    expect(calc.getGradeAsText(2500)).toBe('Gut')
    expect(calc.getGradeAsText(3500)).toBe('Befriedigend')
    expect(calc.getGradeAsText(4000)).toBe('Ausreichend')
    expect(calc.getGradeAsText(4001)).toBe('Nicht ausreichend')
  })
})
