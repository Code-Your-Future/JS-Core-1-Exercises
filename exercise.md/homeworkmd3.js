
/* Afunction which takes an integer number and checks if it is 
  within 20 digits of 100 or within 20 digits of 400.*/


function interval(number) {

    if(number >= 80 && number <= 120) {
        console.log("The number is within 20 digits of 100");
    }

    else if(number >= 380 && number <= 420) {
        console.log("The number is within 20 digits of 400");
    }

    else {
        console.log("The number is not within 20 digits of 100 or 400")
        
    }

    
}


interval(48);
interval(88);
interval(405);

    