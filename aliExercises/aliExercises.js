console.log("========Exercise #1===========");

function numMath(num1, num2) {
	var add = num1 + num2;
	var subtr = num1 - num2;
	var mult = num1 * num2;
	var divsn = num1 / num2;
	console.log("For numbers " + num1 + " and " + num2 + ", the addition is " + add + ", the substruction is " + subtr + ", the multiplication is " + mult + " and division is " + divsn);
}
numMath(13, 22);

console.log("========Exercise #2===========");
function studentGrade(mark) {
	if(mark >= 90 && mark <= 100) {
		console.log("Student gets A+");
	} else if(mark >= 80 && mark <= 89) {
		console.log("Student gets A");
	} else if(mark >= 70 && mark <= 79) {
		console.log("Student gets B");
	} else if(mark >= 60 && mark <= 69) {
		console.log("Student gets C");
	} else if(mark >= 50 && mark <= 59) {
		console.log("Student gets D");
	} else if(mark <= 49) {
		console.log("Student gets E");
	}
}
studentGrade(37);
studentGrade(98);
studentGrade(76);

console.log("========Exercise #3===========");

function isWithin(num) {
	if (num >= 80 && num <=120) {
		console.log ("The number is within 20 digits of 100");
	} else if (num >= 380 && num <= 420) {
		console.log ("The number is within 20 digits of 400");
	} else {
		console.log ("The number is not within 20 digits of 100 OR 400");
	}
}
isWithin(98);
isWithin(392);
isWithin(5);

console.log("========Exercise #4===========");

function checkCityName(city) {
	//answer with switch
	// switch(city) {
	// 	case "London":
	// 		console.log("Well Done");
	// 		break;
	// 	case "Glasgow":
	// 		console.log("Well Done");
	// 		break;
	// 	case "Manchester":
	// 		console.log("Well Done");
	// 		break;
	// 	default:
	// 		console.log("Not a CYF city, try again!");
	// 		break;
	// }

	//answer with if
	if(city === "London" || city === "Glasgow" || city === "Manchester") {
		console.log("Well Done");
	} else {
			console.log("Not a CYF city, try again!");
	}
}
checkCityName("London");
checkCityName("New York");
checkCityName("Kyiv");

console.log("========Exercise #5===========");

var cyfCities = ["London", "Manchester", "Glasgow"];

function checkCity(array) {
	var count = 0;
	for(var i = 0; i < cyfCities.length; i++) {
		for(var j = 0; j < array.length; j++) {
			if(cyfCities[i] === array[j]) {
				count += 1;
			}
		}
	}

	if(count === array.lengt)h {
		console.log("All cities in function argument are CYF cities");
	} else if (count > 0) {
		console.log("Some cities in function argument are CYF cities");
	} else {
		console.log("None of cities in function argument are CYF cities");
	}
}

checkCity(["London", "New York", "Kyiv", "Edinburgh", "Manchester"]);
checkCity(["London", "Glasgow", "Manchester"]);
checkCity(["New York", "Kyiv", "Edinburgh"]);

console.log("========Exercise #6===========");

var cyfCities = ["London", "Manchester", "Glasgow"];

function checkCityWithCaseType(array) {
	var count = 0;
	for(var i = 0; i < cyfCities.length; i++) {
		for(var j = 0; j < array.length; j++) {
			if(cyfCities[i].toLowerCase() === array[j].toLowerCase()) {
				count += 1;
			}
		}
	}

	if(count === array.length) {
		console.log("All cities in function argument are CYF cities");
	} else if (count > 0) {
		console.log("Some cities in function argument are CYF cities");
	} else {
		console.log("None of cities in function argument are CYF cities");
	}
}

checkCityWithCaseType(["LONDON", "New York", "Kyiv", "Edinburgh", "MANCHESTER"]);
checkCityWithCaseType(["London", "Glasgow", "MANCHESTER"]);
checkCityWithCaseType(["New York", "Kyiv", "Edinburgh"]);


console.log("========Exercise #7===========");

function appendChar(string, repeatTimes, letter) {
	var stringArr = string.split("");
	for(var i = 1; i <= repeatTimes; i++) {
		stringArr.unshift(letter);
	}
	console.log(stringArr.toString().replace(/,/gi, ""));

}

appendChar('ello', 3, 'h');


console.log("========Exercise #8===========");




console.log("========Exercise #9===========");


console.log("========Exercise #10===========");

function reverseString(str) {
	var reversedArray = str.split("").reverse();
	console.log(reversedArray.join(""));
}

reverseString("hello world");



