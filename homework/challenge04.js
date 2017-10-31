/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

Vowels in English: a, e, i, o, u

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/


function shortcut(string) {
	console.log(string.replace(/a|e|i|o|u/gi, ""));
}

shortcut("how are you today?");