/**

Find bug below and make sure it is working as expected.

Two way to handle this problem;
1- new ES6 type
2- Change logic inside loop

Desired ourtput;

The index of this number is: 0
The index of this number is: 1
The index of this number is: 2
The index of this number is: 3
The index of this number is: 4

*/

const arr = [10, 12, 15, 21, 34];
for (var i = 0; i < arr.length; i++) {
    console.log('The index of this number is: ' + i);
}
