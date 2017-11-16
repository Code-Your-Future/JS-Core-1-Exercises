// Write a function which appends a character to the beginning of a given string,
//  repeated a given number of times. So for example, yourFunction('ello', 3, 'h') 
//  would log 'hhhello'.

function characterAp(string,times,letter) {
	var chArray = string.split(" ");
	for (var i=0; i < times; i++) {
		chArray.unshift(letter);
	}
	return(chArray.join(""));
}

console.log(characterAp("hello",3,"h"));