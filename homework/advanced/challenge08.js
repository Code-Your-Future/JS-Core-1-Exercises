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
var numberOfFriends = 3;
var calculateBill = function (kettle, mug) {

    totalPrice = (kettle + mug * 3)
    var contribute = totalPrice / numberOfFriends;
    return contribute;
}
console.log(calculateBill(10, 5));
console.log(calculateBill(20, 10));