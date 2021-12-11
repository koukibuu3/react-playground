const rate: { [unit: string]: number } = {
  USD: 1,
  EUR: 0.9,
  JPY: 108,
  GBP: 0.8,
}

type Unit3 = keyof typeof rate
type Currency2 = {
  unit: Unit3
  amount: number
}

const Currency2 = {
  exchange: (currency: Currency2, unit: Unit3): Currency2 => {
    const amount = (currency.amount / rate[currency.unit]) * rate[unit]

    return { unit, amount }
  },
}

export { Currency2 }
