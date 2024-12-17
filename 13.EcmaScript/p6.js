
// Rest Operator ... = parameter to array

function sum(...x) {
    console.log(`val =`, x) // array format
}

sum(10,20,30,40,50,60,70,80,90,100)


console.log(`\n`)

// Spread operator ... = array to parameter

function findmax(x) {
    console.log(`num = `, x) //array
    console.log(`parameter num = `, ...x) // parameter
    let res = Math.max(...x)
    console.log(`max num = `,res)
}

findmax([10,20,30,40,50,60,70,80,90,100])