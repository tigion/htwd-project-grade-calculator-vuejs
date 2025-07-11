export class Grade {
  static precisionDigits = 3
  static precisionFactor = Math.pow(10, Grade.precisionDigits)
  static shortPrecisionDigits = 1
  static shortPrecisionFactor = Math.pow(10, Grade.shortPrecisionDigits)
  static decimalSeparator = ','

  constructor(value = 0) {
    this.value = value
  }

  get value() {
    return this._value
  }
  set value(value) {
    value = parseInt(value)
    this._value =
      value >= 1 * Grade.precisionFactor && value <= 5 * Grade.precisionFactor ? value : 0
  }

  get valueShort() {
    return this.convertToShort(this.value)
  }
  get valueAsString() {
    return this.convertToString(this.value, false)
  }
  get valueShortAsString() {
    return this.convertToString(this.value)
  }

  convertToShort(value) {
    const factor = Grade.precisionFactor / Grade.shortPrecisionFactor
    return parseInt(value / factor) * factor
  }

  convertToString(value, isShort = true) {
    const sValue = value.toString()
    let integerPart = '0'
    let fractionalPart

    if (sValue.length > Grade.precisionDigits) {
      integerPart = sValue.slice(0, sValue.length - Grade.precisionDigits)
      fractionalPart = sValue.slice(sValue.length - Grade.precisionDigits)
    } else {
      fractionalPart = '0'.repeat(Grade.precisionDigits - sValue.length) + sValue
    }

    if (isShort) {
      fractionalPart = fractionalPart.slice(0, Grade.shortPrecisionDigits)
    }

    return integerPart + Grade.decimalSeparator + fractionalPart
  }

  static floatToInt(value) {
    return parseInt(value * Grade.precisionFactor)
  }

  clone() {
    return new Grade(this.value)
  }
}
