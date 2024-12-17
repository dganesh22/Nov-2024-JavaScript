/* 
    block binding or Scope of the variable

    var  - global scope
    let  - block scope (allow to re-assign the value)
    const - block scope (fixed)
*/

 if(true) {
    var x = 120;
    console.log(`block scope =`,x);
 }

 console.log(`global scope =`, x)

 console.log(`\n`)

 /* try catch block => exception (run time error) handling */
try {
    if(true) {
        let y = 300;
        console.log(`block scope y =`, y)
     }
     console.log(`global scope y =`, y)
} catch (error) {
    console.log(error)
}

console.log(`\n`)

try {
    if(true) {
        const z = 240;
    console.log(`block scope z =`, z)
    } 
    console.log(`global scope z =`, z)
} catch (error) {
    console.log(error)
}