// static methods 

class Product {
    constructor(a,b) {
        console.log(`constructor called`)
        this.x = a;
        this.y = b;
    }

    static solve() {
        console.log(`static method ${this.x} and ${this.y}`)
    }

    print() {
        console.log(`non-static method ${this.x} and ${this.y}`)
    }
}

/* 
    1. static method is also method of a class
    2. we cann't call static method with ref
    3. we can call static method only by Class name
*/

let p1 = new Product(25,20); // ref creation constructor called
p1.print()

Product.solve()