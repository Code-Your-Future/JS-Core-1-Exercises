console.log('======================= Solution of question 1 ===================');

const calculation = (num1, num2) => {
    console.log(`For numbers ${num1} and ${num2}, the addition is ${num1 + num2},substraction is ${num1 - num2}, multiplication is ${num1 * num2} and division is ${num1 / num2}`); 
}
calculation(6, 9);


console.log('====================== Solution of question 2 ====================');

const studentGrade = (mark) => {
    if (mark >= 90 && mark <= 100) {
        console.log(`The student's mark is A+`);
    } else if (mark >= 80 && mark < 90) {
        console.log(`The student's mark is A`);
    } else if (mark >= 70 && mark < 80) {
        console.log(`The student's mark is B`);
    } else if (mark >= 60 && mark < 70) {
        console.log(`The student's mark is C`);
    } else if (mark >= 50 && mark < 60) {
        console.log(`The student's mark is D`);
    }else {
        console.log(`The student's mark is E`);
    }
}

studentGrade(100);
studentGrade(80);
studentGrade(70);
studentGrade(60);
studentGrade(50);
studentGrade(40);

console.log('====================== Solution of question 3 ====================');

function isWithin(num) {
	if (num >= 80 && num <=120) {
		console.log ("The number is within 20 digits of 100");
	} else if (num >= 380 && num <= 420) {
		console.log ("The number is within 20 digits of 400");
	} else {
		console.log ("The number is not within 20 digits of 100 OR 400");
	}
}
isWithin(99);
isWithin(400);
isWithin(5);

console.log('====================== Solution of question 4 ====================');

let city;

const isThereCYF = (city) => {
    switch(city) {
        case 'London':
            console.log(`Good news! CYF is in ${city}!`);
            break;
        case 'Glasgow':
            console.log(`Good news! CYF is in ${city}!`);
            break;
        case 'Manchester':
            console.log(`Good news! CYF is in ${city}!`);
            break;
        default: 
        console.log(`Sadly, CYF is not in your city!`);
    }
}

isThereCYF('London');
isThereCYF('Glasgow');
isThereCYF('Manchester');
isThereCYF('New York');


console.log('====================== Solution of question 5 ====================');

let cities = ['London', 'Edinburgh', 'Glasgow', 'Liverpool', 'Herne Bay', 'Paris', 'Sydney', 'Manchester'];

const CYFCities = (arr) => {
    arr.forEach(function(city) {
        if (city === 'London' || city === 'Glasgow' || city === 'Manchester') {
            console.log(`Good news! CYF is in ${city}`);
        }else {
            console.log(`Sadly, CYF is not in your city yet!`);
        }
    });
}

CYFCities(cities);

console.log('====================== Solution of question 6 ====================');

console.log(`Didn't understand the question sadly!!`)

console.log('====================== Solution of question 7 ====================');

const charAppend = (str, num, char) => {
    let repeat = '';
    for(i = 0; i < num; i++) {
      repeat += char;

    }
    return repeat + str;
}

console.log(charAppend('elo', 5, 'h'));
console.log(charAppend('-MAN', 10, 'X'));
console.log(charAppend('I MY FRIENDS!', 5, 'H'));

console.log('====================== Solution of question 8 ====================');

