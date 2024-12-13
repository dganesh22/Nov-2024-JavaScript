// re assigning the value to an object

let user = {}

Object.defineProperty(user, "name", {
    value: "mary",
    writable: true
})

/* writable - true (can re-assign/write) , false - (write protect/write disabled)  */

console.log(`before = `, user)

user.name = "Abhishek"

console.log(`after =`, user)