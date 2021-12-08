type Flatten<T> = T extends Array<infer U> ? U : T

const num = 5
const arr4 = [3, 6, 9]
type H = Flatten<typeof arr>
type N = Flatten<typeof num>
