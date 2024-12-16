// method override

class Course {
    constructor(ti) {
        this.title = ti;
    }

    getData() {
        console.log(`course is `, this.title)
    }
}

class Student extends Course {
    constructor(a,b) {
        super(a);
        this.duration = b;
    }

    getData() {
        super.getData(); // to call super class methods
        console.log(`course duration =`, this.duration)
    }
}

let x = new Student("ReactJS", 2)
console.log(`x =`, x)
x.getData()// student method
