// accessors get and set

class User {
    constructor() {
        this._name = ""; // alias property
    }

    set username(val) {
        this._name = val;
    }

    get username() {
        return this._name;
    }
}

let x = new User();

x.username = "Abhishek";
console.log(`user name is =`, x.username);