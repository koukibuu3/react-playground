type Resident = {
  familyName: string
  lastName: string
  mon?: Resident
}

const getMonName = (resident: Resident): string => resident.mon!.lastName

const patty2 = { familyName: 'Hope-Rabbit', lastName: 'patty' }
getMonName(patty2)
