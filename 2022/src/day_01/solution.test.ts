import fs from 'fs'
import path from 'path'
import solution from './solution'

const example = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8')
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')

describe('Day 1: Calorie Counting', () => {
  test('Example', () => expect(solution(example)).toBe(24000))
  test('Part One', () => expect(solution(input)).toBe(24000))
})
