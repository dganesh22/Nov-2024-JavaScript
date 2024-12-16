
// class inheritance

class SuperClass {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    getUser() {
        console.log(`name =`, this.name)
        console.log(`email =`, this.email)
    }
}

class BaseClass extends SuperClass{
    constructor(na,em) {
        super(na,em); // superclass constructor
    }
}

let b1 = new BaseClass("Abhishek", "abhishek@gmail.com")

console.log(`b1 =`,b1)
b1.getUser()