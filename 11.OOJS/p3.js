// object inheritance

let u1 = {
    name: "Henry",
    email: "henry@gmail.com"
}

let u2 = Object.create(u1, {
    mobile: {
        value: "8855996655"
    },
    isUser: {
        value: true
    }
})

let u3 = Object.create(u2, {
    age: {
        value: 24
    },
    city: {
        value: "bengaluru"
    }
})

console.log(`u1 = `, u1)
console.log(`u2 = `, u2)
console.log(`u3 = `, u3)