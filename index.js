
//Bitwise Operators

// 1 = 00000001
// 2 = 00000010
// R = 00000011

// 8 = 00001000
// 2 = 00000010
// R = 00001010

console.log(1 | 2); //bitwise or. 3
console.log(8 & 2); // bitwise &. 0

//Read, Write, Execute
// 00000001
// 00000010
// 00000100

const readPermition = 4;
const writePermition = 2;
const executePermition = 1;

let myPermition = 0;
myPermition = myPermition | writePermition;
console.log(myPermition); //6 bitwise

let message = 
(myPermition & readPermition) ? 'yes' : 'no';
console.log(message);


