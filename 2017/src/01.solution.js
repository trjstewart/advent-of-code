// @flow

export function inverseCaptcha(input: string, stepCalculator: object): number {
  return Array.from(input)
    .map(digit => parseInt(digit))
    .reduce((total, digit, i, digits) => {
      const step: number = stepCalculator(digits.length)
      return digit === digits[(i + step) % digits.length] ? total + digit : total
    }, 0)
}

export function partOneStepCalculator() {
  return 1
}

export function partTwoStepCalculator(length: number) {
  return length / 2
}
