// // Day 2 - task 1

// for ( var i = 0 ; i < 6 ; i++ ) {

//     var str = "";

//     for ( var j = 0 ; j < 10 ; j++ ) {
        
//         str += 'X';

//     }

//     console.log( str );

// }

// // Day 2 - task 2

// for ( var j = 0 ; j < 6 ; j++ ) {

//     var str = "";

//     for ( var i = 0 ; i < 10 ; i++ ) {

//         if ( i === 0 || i === 9 ) {

//             str += 'X';

//         } else {

//             str += ' ';

//         }
        
//     }

//     console.log( str );

// }
   


// // Day 2 - task 3

// for ( var i = 0 ; i < 6 ; i++ ) {

//     if ( i === 0 || i === 5 ) {

//         var strTop = "";

//         for ( var j = 0 ; j < 10 ; j++ ) {
            
//             strTop += 'X';

//         }

//         console.log( strTop );

//     } else {

//         var strInside = "";

//         for ( var k = 0 ; k < 10 ; k++ ) {

//             if ( k === 0 || k === 9 ) {

//                 strInside += 'X';

//             } else {

//                 strInside += ' ';
                
//             }
            
//         }

//         console.log( strInside );

//         }   

// }


// // Day 2 - task 4

// for ( let kk = 1 ; kk < 4 ; kk++ ) {

//     for ( let i = 1 ; i < 4 ; i++ ) {

//         console.log( fullSection() + blankSection() + fullSection() + blankSection() + fullSection() + blankSection() + 
//           fullSection() + blankSection());

//     }

//     for ( let i = 1 ; i < 4 ; i++ ) {

//         console.log( blankSection() + fullSection() + blankSection() + fullSection() + blankSection() + fullSection() + 
//           blankSection() + fullSection());

//     }
// }

// function fullSection() {

//     var result = "";

//     for (var j = 0; j < 4; j++) {
//         result += "X";
//     }
    
//     return result;  
// }

// function blankSection() {
    
//     var result = "";

//     for (var j = 0; j < 4; j++) {
//         result += " ";
//     }
    
//     return result;  
// }