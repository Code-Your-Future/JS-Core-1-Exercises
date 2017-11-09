/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/


// 3 girls: nadia, suzie, katrina
// 1 kettle
// 3 mugs
// kettle price / 3


function payBack(kettlePrice, mugPrice) {
	return (kettlePrice + mugPrice * 3) / 3 

}

console.log("Suzie owe to Katrina: " + payBack(15, 5) + "$");
