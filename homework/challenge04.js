/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
var shortcut = 'how are you today?';
function removeVowels(staff) {
  var vowels = staff.replace(/a/gi, "").replace(/e/gi, "").replace(/i/gi, "").replace(/o/gi, "").replace(/u/gi, "");
  return vowels;
}
console.log(removeVowels(shortcut));
