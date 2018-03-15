/* Challenge 7: Splitting the bill

Four friends went to dinner together. They agreed to split the bill evenly
between them. This is the bill:

Spaghetti - £7.99
Soup - £6.99
Sandwich x2 - £14.99
Coke x3 - £4.99

Write a function that will accept two arguments. The first argument is an array
of the item costs from the bill:

var bill = [7.99, 6.99, 14.99, 4.99];

The second argument is the number of friends:

var numberOfFriends = 4;

The function should return how much each friend should contribute to the bill.

**Extra credit**: How much should each friend pay if they want to add a 10% tip?
*/
var bill = [
  {
    foodName: "Spaghetti",
    howMany: 1,
    cost: 7.99
  },
  {
    foodName: "Soup",
    howMany: 1,
    cost: 6.99
  },
  {
    foodName: "Sandwich",
    howMany: 2,
    cost: 14.99
  },
  {
    foodName: "Coke",
    howMany: 3,
    cost: 4.99
  }
];
var numberOfFriends = 4;
function howManyPay(num, bill) {
  var total = 0;
  for (i = 0; i < bill.length; i++) {
    total = total + bill[i].howMany * bill[i].cost;
  }
  return total / num;
}
console.log("Each firend have to pay : ", howManyPay(numberOfFriends, bill));
console.log(
  "Each firend have to pay for tip: ",
  howManyPay(numberOfFriends, bill) / 10
);
