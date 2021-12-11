type E = { foo: number }
type F = { bar: string }
type G = {
  foo?: number
  baz: boolean
}

type EnF = E & F
type EnG = E & G
type GnEorF = G & (E | F)
