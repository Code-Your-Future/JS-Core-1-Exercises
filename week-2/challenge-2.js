

function PascalTriangleOf(x) {
  var myArr = [];
  for(var row = 0; row < x; row++) {
      myArr[row] = [];
      for(var col = 0; col < row+1; col++) {
          if(col === 0 || col === row) {
              myArr[row][col] = 1;
          } else {
              myArr[row][col] = myArr[row-1][col-1] + myArr[row-1][col];
          }         
      }       
  }   

  for (i = 0; i < myArr.length; i++) {
    console.log(myArr[i].join(' '));
  }

  
}


PascalTriangleOf(10);


