/*A function which takes 2 numbers and tells the user the result of the number's 
  addition, subtraction, multiplication and division */




function mathOperations(x,y) {
   var a,b,c,d;

   a=x+y;
   b=x-y;
   c=x*y;
   d=x/y; 

 console.log("For numbers " + x + " and " + y + ", the addition is " + a + 
 ", the subtraction is " + b + ", the multiplication is " + c + " and the division is " + d) ;
 

}

mathOperations(2,4);
mathOperations(6,8);
mathOperations(-2,-4);
mathOperations(25,0);
