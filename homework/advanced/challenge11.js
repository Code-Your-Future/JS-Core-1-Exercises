/*Challenge 9: Bank

Create an object called bank. It should have an accounts property that is an array of 
two objects with the properties name and balance.

Give you bank object the following functions:

- Total // sum of both accounts balances
- Largest // the value of highest balance
- Average // the average balance over all of your accounts

If you can think of any other functions that it would be useful for your bank to have 
then add them and test your answers on the console.
e.g you can add interest to all of your accounts.



*/

//Pseudo code
//1. create a bank object with an accounts property
// 1.1 create account as an array of two objects [{},{}]
//2. create total, largest and average functions as properties of the bank object
var temp = 0,
    _total;
var bank = {
    accounts: [{
            name: "kiya",
            balance: 1500
        },
        {
            name: "Jack",
            balance: 4000
        },
        {
            name: "Jaz",
            balance: 5000
        }
    ],
    total: function() {
        _total = 0;
        for (var x = 0; x < this.accounts.length; x++) {
            _total = _total + this.accounts[x].balance;
        }
        return _total;
    },
    largest: function() {
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].balance > temp) {
                temp = this.accounts[i].balance;
            }
        }
        return temp;
    },
    average: function() {
        return this.total() / this.accounts.length;
    },
    interest: function() {
        for (var i = 0; i < this.accounts.length; i++) {
            this.accounts[i].interest = this.accounts[i].balance * 0.05;
        }
    }
}
console.log(bank.total());
console.log(bank.largest());
console.log(bank.average());
bank.interest();
console.log(bank.accounts);