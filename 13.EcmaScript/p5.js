
// default parameters

function product(a,b=4) {
    return a * b
}

console.log(`product =`, product(10,20)) // 200
console.log(`product =`, product(10)) // NaN without default parameter