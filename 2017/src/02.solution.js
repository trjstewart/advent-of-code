// @flow

export function corruptionChecksum(input: string): number {
  const rows: Array<Array<number>> = input.split('\n').map(row => row.split('\t').map(num => parseInt(num)))

  return rows.map(row => {
    return row.reduce((obj, num) => {
      if (obj.high === null && obj.low === null) return { high: num, low: num }
      else if (num > obj.high) return { high: num, low: obj.low }
      else if (num < obj.low) return { high: obj.high, low: num }
      else return obj
    }, { high: null, low: null})
  }).map(row => (row.high !== null && row.low !== null) ? row.high - row.low : 0)
    .reduce((total, num) => total + num)
}
