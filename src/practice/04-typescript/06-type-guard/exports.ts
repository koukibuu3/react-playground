type Species = 'rabbit' | 'bear' | 'fox' | 'dog'

interface Resident2 {
  name: string
  age: number
  species: Species2
}

const isCanine = (resident: Resident2): boolean =>
  ['dog', 'fox'].includes(resident.species)

export { Species, Resident2, isCanine }
