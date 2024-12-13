
// object oriented javascript
/* 
    object -> group of properties
        methods
    constructor
        methods
    class
*/

let user = {
    name: "John",
    age: 22,
    isUser: true,
    hobbies: ["riding", "driving", "cycling"],
    bank: {
        name: "Axis bank"
    },
    getUser: function() {
        return `My name is ${this.name}`
    },
    getAge: () => {
        // this pointer cann't access inside the arrow function
        document.write(`<h1> age is ${this.age} years </h1>`) // undefined
    }
}

console.log(`user =`, user)
console.log(`name = `, user.name)
console.log(`age = `, user['age'])

user.hobbies.forEach((item,index) => {
    document.write(`<h3> ${index} ${item} </h3>`)
});

document.write(`<h1> ${user.getUser()} </h1>`)

user.getAge()