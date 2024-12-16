// class
/* class is group of objects
    Objects 
        group of properties
        group of methods
*/

class User {
    constructor() {
        // default constructor
        // properties
    this.name = "John";
    this.age = 22;
    this.isUser = false;
    this.hobbies = ["cycling", "riding", "driving"];
    this.bank = {
        title: "SBI",
        account: 12354
    };
    }

    // method
    getUserInfo() {
        document.write(`<h1> username is ${this.name} </h1>`)
    }

    getUserAge() {
        return this.age;
    }
}

let u1 = new User();

console.log(`user ref =`, u1)

u1.getUserInfo()

document.write(`<h3> age = ${u1.getUserAge()} </h3>`)
document.write(`<h3> isUser = ${u1.isUser} </h3>`)


/* 
    Car - 
        title
        color
        make
    getCarTitle()
    getCarColor()
    getCarMake()
*/