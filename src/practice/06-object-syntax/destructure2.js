const response = {
  data: [
    { id: 1, name: 'Patty Rabbit', email: 'patty@maple.town' },
    { id: 2, name: 'Rolley Cocker', email: 'rolley@palm.town' },
    { id: 3, name: 'bobby Bear', email: 'bobby@maple.town' },
  ],
}

const { data: users = [] } = response
console.log(users)
