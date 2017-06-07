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
/*



var totalBill = [7.99, 6.99, 14.99, 4.99].reduce(function (a, b) { return a + b; });
var eachFriendPay = totalBill / numberOfFriends;
var serviceAdded = eachFriendPay * 0.10;
var superTotal = serviceAdded + eachFriendPay;
*/

var bill = [7.99, 6.99, 14.99, 4.99];
var numberOfFriends = 4;

function finalBill(bills) {
    var totalBill = 0;
    for (i = 0; i < bills.length; i++) {
            totalBill = totalBill + bills[i] ;
        }
        return (((totalBill / numberOfFriends) /100)*10)+(totalBill / numberOfFriends) ;
    }


    console.log(finalBill(bill));
/*

var bill = [7.99, 6.99, 14.99, 4.99].reduce(sum, 0);

function sum(a, b) {
    return a + b;
}

var superTotal = sum / nu
console.log(bill); */