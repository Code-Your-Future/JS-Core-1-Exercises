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
			propertyName: "House",
			balance: 300
		},
		{
			propertyName: "Appartment",
			balance: 200
		},
		{
			propertyName: "Shop",
			balance: 700
		}
	],
	total: function(){
		return this.accounts[0].balance + this.accounts[1].balance + this.accounts[2].balance;
	},
	largest: function(){
		var allBalancies = [];
		this.accounts.forEach(function(el){
			allBalancies.push(el.balance);
		});
		return allBalancies.sort(function(a, b){return b - a})[0];
	},
	average: function(){
		return (this.accounts[0].balance + this.accounts[1].balance + this.accounts[2].balance) / 3;
	}
}

console.log(bank.total());
console.log(bank.largest());
console.log(bank.average());
