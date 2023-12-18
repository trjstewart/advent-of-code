export default function (input: string): Number {
  const inventory = input.split('\n')
  const elves = [[]]
  for (const item of inventory) {
    if (!item) elves.push([])
    else elves[elves.length - 1].push(item)
  }

  console.log(inventory)
  return 3000
}
