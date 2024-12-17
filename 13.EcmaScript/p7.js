// generator function

function *display() {
    yield "red";
    yield "blue";
    yield "green";
    yield "white";
}

console.log(`call =` ,display())

let out = display()

// console.log(`first item =`, out.next())
// console.log(`second item =`, out.next())
// console.log(`third item =`, out.next())
// console.log(`fourth item =`, out.next())


console.log(`\n`)

console.log(`value =`, out.next().value)