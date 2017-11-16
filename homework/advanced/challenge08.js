/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/

//BOTH OF THE GIRLS OWE NADIA

function oweEach (kettle,mug) {
	var sumOwe = (kettle + mug * 3)/3;
	return sumOwe;
}

console.log('Each girl owes Nadia ' + oweEach(5,2));


function oweTotal (kettle,mug) {
	var sumOwe = (kettle + mug * 3)/3*2;
	return sumOwe;
}

console.log('Both girls owe Nadia' + oweTotal(5,2));