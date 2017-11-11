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


var bill = [7.99, 6.99, 14.99, 4.99];

var numberOfFriends = 4;


function shareEqual(arr_bill, numOfFriends) {
    var total = 0;
    for (var i = 0; i < arr_bill.length; i++) {
        total += bill[i];
    }

    return total / numOfFriends
}

console.log("The amount of money to be shared is " + shareEqual(bill, numberOfFriends)); // Just to output an example






/* .................second method..................*/




var sum = bill.reduce(add, 0);

function add(acc, curr_val) {
    return acc + curr_val;
}

console.log("Each person should spend " + sum / numberOfFriends);





/*..........................Third method.................*/



function contribution(arr_bill, numOfFriends) {

    var sum = 0
    for (var i in arr_bill) {

        sum += arr_bill[i];

    }

    return sum / numOfFriends;



}

console.log("Each person should pay " + contribution(bill, numberOfFriends));
