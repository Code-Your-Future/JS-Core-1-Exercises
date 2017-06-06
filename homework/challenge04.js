/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/




var str = 'hello world';
function removeVowels(pass) {
  newString = pass.replace(/[aeiou]/gi, '');
  console.log(newString);
}

removeVowels(str);
