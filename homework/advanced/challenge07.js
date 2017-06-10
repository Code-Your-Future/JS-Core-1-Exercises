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

// pseudo code
//create a function
// loop through the array and add the total cost - array reduce
//divide the result to the number of friends
// return the result

var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;

function shareBill(_bill, _numberOfFriends) {
    var totalBill = _bill.reduce(function(accu, value) {
        return accu + value;
    });
    console.log(totalBill / _numberOfFriends);
}

shareBill(bill, numberOfFriends); //8.74