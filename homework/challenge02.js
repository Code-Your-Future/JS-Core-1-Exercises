/* Challenge 2: FizzBuzz

Write a for loop that prints the numbers from 1 to 100. But for multiples of 3 print “Fizz” instead of the number and for the multiples of 5 print “Buzz”. For numbers which are multiples of both 3 and 5 print “FizzBuzz”.

Counting to 15 should look like this:

1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'FizzBuzz'
13
14
'FizzBuzz'

*/


for(var i=1; i <= 200; i++ ) {
    var j = i % 3;
    var k = i % 5;

    if (j == 0 && k == 0) {
        console.log("FizzBuzz");
    }
    else if(j == 0) {
        console.log("Fizz");
    }

    else if (k == 0) {
        console.log("Buzz");
    }

    

    else {
        console.log(i)
    }
}
