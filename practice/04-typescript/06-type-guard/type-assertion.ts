type User3 = {
  username: string
  address: {
    zipcode: string
    town: string
  }
}

const str3 = `{ "username": "patty", "town": "Maple Town" }`
const data3: unknown = JSON.parse(str3)
const user3 = data3 as User3

console.log(user3.address.town)
