/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"



function shortcut(words) {
    var re= /a|e|i|o|u/g;
    var words = 'goodbye'|'nodegirls'|'how are you today'| 'hat';
    var vowels = words.replace((words-re), " ");
    console.log(vowels);
}



  var re = (/apples|are/gi);
         var str = "Apples are round, and apples are juicy.";
         var newstr = str.replace(re, "orange", "is");
         
         console.log(newstr );
         

var words = ['goodbye', 'nodegirls', 'how are you today', 'hat'];

function shortcut(words) {
    for (var word = 0; word < words.length; word++) {
        for (var word = 0; word< words.length; word++) {
            if ((words[word]) === "a" || (words[word]) === "e" || (words[word]) === "i" || (words[word]) === "o" || (words[word]) === "u") {
                var words = words[word].replace(words[word], "");
                

            }
        }

    }
   
}
console.log(shortcut(words));


var word = ("goodbye")

function shortcut2(word) {
    var result = word.replace("o", "", "gi");
    return result;
}
*/

function shortcut(word) {
    var word = "";
    for (var word = 0; word < word.length; word++) {
        if (words[word] === "o") {
            result.push(word);
        }
        if (words[word] === "e") {
            result.push(word);
        }
        return result;
    }
}

console.log(shortcut("goodbye"));
