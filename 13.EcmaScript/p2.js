// re assignment  to const

const num = 10;

console.log(`before = `, num)

try {
    num  = 20;
} catch (error) {
    console.log(error)
}
console.log(`after = `, num)