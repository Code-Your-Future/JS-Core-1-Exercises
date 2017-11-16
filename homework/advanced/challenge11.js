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
			name: "Robertson",
			balance: 2594,
		},
		{
			name: "Wall",
			balance: 9974,
		}
		],
	total: function() {
		var totalBalance = 0; 
		for (var i = 0; i < this.accounts.length; i++) {
			totalBalance += this.accounts[i].balance;
		}
		return totalBalance;
	},
	largest: function() {
		for (var i =0; i < this.accounts.length; i++) {
			var max = Math.max(this.accounts[i].balance);
		}
		return max;
	},
	average: function() {
		var totalBalance = 0; 
		for (var i = 0; i < this.accounts.length; i++) {
			totalBalance += this.accounts[i].balance;
			var average = totalBalance / (i+1);
		}
		return average;
	}
}

console.log(bank.total());
console.log(bank.largest());
console.log(bank.average());
