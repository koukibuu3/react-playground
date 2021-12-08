console.log(typeof 100)

const arr3 = [1, 2, 3]
console.log(typeof arr3)

type NumArr = typeof arr3

const val: NumArr = [4, 5, 6]
const val2: NumArr = ['foo', 'bar', 'baz']
