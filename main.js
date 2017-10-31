/*
  We will use this file to add the Code that you will learn in JS-Core Class 1
  Update this file, then run it from the console using the command:

      node class-exercises.js
*/

console.log('Hello World');


/*----------------------------------------------------------------------------------------------------------------
 * ---------------------------------  Challenge01              --------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------------------*/
var writers = [
    {
        firstName: "Virginia",
        lastName: "Woolf",
        occupation: "writer",
        age: 59,
        alive: false
    },
    {
        firstName: "Zadie",
        lastName: "Smith",
        occupation: "writer",
        age: 41,
        alive: true
    },
    {
        firstName: "Jane",
        lastName: "Austen",
        occupation: "writer",
        age: 41,
        alive: false
    },
    {
        firstName: "bell",
        lastName: "hooks",
        occupation: "writer",
        age: 64,
        alive: true
    },
];

for (var i = 0; i < writers.length; i++){
        console.log('Hi, my name is ' + writers[i].firstName + ' ' + writers[i].lastName + '. I am ' + writers[i].age + ' years old, and work as a ' + writers[i].occupation + '.')
}


/*If you want an extra challenge, only `console.log()` the writers that are alive.*/


for (var i = 0; i < writers.length; i++){
    if(writers[i].alive === true){
        console.log('Hi, my name is ' + writers[i].firstName + ' ' + writers[i].lastName + '. I am ' + writers[i].age + ' years old, and work as a ' + writers[i].occupation + '.')
    }
}


/*----------------------------------------------------------------------------------------------------------------
 * ---------------------------------  Challenge02              -----------------------------------------------
 * --------------------------------------------------------------------------------------------------*/


for(var i = 1; i<= 100; i++){
        if( i % 3 === 0  &&  i % 5 === 0){
                console.log('FizzBuzz');
        }else if( i % 3 === 0){
                console.log('Fizz');
        }else if( i % 5 === 0){
                console.log('Buzz');
        }else{
                console.log(i);
        }
}


/*----------------------------------------------------------------------------------------------------------------
 * ---------------------------------  Challenge03              ----------------------------------------------
 * --------------------------------------------------------------------------------------------------*/
var haystack = ['hay', 'rabbit', 'needle', 'hat'];

function findNeedle(){
        for (var x = 0; x <= haystack.length; x++){
                if(haystack[x] === 'needle'){
                        console.log('Found the needle at position ' + x);
                }
        }
}

findNeedle();


/*----------------------------------------------------------------------------------------------------------------
 * ---------------------------------  Challenge04              -------------------------------------------------
 * --------------------------------------------------------------------------------------------------*/
function shortcut(x){
        console.log(x.replace(/[aeouiy]/gi, ''));
}
shortcut("goodbye");


/*----------------------------------------------------------------------------------------------------------------
 * ---------------------------------  Challenge05              -------------------------------------------------
 * --------------------------------------------------------------------------------------------------*/
function stringy(s) {
        var y = '';
        for (var i = 1; i <= s; i++)  {
                y += i % 2;
        } 
        return y;
}
var resultat = stringy(5);
console.log(resultat);


/*----------------------------------------------------------------------------------------------------------------
 * ---------------------------------  Challenge06              -------------------------------------------------
 * --------------------------------------------------------------------------------------------------*/
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'b', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
function removeVowels() {
        for(var i = 0; i < alphabet.length; i++){
                for(var j = 0; j < vowels.length; j++)
                        if(vowels[j] ===  alphabet[i]){
                                 alphabet.splice(i, 1);
                        }
        }
}

removeVowels();
console.log(alphabet);







