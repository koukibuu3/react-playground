const foo3: unknown = '1,2,3,4'

if (typeof foo3 === 'string') {
  console.log(foo3.split(','))
}

console.log(foo3.split(','))
