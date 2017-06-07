/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/



// var result = [];
// function removeVowels(alphabet) {
// 	for (var i = 0; i < alphabet.length; i++) {
// 		if (!((alphabet[i] === "o") || (alphabet[i] === "e") || (alphabet[i] === "a") || (alphabet[i] === "u") || (alphabet[i] === "i")
// 			|| (alphabet[i] === "O") || (alphabet[i] === "E") || (alphabet[i] === "A") || (alphabet[i] === "U") || (alphabet[i] === "I")))            
// 			array_result.push(alphabet[i]);	
//             console.log(reuslt);
// 	}	
// }
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'b', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// removeVowels(alphabet);


//********************************************************************************************************************** */

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'b', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var result = alphabet.filter(function(alphabets){
//     return ((alphabets !== 'a' ) && (alphabets !== 'e' ) && (alphabets !== 'i' ) && (alphabets !== 'o' ) && (alphabets !== 'u' ))
// })

//********************************************************************************************************************** */

// I have tired to achive the same result using map fucntion but it didn't work

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'b', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var result = alphabet.map(function(alphabets){
       if ((alphabets !== 'a' ) && (alphabets !== 'e' ) && (alphabets !== 'i' ) && (alphabets !== 'o' ) && (alphabets !== 'u' ) ){
          return alphabets}
    
          else {alphabets ==="" }
        } 
          
          ) 

           console.log(result)
                                 
 
   





