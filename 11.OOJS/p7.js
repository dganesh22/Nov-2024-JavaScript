// Object.defineProperties(obj,{ prop,value }) with writable property

let user = {}


Object.defineProperties(user, {
    name: {
        value: "david",
        writeable: true,
    },
    email: {
        value: "david@gmail.com",
        writable: true
    },
    mobile: {
        value: "9966885544",
        writable: false
    },
    age: {
        value: 24,
        writable: true
    },
    city: {
        value: "bengaluru",
        writable: false
    },
    getName: {
        value: function() {
            document.write(`<h3> Hi, ${this.name} welcome to js </h3>`)
        },
        writable: false
    }
});

console.log(`before =`, user)

user.name = "henry"
user.email = "henry@gmail.com"
user.mobile = "9966885544"
user.age = 27
user.city = "mangaluru"

console.log(`object user =`, user)

document.write(`<h3> user email = ${user.email} </h3>`)
document.write(`<h3> user city = ${user["city"]} </h3>`)
user.getName()