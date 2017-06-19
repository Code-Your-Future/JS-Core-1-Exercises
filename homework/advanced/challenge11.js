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
var bank = {
    accounts: [
        {
            name: "john",
            balance: 200
        },
        {
            name: "ferguson",
            balance: 100
        }
    ],
    Total: function () {
        var total = 0;
        for (var i = 0; i < this.accounts.length; i++) {
            total += this.accounts[i].balance;
        }
        return total
    },
    Largest: function () {
        var largest = 0;
        for (var i = 0; i < this.accounts.length; i++) {
            if (largest < this.accounts[i].balance) {
                largest = this.accounts[i].balance;
            }
        }
        return largest
    },
     Average: function () {
        var average = 0;
        for (var i = 0; i < this.accounts.length; i++) {
           average += this.accounts[i].balance;
        }
        return average/this.accounts.length
    },
    Interest: function () {
        var interest = 0;
        for (var i = 0; i < this.accounts.length; i++) {
           this.accounts[i].balance = this.accounts[i].balance*1.1;
        }
        
    }

};


console.log(bank.Total());
console.log(bank.Largest());
console.log(bank.Average());
bank.Interest();
console.log(bank.Largest());