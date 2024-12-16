
class Course {
    constructor(val) {
        this.title = val;
        console.log(`constructor called`)
    }

    getTitle() {
        // non static
        document.write(`<h1> cousre title = ${this.title} </h1>`)
    }

    static getDetails(title,duration) {
        // static method
        document.write(`<h1> title = ${title} and duration = ${duration}months </h1>`)
    }
}

let p1 = new Course("ReactJS")
p1.getTitle()

Course.getDetails("Java",2)