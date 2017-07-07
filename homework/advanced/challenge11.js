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
    acounts: [
        {
            name: "Harvey",
            balance: 1000
        },
        {
            name: "Mike",
            balance: 900
        },
        {
            name: "Jeniffer",
            balance: 6000
        }
    ],
}

function total() {
    var total = 0;
    for (var i = 0; i < bank.acounts.length; i++) {
        total += bank.acounts[i].balance;
    }
    return total
}

console.log(total())

function Largest() {
    var largest = 0;
    for (var i = 0; i < bank.acounts.length; i++) {
        if (largest < bank.acounts[i].balance) {
            largest = bank.acounts[i].balance;
        }
    }
    return largest
}

function Average() {
    var average = 0;
    for (var i = 0; i < bank.acounts.length; i++) {
        average += bank.acounts[i].balance;
    }
    return average / bank.acounts.length
}

function Interest() {
    var interest = 0;
    for (var i = 0; i < bank.acounts.length; i++) {
        return bank.acounts[i].balance = bank.acounts[i].balance * 2;
    }
}
console.log(Largest())
console.log(Average())
console.log(Interest())
