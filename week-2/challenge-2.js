/**

Cre­ate a pascal’s tri­an­gle using javascript.

http://www.mathsisfun.com/pascals-triangle.html


- Pascal’s tri­an­gle can be sim­u­lated using 2-D array
- While cre­at­ing 2-D array
- If the ele­ment is the either first or last ele­ment then ini­tial­ize it with 1
- Else ini­tial­ize it with the sum of the ele­ments from pre­vi­ous row

*/
function pascal(num) {
  var array = {},
    cash1 = 0,
    cash2 = 0; // TODO
  for (i = 0; i < num; i++) {
    array[i] = [];
    for (a = 0; a < i + 1; a++) {
      if (a === 0 || a === i) {
        array[i][a] = 1;
      } else {
        cash1 = array[i - 1][a - 1];
        cash2 = array[i - 1][a];
        array[i][a] = cash1 + cash2;
      }
    }
  }
  return array;
}
/*
function print(array, num) {
  var arr = {};

  var numCash = num.splice();
  for (i = 0; i < num; i++) {
    arr[i] = [];
    for (j = num - i; j === 0; j--) {
      arr[i][j] = "   ";
    }
    for (k = 0; k < i * 2 + 1; k++) {
      if (array[i][k] < 10) {
      }
      if (array[i][k] / 10 < 10 && array[i][k] / 10 > 1) {
      }
    }
  }
}*/
function print(array, num) {
  var cashArray = {};
  for (i = 0; i < num; i++) {
    cashArray[i] = [];
  }
  cashArray = array;
  for (i = 0; i < num; i++) {
    for (a = 0; a < i + 1; a++) {
      if (cashArray[i][a] < 10) {
        cashArray[i][a] = " " + cashArray[i][a] + " ";
      } else if (cashArray[i][a] < 100 && cashArray[i][a] >= 10) {
        cashArray[i][a] = " " + cashArray[i][a];
      } else {
        cashArray[i][a] = "" + cashArray[i][a] + "";
      }
    }
  }
  for (i = 0; i < num; i++) {
    cashArray[i] = cashArray[i].join("   ");
  }

  for (i = 0; i < num; i++) {
    for (k = 0; k < num - i - 1; k++) {
      cashArray[i] = "   " + cashArray[i];
    }
  }
  return cashArray;
}

console.log(print(pascal(13), 13));
