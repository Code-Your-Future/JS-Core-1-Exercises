/*
console.log("before loop.."); {

    for (var i = 1; i <= 100; i=i+1) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
*/

/*
console.log("before loop.."); {

    for (var i = 1; i <= 100; i=i+1) {
        if ((i % 3 ===0) && (i % 5 ===0)){
            console.log  ("fizzbuzz"); 
        }   
        
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
    }
}
*/
 for (var i = 1; i <= 100; i=i+1) { 
        if (i % 3 === 0) {
            if (i % 5 === 0){
                console.log("fizbuzz");
            }
            else {
                console.log("fizz");
            }
        }
        else if (i % 5 === 0){
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    }






