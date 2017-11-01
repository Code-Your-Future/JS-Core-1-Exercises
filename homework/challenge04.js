/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/

function shortcut(aString) {
    return aString.replace(/a|e|i|o|u/g, '');
  }
  console.log(shortcut('miran is a student'));
  
  