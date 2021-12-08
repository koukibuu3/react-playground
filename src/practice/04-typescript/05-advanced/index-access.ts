const permissions2 = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
} as const

type PermsChar2 = keyof typeof permissions2
type PermsNum2 = typeof permissions2[PermsChar2]

type ValueOf<T> = T[keyof T]
type PermsNum = ValueOf<typeof permissions2>

const species2 = ['rabbit', 'bear', 'fox', 'dog'] as const
type Species2 = typeof species2[number]
