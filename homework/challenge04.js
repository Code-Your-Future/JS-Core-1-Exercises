/* Challenge 4: Vowel Remover

Create a function called shortcut to remove all the lowercase vowels in a given string.

For example:

shortcut("goodbye")  // --> "gdby"
shortcut("nodegirls")  // --> "nd grls"
shortcut('how are you today?') // --> "hw r y tdy?"
*/



function shortcut(initialString) {
    var lowercaseVowls = ["a", "e", "i", "o", "u"]
    var outputString = "";
    for (var i = 0; i < initialString.length; i++) {  //[g,o,o,d,b,y,e]
        var isCurrentCharVowel = false;               //[F,T,T,F,F,F,T]

        for (var j = 0; j < lowercaseVowls.length; j++) {
            if (initialString[i] === lowercaseVowls[j]) {
                isCurrentCharVowel = true;
            }

        } if (isCurrentCharVowel === false) {
            outputString += initialString[i];
        }
    }
    return outputString;
}
console.log(shortcut("Habiiba"));



// console.log(shortcut);
function sitdown(name) {
    return "sit down " + name;
}
function goToBed(time) {
    return " and go To Bed" + time;
}
function eat(meal) {
    return " and eat your " + meal;
}

console.log(sitdown(" ayub "));
console.log(sitdown(" ilyas "));

// sitdown nate and go to bed at 8
var result = sitdown("nate");
console.log(result)
console.log(goToBed(" ilyas "));
var when = goToBed("8");
console.log(when);
var command = result + when;
console.log(command)

// sit nate and eat your dinner
var sitResult = sitdown("nate")
var eatResult = eat("dinner");
console.log(sitResult + eatResult);

// Sit down ilyas and go to bed right now
var goresult = goToBed(" right now ");
var sitResult = sitdown(" ilyas  ");
console.log( sitResult+goresult);


