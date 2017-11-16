/**

Cre­ate a pascal’s tri­an­gle using javascript.

http://www.mathsisfun.com/pascals-triangle.html


- Pascal’s tri­an­gle can be sim­u­lated using 2-D array
- While cre­at­ing 2-D array
- If the ele­ment is the either first or last ele­ment then ini­tial­ize it with 1
- Else ini­tial­ize it with the sum of the ele­ments from pre­vi­ous row

*/

function pascal(arr) {
    // TODO
    var newArr = [];
    for (var i = 0; i <= arr - 1; i++) {
        newArr[i] = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                newArr[i][j] = 1;
            } else {
                newArr[i][j] = newArr[i - 1][j - 1] + newArr[i - 1][j];
            }
        }
    }
    console.log(newArr);
}

pascal(5);


pascal(8);

pascal(17);