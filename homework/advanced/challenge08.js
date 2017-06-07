/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/


var totalPrice = 0;
var mugsCost = 0;
var price = function(mugCost,kettleCost){
    mugsCost = Math.abs(mugCost*3);
    totalPrice = mugsCost + Math.abs(kettleCost);
return Math.round(totalPrice/3*100)/100;
}


console.log(price(85,3));
console.log(price(-67,2));
console.log(price("s",7));