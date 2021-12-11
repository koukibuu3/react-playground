type Species3 = 'rabbit' | 'bear' | 'fox' | 'dog'

class Resident {
  name = ''
  age = 0
  species: Species3 | null = null
}

export type { Species3, Resident }
