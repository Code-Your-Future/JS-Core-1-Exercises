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

function Bank () {
    this.accounts = [];
}

Bank.prototype.addAccount = function (accountName, accountBalance){
    this.accounts.push({name: accountName, balance: accountBalance});
};

Bank.prototype.total = function(){
    var sum = 0;
    for (var i = 0; i < this.accounts.length; i++){
        sum += this.accounts[i].balance;
    }
    return sum;
};

Bank.prototype.largest = function () {
    var large = 0;
    for (var i = 0; i < this.accounts.length; i++){
        if (this.accounts[i].balance > large) {
            large = this.accounts[i].balance;
        }
    }
    return large;
};

Bank.prototype.avarage = function (){
    return this.total() / this.accounts.length;
};

myBank = new Bank();

myBank.addAccount("HSBC", 123);
myBank.addAccount("TSB", 234);

console.log(myBank);
console.log("Total: " + myBank.total().toLocaleString("en-GB", {style: "currency", currency: "GBP"}));
console.log("Largest: " + myBank.largest().toLocaleString("en-GB", {style: "currency", currency: "GBP"}));
console.log("Avarage: " + myBank.avarage().toLocaleString("en-GB", {style: "currency", currency: "GBP"}));

