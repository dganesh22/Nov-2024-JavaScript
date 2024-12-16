/* 
    wallet class
        balance - property
        methods 
            - debit(val) = to withdraw money
            - credit(val) = to deposit money
*/

class Wallet {
    constructor(bal) {
        this.balance = bal;
        document.write(`<h4 style="color:orange;"> Initial balance is = ${this.balance} </h4>`)
    }

    debit(val) {
        if(val) {
            if(val > this.balance) {
                document.write(`<h5 style="color:red;"> Insufficient balance </h5>`)
            } else {
                this.balance -= val;
                document.write(`<h5 style="color:red;"> Amount ${val} is debited to wallet and total balance is = ${this.balance} </h5>`);
            }
        }
    }

    credit(val) {
        this.balance += val;
        document.write(`<h5 style="color:green;"> Amount ${val} is credited to wallet and total balance is = ${this.balance} </h5>`);
    }
}

let w = new Wallet(1000);
console.log(`w = `,w)

w.credit(250)
w.debit(222.25);
w.debit(2000)

w.credit(375.35)