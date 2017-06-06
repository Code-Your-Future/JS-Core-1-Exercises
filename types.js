/* 
One example for each
boolean
number
strings
typeof to verify answer



var Myname = "khaled"
console.log(Myname);
var Myname = "blue"
console.log(Myname);

console.log(typeof "true" , Myname);
console.log(typeof "true" + Myname);

console.log(typeof true);
console.log(typeof Myname + true);


var Myage = (6*"blue")

console.log (typeof ("5" + true));
console.log(typeof (5+5) == typeof (5 + 5));
console.log(typeof("My name is " + Myname + " and my age is " + Myage) + (" My name is " + Myname + " and my age is " + Myage));
console.log("my name is " + typeof(false));

 
 var myage= 22
 console.log("My age now is" + myage + "my age next year will be " + (myage + 1));




 var mentor = "will";
 var age = 40.1;
 if (age > 40) {
     console.log("you are wise")
 } else {
     console.log("you are young")
 }

 

var isHappy = true;

if (isHappy === true) {
    //If I am happy, print "Hello World!"
    console.log(":) Yaaaaaaaaaaaaaay")
} else {
    // if I am sad, print a frown face
    console.log(':(');
}

  */




function evenOrOddAndPositiveOrNegative(number) {

    //   var myNumber = number;

    var result;
    if (number % 2 === 0) {
        // console.log("its even")
        result = "even";
    } else {
        // console.log("odd")
        result =  "odd";
    }

    if (number > 0) {
        // console.log("positive");
        result = result + " positive";
    } else {
       // console.log("negative");
        result = result + " negative";
    }

    return result;
}

var five = evenOrOddAndPositiveOrNegative(-4);

console.log("Your result is: " + five);

