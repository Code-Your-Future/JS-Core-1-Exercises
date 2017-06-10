/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/
function shortcut(letters) {
    //console.log(letters);
    var vowels = ['a','e','i','o','u'];
    var newLetters = "";
    for (var i=0; i < letters.length; i++) {
        var currentLetter = letters.charAt(i);
        var vowelIndex = vowels.indexOf(currentLetter);
        if(vowelIndex < 0){
            newLetters += currentLetter;
        } else if (vowelIndex >= 0 && currentLetter !== currentLetter.toLowerCase()) {
            newLetters += currentLetter;
        }
    }
    console.log(newLetters);
}

shortcut("goodbye");
shortcut("gOodbye");
shortcut("how are you today ?")
shortcut("nodegirls");