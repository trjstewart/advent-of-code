import fs from 'fs'
import path from 'path'
import { inverseCaptcha, partOneStepCalculator, partTwoStepCalculator } from './01.solution'

describe('Day 01: Inverse Captcha', () => {
  describe('Part One', () => {
    it('should result in 3', () => expect(inverseCaptcha('1122', partOneStepCalculator)).toBe(3))
    it('should result in 4', () => expect(inverseCaptcha('1111', partOneStepCalculator)).toBe(4))
    it('should result in 0', () => expect(inverseCaptcha('1234', partOneStepCalculator)).toBe(0))
    it('should result in 9', () => expect(inverseCaptcha('91212129', partOneStepCalculator)).toBe(9))
    it('should result in 1228', () => expect(inverseCaptcha(fs.readFileSync(path.join('src', '01.input.txt'), 'utf8'), partOneStepCalculator)).toBe(1228))
  })
  describe('Part Two', () => {
    it('should result in 6', () => expect(inverseCaptcha('1212', partTwoStepCalculator)).toBe(6))
    it('should result in 0', () => expect(inverseCaptcha('1221', partTwoStepCalculator)).toBe(0))
    it('should result in 4', () => expect(inverseCaptcha('123425', partTwoStepCalculator)).toBe(4))
    it('should result in 12', () => expect(inverseCaptcha('123123', partTwoStepCalculator)).toBe(12))
    it('should result in 4', () => expect(inverseCaptcha('12131415', partTwoStepCalculator)).toBe(4))
    it('should result in 1238', () => expect(inverseCaptcha(fs.readFileSync(path.join('src', '01.input.txt'), 'utf8'), partTwoStepCalculator)).toBe(1238))
  })
})
