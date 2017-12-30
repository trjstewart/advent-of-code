// @flow

export function inverseCaptcha(input: string, stepCalculator: (length: number) => number): number {
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

export function partTwoStepCalculator(length: number): number {
  return length / 2
}
