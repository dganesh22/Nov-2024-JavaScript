// Object.defineProperties(obj,{ prop,value })

let user = {}

console.log(`before =`, user)

Object.defineProperties(user, {
    name: {
        value: "david"
    },
    email: {
        value: "david@gmail.com"
    },
    mobile: {
        value: "9966885544"
    },
    age: {
        value: 24
    },
    city: {
        value: "bengaluru"
    },
    getName: {
        value: function() {
            document.write(`<h3> Hi, ${this.name} welcome to js </h3>`)
        }
    }
});

console.log(`object user =`, user)

document.write(`<h3> user email = ${user.email} </h3>`)
document.write(`<h3> user city = ${user["city"]} </h3>`)
user.getName()