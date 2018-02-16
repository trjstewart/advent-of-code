import fs from 'fs'
import path from 'path'
import { corruptionChecksum } from './02.solution'

describe('Day 02: Corruption Checksum', () => {
  describe('Part One', () => {
    it('should result in 18', () => expect(corruptionChecksum('5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8')).toBe(18))
    it('should result in 53978', () => expect(corruptionChecksum(fs.readFileSync(path.join('src', '02.input.txt'), 'utf8'))).toBe(53978))
  })
})
