const arr = [1, 2, 3, 4, 5]

console.log(arr.reduce((n, m) => n + m))
console.log(arr.sort((n, m) => (n > m ? -1 : 1)))

const arr2 = [6, 7, 8, 9, 10]

console.log(arr2.slice().sort((n, m) => (n > m ? -1 : 1)))
console.log(arr2)
