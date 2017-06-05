function equals(got, expected) {
  if (got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}


var words = ['goodbye', 'nodegirls', 'how are you today', 'hat'];

function shortcut(words) {
    for (var word = 0; word < words.length; word++) {
        for (var words(word) = 0; words(word) < words(word).length; words(word)++) {
            if ((words[word]) === "a" || (words[word]) === "e" || (words[word]) === "i" || (words[word]) === "o" || (words[word]) === "u") {
                var words = words[word].replace(words[word], "");
                

            }
        }
 return words;
    }
   
}
console.log(shortcut(words));


equals(shortcut(words), "gdby", "ndgrls", "hw r y tdy", "ht");
