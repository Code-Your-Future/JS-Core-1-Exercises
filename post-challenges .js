/* 1.Write a function which takes 2 numbers and tells the user the result of the number's addition, 
subtraction, multiplication and division. The log should be formatted like: "For numbers {firstNumber} and {secondNumber}, 
the addition is {addition}, the subtraction is {subtraction}, the multiplication is {multiplication} and the division is {division}". */

function arithmeticOperators(firstNumber, secondNumber){
    console.log('Addition: ' + (firstNumber + secondNumber) +
   '\nSubstration: ' + (firstNumber - secondNumber) +
   '\nMultiplication: ' + (firstNumber * secondNumber) +
   '\nDivision: '+ (firstNumber / secondNumber));
}
arithmeticOperators(7, 4);
arithmeticOperators(4, 8.5);
arithmeticOperators(17.3, 4);
arithmeticOperators(18, 42);


/* **********************************************************************************************************
2.Write a function to log the grade of a student in an examination. 
The student will get A+ grade if the mark is in the range 90 - 100 (inclusive), A if the mark is in the range 80 - 89, 
B if the mark is in the range 70 - 79, C if the mark is in the range 60 - 69, D if the mark is in the range 50 - 59 
and E if the mark is 49 or lower. 
*************************************************************************************************************************/

function myGrade(mark){
    if(mark >= 90 && mark <= 100){
        console.log('Your grade is: A*')
    }else if(mark >= 80 && mark <= 89){
        console.log('Your grade is: A')
    }else if(mark >= 70 && mark <= 79){
        console.log('Your grade is: B')
    }else if(mark >= 60 && mark <= 69){
        console.log('Your grade is: C')
    }else if(mark >= 50 && mark <= 59){
        console.log('Your grade is: D')
    }else if(mark <= 49){
        console.log('Your grade is: E')
    }else {
        console.log('Hmm... may be your are a genius!')
    }
}

myGrade(120);
myGrade(80);
myGrade(70);

/* ************************************************************************************************************************
3.Write a function which takes an integer number and checks if it is within 20 digits of 100 or within 20 digits of 400. 
*************************************************************************************************************************/

function areYouWithinTwentyDigitsOf(integer){
    if((100-integer) <= 20 || (120 -integer) <= 20){
        console.log(true)
    }else if ((400-integer) <= 20 || (420 -integer) <= 20){
        console.log(true)
    }else {
        console.log(false);
    }    
    
}

areYouWithinTwentyDigitsOf(49);
areYouWithinTwentyDigitsOf(93);
areYouWithinTwentyDigitsOf(390);

/* ************************************************************************************************************************
4.Write a function which takes a city name and checks whether it is one of the Code Your Future cities (London, Glasgow, Manchester).
 If it is one of the CYF cities, log a success message (e.g. "Well done!"), 
 if it is not log a different message (.e.g "Not a CYF city, try again!"). 
*************************************************************************************************************************/

var cyfCities = ['London', 'Glascow', 'Manchester'];

function whereToFindCyf(cityName){
    for (var cyfCitiesIndex = 0; cyfCitiesIndex < cyfCities.length; cyfCitiesIndex++){
        if(cityName === cyfCities[cyfCitiesIndex]){
            console.log('Well done CYF! ' + cityName + ' is one of the Code Your Future cities');
          break;
        }
        }if  (cityName !== cyfCities[cyfCitiesIndex]){
            console.log(cityName + ' is not a CYF city, try again!');
        }
}


whereToFindCyf('Yaounde');
whereToFindCyf('Manchester');
whereToFindCyf('Malabo');
whereToFindCyf('Glascow');

/* ************************************************************************************************************************
5-Extend the function from Exercise 4 by copy/pasting it to a new function. 
The new function should take an array of city names and checks if all of them are CYF cities, 
some of them are CYF cities or none of them are CYF cities (Hint: use a loop).
*************************************************************************************************************************/

function whereToFindCyfArr(cityName){
    var cyfCities = ['London', 'Glascow', 'Manchester'];
    for (var cityNameIndex = 0; cityNameIndex < cityName.length; cityNameIndex++){
        for (var cyfCitiesIndex = 0; cyfCitiesIndex < cyfCities.length; cyfCitiesIndex++){
            if(cityName[cityNameIndex] === cyfCities[cyfCitiesIndex]){
                console.log('Well done CYF! ' + cityName[cityNameIndex] + ' is one of the Code Your Future cities');
                         break;  
       }
            }if(cityName[cityNameIndex] !== cyfCities[cyfCitiesIndex]){
                    console.log(cityName[cityNameIndex]+ ' is not a CYF city, try again!');               } 
            
    }
}  

   whereToFindCyfArr(['Glascow', 'malabo', 'Manchester', 'Paris', 'London', 'Marseille', 'Lyon']);       
   
   /* ************************************************************************************************************************
6-Extend the function from Exercise 5 by copy/pasting it to a new function. 
The new function should handle UPPER and lower case city names in the input (Hint: try .toLowerCase()).
*************************************************************************************************************************/

function whereToFindCyfArrCase(cityName){
    var cyfCities = ['London', 'Glascow', 'Manchester'];
    for (var cityNameIndex = 0; cityNameIndex < cityName.length; cityNameIndex++){
        for (var cyfCitiesIndex = 0; cyfCitiesIndex < cyfCities.length; cyfCitiesIndex++){
            if(cityName[cityNameIndex].toLowerCase() === cyfCities[cyfCitiesIndex].toLowerCase()){
                console.log('Well done CYF! ' + cityName[cityNameIndex].toLowerCase() + ' is one of the Code Your Future cities');
                         break;  
       }
        }   if(cityName[cityNameIndex] !== cyfCities[cyfCitiesIndex]){
                    console.log(cityName[cityNameIndex].toLowerCase() + ' is not a CYF city, try again!');               
        } 
            
    }
}  

whereToFindCyfArrCase(['Glascow', 'malabo', 'Manchester', 'Paris', 'London', 'Marseille', 'Lyon']);  

 /* ************************************************************************************************************************
7-Write a function which appends a character to the beginning of a given string, 
repeated a given number of times. So for example, yourFunction('ello', 3, 'h') would log 'hhhello'.
*************************************************************************************************************************/
function addCharToBegin(string, time, character){
    var array = string.split('');
    for(var i = 0; i < time; i++){
        array.unshift(character);
    } console.log(array.join(''));
}
addCharToBegin('ello', 3, 'h');

/* ************************************************************************************************************************
8-Write a function which takes a integer number as a guess. It then checks if their guess matches with a randomly generated integer 
number (Hint: try Math.random()). If it does match it logs out with a success message (e.g. "Good guess!"). 
If their guess does not match, log a different message (e.g. "Incorrect, try again!").
*************************************************************************************************************************/

function guestGame(yourNumber){
    var randomNumber = Math.floor(Math.random * 99999002);
    if(yourNumber === randomNumber){
        console.log('Good guest');
    }else{
        console.log("Incorrect, try again!");
    }
}

guestGame(2223);

/* ************************************************************************************************************************
9-Extend the function from Exercise 8 by copy/pasting it to a new function.
 The new function should now take an array of numbers as guesses, and tells the user if any of their guesses were correct.
*************************************************************************************************************************/

function guestGame(arrNumber){
    var randomNumber = Math.floor(Math.random * 99999002);
    for(var i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] === randomNumber){
            console.log( arrNumber[i] + ' a good guest');
        }else{
            console.log(arrNumber[i] + " is incorrect, try again!");
        }
    }
}

guestGame([34, 45, 78,1003,46]);
