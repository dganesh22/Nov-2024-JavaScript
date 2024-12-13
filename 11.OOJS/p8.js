// Object.assign(src,dst)

// it merges the common properties from src to dst object

let u1 = {
    name: "David",
    email: "david123@gmail.com"
}

let u2 = {
    email: "david@ymail.com",
    age: 20
}

console.log(`u1 =`, u1)
console.log(`u2 =`, u2)

let res= Object.assign(u1,u2)
console.log(`res = `, res)