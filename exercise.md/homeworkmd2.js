/*A function to log the grade of a student in an examination.*/


function grade(mark) {

    if(90 <= mark && mark <= 100) {
        console.log("your grade is A+");
    }

    else if(80 < mark && mark < 89) {
        console.log("your grade is A");
    }

    else if(70 < mark && mark < 79) {
        console.log("your grade is B");
    }
    
    else if(60 < mark && mark< 69) {
        console.log("your grade is c");
    }

    else if(50 < mark && mark < 59) {
        console.log("your grade is d");
    }

    else if(mark < 49) {
        console.log("your grade is E");
    }

    else  {
        console.log("you put an incorrect mark");
    }

}


grade(46);
grade(101);