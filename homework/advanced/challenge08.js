/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/

    
function moneyOweToNadia(kettle, mugs){
      var priceOfStuffs = kettle + (3 * mugs);
      return priceOfStuffs * (2/3);
} 

var moneyOweToNadiaArray = [];

var moneyOwe = moneyOweToNadia(6, 4);
moneyOweToNadiaArray.push(moneyOwe);

var moneyOwe = moneyOweToNadia(20, 4);
moneyOweToNadiaArray.push(moneyOwe);

var moneyOwe = moneyOweToNadia(7, 13.89);
moneyOweToNadiaArray.push(Math.floor(moneyOwe));

var moneyOwe = moneyOweToNadia(8.33, 55.89);
moneyOweToNadiaArray.push(Math.floor(moneyOwe));

var moneyOwe = moneyOweToNadia(4.23, 6.89);
moneyOweToNadiaArray.push(Math.floor(moneyOwe));

console.log(moneyOweToNadiaArray);