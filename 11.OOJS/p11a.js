// Inheritance using __proto__

let u1 = {
    name: "sam",
    email: "sam@gmail.com"
}

let u2 = {
    age: 22,
    mobile: "9988774455",
    __proto__:u1
}

console.log(`u2 =`, u2)

let u3 = {
    city: "bengaluru",
    state: "karnataka",
    __proto__: u2
}

console.log(`u3 =`, u3)