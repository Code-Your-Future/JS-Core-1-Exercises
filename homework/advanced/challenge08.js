/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/

var kettlePrice;
var mugPrice;
var suziemoney;

function suziePayback(kettlePrice,mugPrice) {

    var share = (kettlePrice + (3*mugPrice))/3;

    return suziemoney = 2*share;


}

console.log("Suzie owes " + Math.floor(suziePayback(6,8))+ " £ to Nadia and Katrina");
console.log("Suzie owes " + Math.floor(suziePayback(25,9)) + " £ to Nadia and Katrina");
console.log("Suzie owes " + Math.floor(suziePayback(19,51)) + " £ to Nadia and Katrina");
console.log("Suzie owes " + Math.floor(suziePayback(7,16)) + " £ to Nadia and Katrina");


