/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/
var kettleCost = 14.99;
var mugCost = 1.49;
function suzieOrKarinaOwe() {
  return (kettleCost + mugCost * 3) / 3;
}
console.log(
  "Katrina or Suzie has to pay to Nadia :",
  Math.round(suzieOrKarinaOwe() * 100) / 100,
  "pound"
);
