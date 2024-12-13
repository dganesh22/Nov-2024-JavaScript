// Object.defineProperty(obj,key,value)

/* is used to add single property(key:value) pair to an object externally */

let car = {};

console.log(`car =`,car)

Object.defineProperty(car, "title", {
    value: "Mahindra Thar"
})
Object.defineProperty(car, "color", {
    value: "red"
})
Object.defineProperty(car, "make", {
    value: 2024
})

console.log(`after =`, car)