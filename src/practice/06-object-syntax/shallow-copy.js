const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
}

const rolley = { ...patty, name: 'Rolley Cocker' }
rolley.email = 'rolley@palm.rown'
rolley.address.town = 'Palm Town'

console.log(patty)
