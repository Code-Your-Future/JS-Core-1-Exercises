/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/



function shortcut(str) {

	return str.replace(/a|e|i|o|u/gi, "");
}


console.log(shortcut("Hello codeyourfuture"));