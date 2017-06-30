
// /*
// for(var i=1; i <=100; i=i+1) {
//         if(i % 2 === 0 ){
//         console.log(i);
//   }       
// }


// for(var i=1; i <=100; i=i+1) {
    
//     if(i % 15 ===0)
//     console.log("fizzbuzz")
//     else if(i % 3 === 0)
//     console.log("fizz")
//     else if (i % 5 === 0)
//     console.log("buzz")
//     else{
//         console.log(i)
//     }
    
// }





// function printThis (){
//     console.log("khaled");
// }


// prinThis();



// function asterrisk(){
//     var stringbox = "";
// for  ( var i = 1; i<=105; i++){
//     stringbox += "*";
//     console.log(stringbox);
// }
// }



// asterrisk();

// var name = "khaled";


// function printthat(text) {
// console.log("my name is " + text);
// }




// printthat(name);






// function printName(name, age, mentor ,animalType="human") {
//     console.log(name + " is a " +  mentor + "-" + age + " years " + " and they are " + animalType );
// }

// printName("Mozafer", "nine", "mentor");
// printName("Rares", 21, "student");
// printName('Will', 32, "mentor");



// function add(number1, number2, number3){
//     console.log(number1 + number2 + number3);
// }


// add(5);
// add(5, 7, 6);





// var result = "";

// for(var i=1; i <=10; i=i+1 ){
//     if(i===1) {
//         // console.log("*" )
//     }
//     result = "*" + result;
//     console.log(result);
// }


// for (var numberOfStars = 1; numberOfStars <= 10; numberOfStars++) {
// 	var result = "";
//     for(var spaces = 10; spaces>0; spaces--) {
//         if(spaces > numberOfStars) {
//             result += " ";
//         } else {
//             result += "*";
//         }
//     }
//     console.log(result);
// }

// */
// var counter = 0;
// for (var i = 10; i > 0; i--) {
// 	counter++;
// 	var result = "";
// 	for (var j = 0; j < i; j++) {
// 		result += " ";
// 	}
// 	for (var k = 0; k < counter; k++) {
// 		result += "*";
// 	}
// 	console.log(result);
// }


// var person = {
//         name: {
//             firstName: 'Khaled',
//             lastName: 'Bla'
//         },
//         age: 20,
//         height: 170
// };

// console.log(person.name.middleName);
// console.log(person.age);


// var names = [ 
//     "rares", "khaled", "mozafer"
// ];

// // console.log(names[1]);


// for(var i = 0; i<names.length; i++) {
//     console.log(names[i]);
// }






// // Write a for loop that prints out all the numbers between 1 and 100 divisble by 5.

// for (var i=0; i <= 100; i+=5){
//    console.log(i);
    
// }


// var haystack = ['hay', 'rabbit', 'hat', 'needle'];

// for(var i=0; i < haystack.length; i++ ){
//     // console.log(haystack[i]);
//     if (haystack[i] === "needle"){
//         console.log("Found the needle at position" + i);
//     }
// }


//console.log("%s this is %s and %s", Array(12 + 1).join(" "), foo, bar);
// String.prototype.repeat = function(length) {
//  return Array(length + 1).join(this);
// };
// console.log("%s this is %s and %s", " ".repeat(12), foo, bar);

// console.log("this is %s and %s", foo, bar);



// for(var i=1; i <=100; i=i+1) {
    
//     if(i % 15 ===0)
//     console.log("fizzbuzz")
//     else if(i % 3 === 0)
//     console.log("fizz")
//     else if (i % 5 === 0)
//     console.log("buzz")
//     else{
//         console.log(i)
//     }
    
// }

// var x = Math.pow(2,3);
// console.log(x);

var animals = ["tiger", "puppy", "snake", "llama"];

for (i=0; i < animals.lenght; i++){
console.log(animals[i]);
}



// function exp(base, exponent) {
//   exponent = Math.round(exponent);
//   if (exponent == 0) {
//     return 1;
//   }
//   if (exponent < 0) {
//     return 1 / exp(base, -exponent);
//   }
//   if (exponent > 0) {
//     return base * exp(base, exponent - 1)
//   }
// }


// var x= exp(2, 3)
// console.log(x);


// function celebrityName (firstName) {
// 	    var nameIntro = "This celebrity is ";
// 	    // this inner function has access to the outer function's variables, including the parameter​
// 	   function lastName (theLastName) {
// 	        return nameIntro + firstName + " " + theLastName;
// 	    }
// 	    return lastName;
// 	}
// 	​
// 	​var mjName = celebrityName ("Michael"); 

//     console.log(mjName);


console.log(this);