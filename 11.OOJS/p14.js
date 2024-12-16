// prototype keyword

function Car() {
    
}

// Constructor.prototype.property = value;
Car.prototype.title = "Mahindra Thar";
Car.prototype.color = "red";
Car.prototype.make = 2024;
Car.prototype.getCarInfo = function() {
    document.write(`<h1>Car title = ${this.title} and color = ${this.color} and make year = ${this.make} </h1>`)
};

let p1 = new Car()
console.log(`p1 =`, p1)

p1.getCarInfo()