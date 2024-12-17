
// dead zone

if(true) {
   try {
     console.log(`value =`, val) // can't access before initialization
    let val = "Welcome"
   } catch (error) {
    console.log(error)
   }
}

console.log(`\n`)

try {
    for(let i=0;i<3;i++) {
        console.log(`i =`, i)
    }
    console.log(`outside i =`, i) // outside block throw error
} catch (error) {
    console.log(error)
}