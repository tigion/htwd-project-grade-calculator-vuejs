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
    const factor = Grade.precisionFactor / Grade.shortPrecisionFactor
    return parseInt(this.value / factor) * factor
  }
  get valueAsString() {
    return this.convertToString(this.value, false)
  }
  get valueShortAsString() {
    return this.convertToString(this.value)
  }

  convertToString(value, isShort = true) {
    const sValue = value > 0 ? value.toString() : '0'.repeat(Grade.precisionDigits + 1)
    const integerPart = sValue[0]
    const fractionalPart = isShort ? sValue[1] : sValue.slice(1)
    return integerPart + Grade.decimalSeparator + fractionalPart
  }

  static floatToInt(value) {
    return parseInt(value * Grade.precisionFactor)
  }

  clone() {
    return new Grade(this.value)
  }
}
