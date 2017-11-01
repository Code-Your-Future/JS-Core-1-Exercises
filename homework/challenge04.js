/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/



function shortcut(str) {

	console.log(str.replace(/a|e|i|o|u/gi, ""));
}


shortcut("Hello codeyourfuture");