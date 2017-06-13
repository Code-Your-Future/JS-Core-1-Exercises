/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet,
 and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',  'y', 'z'];
// removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

// function removeVowels(alphabet){
//   var  newAlphabet=[];
//     for(i = 0; i <alphabet.length; i++){
//       for(j = 0; j <vowels.length; j++){
//         if(alphabet[i]===vowels[j]){

//         }
//       }
        
//         if(alphabet[i]=="a"){

            
//        }
//     }
// }



//YEY - take a list letters -> function removeVowels(letters) {   }
// YAY create an empty list(array)
// YEY go through each letter -> for loop
  // YAY test if the letter is not 'a'
    // if its not equal to 'a', add the current letter to our empty list
//YEY - give back the list with remaining letters
var myLetters = ['a', 'b', 'c', 'd', 'f'];

var result = removeVowels(myLetters);
 console.log(result);

function removeVowels(letters){
  var noVowels=[];
  for(i =0; i <letters.length; i++){
    if(letters[i]!=="a"){
      var currentLetter = letters[i];
       noVowels.push( currentLetter );
    }
  }
 return noVowels; 
}

 //var myLetters = ['a', 'b', 'c'];

// // console.log(  myLetters[1]  );

// for(var i =0; i<myLetters.length; i++) {
//   console.log(myLetters[i]);
// }

// console.log(result);

