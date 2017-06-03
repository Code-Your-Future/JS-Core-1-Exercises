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
var bank ={
  accounts:[
              {
                name: "Mohammed",
                balance: 50000
              },
              {
                name: "Ahmed",
                balance: 5000
              }
          ],
  sum : function() {
      var balanceOne = this.accounts[0].balance;
      var balanceTwo = this.accounts[1].balance;
      return "Total balance is "+ (balanceOne + balanceTwo);
  },
  largest : function () {
    if (this.accounts[0].balance > this.accounts[1].balance) {
      return "The highest balance is "+ this.accounts[0].balance;
    }else {
      return "The highest balance is "+this.accounts[1].balance;
    }
  },
  Average : function () {
    var balanceOne = this.accounts[0].balance;
    var balanceTwo = this.accounts[1].balance;
    return "The Average balance is "+ (balanceOne + balanceTwo)/(bank.accounts.length);
  }
};

console.log(bank.sum());
console.log(bank.largest());
console.log(bank.Average());
