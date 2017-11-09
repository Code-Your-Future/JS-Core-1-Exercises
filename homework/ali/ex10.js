// Write a function which reverses the string given as an argument.

function reverses(string) {
	return string.split("").reverse().join("");	
}

console.log(reverses("hello"));

console.log(reverses("Merry Christmas!"));