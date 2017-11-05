/* Challenge 6: Vowel Remover (version 2)

Write a function `removeVowels` that takes an array of all the letters in the alphabet, and returns an array that removes all the vowels.

Start with an array of vowels:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Create an array of all letters:
var alphabet = ['a', 'b', 'c', 'd', ... 'y', 'z'];

Running your function by passing in `alphabet` should give you an array of all consonants.

removeVowels(alphabet) // --> ['b', 'c', 'd', 'f', ... 'y', 'z']

*/
    var vowels= ['a', 'e', 'i', 'o', 'u']
    var alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' , 'k', 'l' , 'm', 'n', 'o', 'p', 'q' , 'r', 's', 's', 't', 'v', 'w', 'x', 'y', 'z' ]
    function removeVowels(alphabet){
    for(var i = alphabet.length -1; i>= 0 ; i--){ 
    for(var j = 0; j <= vowels.length; j++) {
         if(alphabet[i]=== vowels[j]){
             alphabet.splice(i,1);
         }
    }
}
return alphabet;
}
console.log(removeVowels(alphabet));

