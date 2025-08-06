import { describe, beforeEach, test, expect } from 'vitest'

import { Calculation } from './Calculation.js'

describe('class Calculation', () => {
  // Test data variant 1
  const v1 = {
    example: null,
    input: {
      gradeRating1: 1.3,
      gradeRating2: 2,
      gradePresentation: 2,
      gradeDiscussion: 1.7,
      variant: 1
    },
    output: {
      gradeRating1: 1300,
      gradeRating2: 2000,
      gradePresentation: 2000,
      gradeDiscussion: 1700,
      variant: 1,
      factorWrittenThesis: 2,
      factorDefense: 1,
      gradeWrittenThesis: 1650,
      gradeDefense: 1850,
      gradeThesis: 1666,
      gradeThesisAsText: 'Gut'
    }
  }

  // Test data variant 2
  const v2 = {
    example: null,
    input: {
      gradeRating1: 1.3,
      gradeRating2: 2,
      gradePresentation: 2,
      gradeDiscussion: 1.7,
      variant: 2
    },
    output: {
      gradeRating1: 1300,
      gradeRating2: 2000,
      gradePresentation: 2000,
      gradeDiscussion: 1700,
      variant: 2,
      factorWrittenThesis: 3,
      factorDefense: 1,
      gradeWrittenThesis: 1650,
      gradeDefense: 1850,
      gradeThesis: 1650,
      gradeThesisAsText: 'Gut'
    }
  }

  // Test data variant 3
  const v3 = {
    example: null,
    input: {
      gradeRating1: 1.3,
      gradeRating2: 1.7,
      gradePresentation: 1.7,
      gradeDiscussion: 1.7,
      variant: 1
    },
    output: {
      gradeRating1: 1300,
      gradeRating2: 1700,
      gradePresentation: 1700,
      gradeDiscussion: 1700,
      variant: 1,
      factorWrittenThesis: 2,
      factorDefense: 1,
      gradeWrittenThesis: 1500,
      gradeDefense: 1700,
      gradeThesis: 1566,
      gradeThesisAsText: 'Sehr gut'
    }
  }

  beforeEach(() => {
    v1.example = new Calculation()
    v1.example.setInputGrades(
      v1.input.gradeRating1,
      v1.input.gradeRating2,
      v1.input.gradePresentation,
      v1.input.gradeDiscussion,
      v1.input.variant
    )
    v2.example = new Calculation()
    v2.example.setInputGrades(
      v2.input.gradeRating1,
      v2.input.gradeRating2,
      v2.input.gradePresentation,
      v2.input.gradeDiscussion,
      v2.input.variant
    )
    v3.example = new Calculation()
    v3.example.setInputGrades(
      v3.input.gradeRating1,
      v3.input.gradeRating2,
      v3.input.gradePresentation,
      v3.input.gradeDiscussion,
      v3.input.variant
    )
  })

  test('Constructor (no arguments)', () => {
    const calculation = new Calculation()
    expect(calculation.gradeRating1.value).toBe(0)
    expect(calculation.gradeRating2.value).toBe(0)
    expect(calculation.gradePresentation.value).toBe(0)
    expect(calculation.gradeDiscussion.value).toBe(0)
    expect(calculation.variant).toBe(0)
    expect(calculation.gradeWrittenThesis.value).toBe(0)
    expect(calculation.gradeDefense.value).toBe(0)
    expect(calculation.gradeThesis.value).toBe(0)
    expect(calculation.gradeThesisAsText).toBe('')
  })

  test('variant set / get', () => {
    // variant 1
    v1.example.variant = v1.input.variant
    expect(v1.example.variant).toBe(v1.output.variant)
    expect(v1.example.factorWrittenThesis).toBe(v1.output.factorWrittenThesis)
    expect(v1.example.factorDefense).toBe(v1.output.factorDefense)
    expect(v1.example.factorDivisor).toBe(v1.output.factorWrittenThesis + v1.output.factorDefense)

    // variant 2
    v2.example.variant = v2.input.variant
    expect(v2.example.variant).toBe(v2.output.variant)
    expect(v2.example.factorWrittenThesis).toBe(v2.output.factorWrittenThesis)
    expect(v2.example.factorDefense).toBe(v2.output.factorDefense)
    expect(v2.example.factorDivisor).toBe(v2.output.factorWrittenThesis + v2.output.factorDefense)

    // variant 3
    v3.example.variant = v3.input.variant
    expect(v3.example.variant).toBe(v3.output.variant)
    expect(v3.example.factorWrittenThesis).toBe(v3.output.factorWrittenThesis)
    expect(v3.example.factorDefense).toBe(v3.output.factorDefense)
    expect(v3.example.factorDivisor).toBe(v3.output.factorWrittenThesis + v3.output.factorDefense)
  })

  test('setInputGrades()', () => {
    // variant 1
    expect(v1.example.gradeRating1.value).toBe(v1.output.gradeRating1)
    expect(v1.example.gradeRating2.value).toBe(v1.output.gradeRating2)
    expect(v1.example.gradePresentation.value).toBe(v1.output.gradePresentation)
    expect(v1.example.gradeDiscussion.value).toBe(v1.output.gradeDiscussion)
    expect(v1.example.variant).toBe(v1.output.variant)

    // variant 2
    expect(v2.example.gradeRating1.value).toBe(v2.output.gradeRating1)
    expect(v2.example.gradeRating2.value).toBe(v2.output.gradeRating2)
    expect(v2.example.gradePresentation.value).toBe(v2.output.gradePresentation)
    expect(v2.example.gradeDiscussion.value).toBe(v2.output.gradeDiscussion)
    expect(v2.example.variant).toBe(v2.output.variant)

    // variant 3
    expect(v3.example.gradeRating1.value).toBe(v3.output.gradeRating1)
    expect(v3.example.gradeRating2.value).toBe(v3.output.gradeRating2)
    expect(v3.example.gradePresentation.value).toBe(v3.output.gradePresentation)
    expect(v3.example.gradeDiscussion.value).toBe(v3.output.gradeDiscussion)
    expect(v3.example.variant).toBe(v3.output.variant)
  })

  test('calcGradeWrittenThesis()', () => {
    // variant 1
    v1.example.calcGradeWrittenThesis()
    expect(v1.example.gradeWrittenThesis.value).toBe(v1.output.gradeWrittenThesis)

    // variant 2
    v2.example.calcGradeWrittenThesis()
    expect(v2.example.gradeWrittenThesis.value).toBe(v2.output.gradeWrittenThesis)

    // variant 3
    v3.example.calcGradeWrittenThesis()
    expect(v3.example.gradeWrittenThesis.value).toBe(v3.output.gradeWrittenThesis)
  })

  test('calcGradeDefense()', () => {
    // variant 1
    v1.example.calcGradeDefense()
    expect(v1.example.gradeDefense.value).toBe(v1.output.gradeDefense)

    // variant 2
    v2.example.calcGradeDefense()
    expect(v2.example.gradeDefense.value).toBe(v2.output.gradeDefense)

    // variant 3
    v3.example.calcGradeDefense()
    expect(v3.example.gradeDefense.value).toBe(v3.output.gradeDefense)
  })

  test('calcGradeThesis()', () => {
    // variant 1
    v1.example.calcGradeThesis()
    expect(v1.example.variant).toBe(v1.output.variant)
    expect(v1.example.gradeThesis.value).toBe(v1.output.gradeThesis)
    expect(v1.example.gradeThesisAsText).toBe(v1.output.gradeThesisAsText)

    // variant 2
    v2.example.calcGradeThesis()
    expect(v2.example.variant).toBe(v2.output.variant)
    expect(v2.example.gradeThesis.value).toBe(v2.output.gradeThesis)
    expect(v2.example.gradeThesisAsText).toBe(v2.output.gradeThesisAsText)

    // variant 3
    v3.example.calcGradeThesis()
    expect(v3.example.variant).toBe(v3.output.variant)
    expect(v3.example.gradeThesis.value).toBe(v3.output.gradeThesis)
    expect(v3.example.gradeThesisAsText).toBe(v3.output.gradeThesisAsText)
  })

  test('calc()', () => {
    // variant 1
    v1.example.calc()
    expect(v1.example.variant).toBe(v1.output.variant)
    expect(v1.example.gradeWrittenThesis.value).toBe(v1.output.gradeWrittenThesis)
    expect(v1.example.gradeDefense.value).toBe(v1.output.gradeDefense)
    expect(v1.example.gradeThesis.value).toBe(v1.output.gradeThesis)
    expect(v1.example.gradeThesisAsText).toBe(v1.output.gradeThesisAsText)

    // variant 2
    v2.example.calc()
    expect(v2.example.variant).toBe(v2.output.variant)
    expect(v2.example.gradeWrittenThesis.value).toBe(v2.output.gradeWrittenThesis)
    expect(v2.example.gradeDefense.value).toBe(v2.output.gradeDefense)
    expect(v2.example.gradeThesis.value).toBe(v2.output.gradeThesis)
    expect(v2.example.gradeThesisAsText).toBe(v2.output.gradeThesisAsText)

    // variant 3
    v3.example.calc()
    expect(v3.example.variant).toBe(v3.output.variant)
    expect(v3.example.gradeWrittenThesis.value).toBe(v3.output.gradeWrittenThesis)
    expect(v3.example.gradeDefense.value).toBe(v3.output.gradeDefense)
    expect(v3.example.gradeThesis.value).toBe(v3.output.gradeThesis)
    expect(v3.example.gradeThesisAsText).toBe(v3.output.gradeThesisAsText)
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

  test('clone()', () => {
    // variant 1
    const clone1 = v1.example.clone()
    expect(clone1.variant).toBe(v1.output.variant)
    expect(clone1.gradeRating1.value).toBe(v1.output.gradeRating1)
    expect(clone1.gradeRating2.value).toBe(v1.output.gradeRating2)
    expect(clone1.gradePresentation.value).toBe(v1.output.gradePresentation)
    expect(clone1.gradeDiscussion.value).toBe(v1.output.gradeDiscussion)
    expect(clone1.gradeWrittenThesis.value).toBe(v1.output.gradeWrittenThesis)
    expect(clone1.gradeDefense.value).toBe(v1.output.gradeDefense)
    expect(clone1.gradeThesis.value).toBe(v1.output.gradeThesis)
    expect(clone1.gradeThesisAsText).toBe(v1.output.gradeThesisAsText)
  })
})
