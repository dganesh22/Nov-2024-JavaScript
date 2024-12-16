
// parameter classes

class Calc {
    constructor(a,b) {
        this.x = a;
        this.y = b;
    }

    sum() {
        document.write(`<h1> sum = ${ this.x + this.y } </h1>`)
    }

    product() {
        return this.x * this.y;
    }
}

// instance
let c1 = new Calc(10,20);

console.log(`c1 = `, c1)
c1.sum()

console.log(`product =`, c1.product())