/**

Cre­ate a pascal’s tri­an­gle using javascript.

http://www.mathsisfun.com/pascals-triangle.html


- Pascal’s tri­an­gle can be sim­u­lated using 2-D array
- While cre­at­ing 2-D array
- If the ele­ment is the either first or last ele­ment then ini­tial­ize it with 1
- Else ini­tial­ize it with the sum of the ele­ments from pre­vi­ous row

*/
function pascal (num) {
  var triangle =[];
  for (var i = 0; i < num; i++) { 
    triangle[i] = new Array(i+1);
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j] ;
      }
    }
  }
  return triangle;
}
console.log(pascal(5));



// function pascal(num1, num2) {
//   if (num2 < 0 || num2 > num1) {
//       return 0;
//   }
//   if (num2 === 1 || num2 === num1) {
//       return 1;
//   }
//   return pascal(num1 - 1, num2 - 1) + pascal(num1 - 1, num2);
// }

// function num1(n) {
// var r = [];
//   for (var i = 1; i <= n; i++) {
//       r.push(pascal(n, i));
//   }
//   return r;
// }

// function triangle(n) {
//   for (var i=1; i <= n; i++) {
//       console.log(num1(i));
//   }
// }

// triangle(5);
// var generate = function(numRows) {
//   if(numRows == 0) return [];

  
//   var trigle = [[1]];

//   for(var i = 1 ; i < numRows ; i++){
//       var prevRow = trigle[i-1]; 
//       var curRow  = [1];             

//       for(var j = 1 ; j <= i; j++){
         
//           var pre =  prevRow[j-1];
//           var cur =  prevRow[j] ?  prevRow[j] : 0;
//           curRow.push(pre+cur);  
//       }
//       trigle.push(curRow);
//   }

//   return trigle;
// };
// console.log(generate(6));