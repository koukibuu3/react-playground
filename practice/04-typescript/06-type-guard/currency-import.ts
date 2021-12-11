import { Currency2 } from './currency-export'

const dollars: Currency2 = {
  unit: 'USD',
  amount: 100,
}

console.log(dollars)
console.log(Currency2.exchange(dollars, 'JPY'))
