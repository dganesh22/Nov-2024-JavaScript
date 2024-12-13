// Object.freeze(obj) = it makes entaire object write protect

let user = {
    name: "mary",
    age: 20,
    city: "mumbai"
}

console.log(`before =`, user)

Object.freeze(user)

user.name = "john"
user.age = 24
user.city = "delhi"

console.log(`after =`, user)