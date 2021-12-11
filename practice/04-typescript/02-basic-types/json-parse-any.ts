{
  const str = `{ "id": 1, "username": "patty" }`
  const user = JSON.parse(str)

  console.log(user.jd, user.address.zipCode)
}
