// method overloading - same method and difference in parameter

class Sum {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    solve(c) {
        return  this.a * this.b * c;
    }
}

class Calc extends Sum {
    constructor(p,q,r) {
        super(p,q)
        this.c = r;
    }

    solve(d,e) {
        return `${super.solve(this.c)}` * d * e;
    }
}

let x = new Calc(1,2,3)

document.write(`<h1> sum = ${x.solve(4,5)} </h1>`)