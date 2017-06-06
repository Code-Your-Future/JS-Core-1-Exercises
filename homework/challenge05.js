/* Challenge 5: Ones and Zeros

Write a function `stringy` that takes a size and returns a string of alternating '1s' and '0s'.

The string should start with a 1.

```js
AQES
stringy(6) // --> '101010'
stringy(5) // --> '10101'
```

The size will always be positive and will only use whole numbers.
*/



// var stringy = function(valor1,valor2){

// if (valor1 <= valor2){
//     return valor1;
// }else{
//     return valor2

var Zerosandone = ''
var stringy = function(length){
    for (var i = 0; i < length; i++){
        if(i % 2 === 0){
            Zerosandone = Zerosandone + "1"    
        }else {
            Zerosandone = Zerosandone + "0"      
        }       
    }
    return Zerosandone
}
var result = stringy(5);
console.log(result);
