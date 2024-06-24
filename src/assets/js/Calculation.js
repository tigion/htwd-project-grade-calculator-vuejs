import { Grade } from './Grade.js'

export class Calculation {
  #variant = 0 // Berechnungsvariante
  #factorWrittenThesis = 0 // Faktor Schriftliche Arbeit
  #factorDefense = 0 // Faktor Verteidigung

  constructor() {
    this.gradeRating1 = new Grade() // Note Gutachten 1
    this.gradeRating2 = new Grade() // Note Gutachten 2
    this.gradePresentation = new Grade() // Note Vortrag
    this.gradeDiscussion = new Grade() // Note Diskussion

    this.gradeWrittenThesis = new Grade() // Note Schriftliche Arbeit
    this.gradeDefense = new Grade() // Note Verteidigung
    this.gradeThesis = new Grade() // Note Abschlussarbeit
    this.gradeThesisAsText = ''
  }

  set variant(value) {
    if (value == 1) {
      // 2/3 + 1/3 -> y = (2 * a + 1 * b) / 3
      this.#variant = value
      this.#factorWrittenThesis = 2
      this.#factorDefense = 1
    } else if (value == 2) {
      // 3/4 + 1/4 -> y = (3 * a + 1 * b) / 4
      this.#variant = value
      this.#factorWrittenThesis = 3
      this.#factorDefense = 1
    }
  }
  get variant() {
    return this.#variant
  }

  get factorWrittenThesis() {
    return this.#factorWrittenThesis
  }
  get factorDefense() {
    return this.#factorDefense
  }
  get factorDivisor() {
    return this.factorWrittenThesis + this.factorDefense
  }

  setInputGrades(grade1, grade2, grade3, grade4, variant = 1) {
    this.gradeRating1.value = Grade.floatToInt(parseFloat(grade1))
    this.gradeRating2.value = Grade.floatToInt(parseFloat(grade2))
    this.gradePresentation.value = Grade.floatToInt(parseFloat(grade3))
    this.gradeDiscussion.value = Grade.floatToInt(parseFloat(grade4))
    this.variant = variant

    this.calc()
  }

  calc() {
    this.calcGradeWrittenThesis()
    this.calcGradeDefense()
    this.calcGradeThesis()
  }

  calcGradeWrittenThesis() {
    if (this.gradeRating1.value == 0 || this.gradeRating2.value == 0) {
      this.gradeWrittenThesis.value = 0
    } else {
      if (
        this.gradeRating1.value > 4 * Grade.precisionFactor ||
        this.gradeRating2.value > 4 * Grade.precisionFactor
      ) {
        this.gradeWrittenThesis.value = 5 * Grade.precisionFactor
      } else {
        const result = (this.gradeRating1.value + this.gradeRating2.value) / 2
        this.gradeWrittenThesis.value = parseInt(result)
      }
    }
  }

  calcGradeDefense() {
    if (this.gradePresentation.value == 0 || this.gradeDiscussion.value == 0) {
      this.gradeDefense.value = 0
    } else {
      const result = (this.gradePresentation.value + this.gradeDiscussion.value) / 2
      this.gradeDefense.value =
        result > 4 * Grade.precisionFactor ? 5 * Grade.precisionFactor : parseInt(result)
    }
  }

  calcGradeThesis() {
    const fWT = this.#factorWrittenThesis
    const gWT = this.gradeWrittenThesis.valueShort
    const fD = this.#factorDefense
    const gD = this.gradeDefense.valueShort
    const fDivisor = this.factorDivisor
    let result = 0

    if (fWT == 0 || gWT == 0 || fD == 0 || gD == 0) {
      // Sets grade thesis to 0 if any of the variables is 0.
      result = 0
    } else {
      if (gWT > 4 * Grade.precisionFactor || gD > 4 * Grade.precisionFactor) {
        // Sets grade thesis to 5 if any of the grade written thesis or defense is greater than 4.
        result = 5 * Grade.precisionFactor
      } else {
        // Calculates grade thesis.
        result = (fWT * gWT + fD * gD) / fDivisor
      }
    }

    this.gradeThesis.value = parseInt(result)
    this.gradeThesisAsText = this.getGradeAsText(this.gradeThesis.value)
  }

  getGradeAsText(grade) {
    if (grade < 1 * Grade.precisionFactor) return ' - '
    else if (grade <= 1.5 * Grade.precisionFactor) return 'Sehr gut'
    else if (grade <= 2.5 * Grade.precisionFactor) return 'Gut'
    else if (grade <= 3.5 * Grade.precisionFactor) return 'Befriedigend'
    else if (grade <= 4 * Grade.precisionFactor) return 'Ausreichend'
    else return 'Nicht ausreichend'
  }

  clone() {
    const clone = new Calculation()
    clone.gradeRating1 = this.gradeRating1.clone()
    clone.gradeRating2 = this.gradeRating2.clone()
    clone.gradePresentation = this.gradePresentation.clone()
    clone.gradeDiscussion = this.gradeDiscussion.clone()
    // clone.gradeRating1 = Object.create(this.gradeRating1)
    // clone.gradeRating2 = Object.create(this.gradeRating2)
    // clone.gradePresentation = Object.create(this.gradePresentation)
    // clone.gradeDiscussion = Object.create(this.gradeDiscussion)
    clone.variant = this.variant
    clone.calc()
    return clone
  }
}
