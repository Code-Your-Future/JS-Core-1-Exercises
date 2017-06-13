/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/
// 012345
//"101010" 
function stringy(size){
    console.log("stringy");
    var alt = "";
    for(i = 0; i <size; i++){
        if(i % 2===0){
            alt+="1";
        }else{
            alt+="0";
        }
    }
    return alt;
}

console.log(stringy(2));//"10"
console.log(stringy(5));//"10101"
console.log(stringy(6));//"101010"
console.log(stringy(8));//"10101010"

