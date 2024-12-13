
// object methods

// Object.create()

let user = {
    name: "Abhishek",
    email: "abhishek@gmail.com"
}

console.log(`before =`, user)

// it will copy/clone the prototype of the object

let user1 = Object.create(user)
console.log(`new obj =`, user1)


console.log('\n')

// retrive the cloned object properties
let user2 = Object.getPrototypeOf(user1)
console.log(`get prototype output =`, user2)

// to update the new property into the cloned object
let user3 = Object.setPrototypeOf(user1, {
    name: "John",
    email: "john@gmail.com",
    mobile: "9988774455",
    age: 25
})

console.log(`set prototype =`, user3)