// Constructor

/* 
    1.Constructor follows the function syntax
    2.Constructor first letter is uppercase
    3.Constructor property we create using "this" keyword
    4.To access the value of the properties of constructor is possible by creating ref to the constructor using new keyword
    5. Constructor will not return & it can be parameterised or non-param constructors
*/
// function Constructor(param) { body }
function Register(fname,fmail,fpass) {
    this.name = fname;
    this.email = fmail;
    this.password = fpass;
}

//ref
let user1 = new Register("Abhishek", "abhishek@gmail.com", "test123")

console.log(`ref =`, user1)

document.write(`<h1> username = ${user1.name} </h1>`)
document.write(`<h1> email = ${user1.email} </h1>`)
document.write(`<h1> password = ${user1.password} </h1>`)