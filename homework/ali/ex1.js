/*Write a function which takes 2 numbers and tells the user the result of the number's addition, 
subtraction, multiplication and division. The log should be formatted like: "For numbers 
{firstNumber} and {secondNumber}, the addition is {addition}, the subtraction is {subtraction}, 
the multiplication is {multiplication} and the division is {division}". */

function numbers(firstNumber,secondNumber) {
	var addition = firstNumber + secondNumber;
	var subtraction = firstNumber - secondNumber;
	var multiplication = firstNumber * secondNumber;
	var division = firstNumber / secondNumber;
	console.log('For numbers ' + firstNumber + ' and  ' + secondNumber + ' , the addition is ' + addition + ', the subtraction is ' + subtraction + ', the multiplication is ' + multiplication + ' and the division is ' + division + '.');
}

numbers(55,10);
