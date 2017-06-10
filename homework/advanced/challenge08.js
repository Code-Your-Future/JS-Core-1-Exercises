/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/

//pseudo code
// 1. write a function that accepts two inputs
// 2. divide the price of the kettle by 3 
// 3. add the price of the mug with #2
// 4. return the result of #3

var sharePrice = function(priceOfKettle, priceOfMug) {
    //to get the price each one owes and round the number to two decimal points
    var _priceOfKettle = parseFloat((priceOfKettle / 3).toFixed(2));
    return (_priceOfKettle + priceOfMug);
}

console.log(sharePrice(15, 5)); // £10 each
console.log(sharePrice(25.99, 3)); //£11.66 each
console.log(sharePrice(30.99, 7)); //£17.33 each