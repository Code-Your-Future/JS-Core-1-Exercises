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

for (a = 1; a <= 100; a++) {
if (a % 3 === 0 && a % 5 ===0)
console.log("fizzbuzz")
else if(a % 5 ===0)
console.log("buzz")
else if (a % 3===0)
console.log("fizz")
else
console.log(a)
};