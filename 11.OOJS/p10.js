// Object.entries(obj) => convert the object into entries (key => value) array of array 
// object => { key:value }

let car = {
    title: "Innova",
    company: "toyota",
    make: 2024,
    color: "silver"
}

console.log(`car = `, car)

let out = Object.entries(car);

console.log(`enteries = `, out) // entries array of array

// to entries
let en  = new Map(out);
console.log(`map constructor entries =`, en)

// entries to object coversion
let res = Object.fromEntries(en)
console.log(`object=`, res)