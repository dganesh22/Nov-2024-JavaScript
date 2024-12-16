// non-parameter constructor

function Product() {
    this.a = 10;
    this.b = 20;

    this.calc = function() {
        document.write(`<h2> product = ${this.a * this.b} </h2>`)
    }
}

let p1 = new Product()

p1.calc()

/* 
    1. parameter constructor - to calculate the area of circle 
        radius
        pi = Math.PI
*/