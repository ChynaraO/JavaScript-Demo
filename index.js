
//Logical Operators with Non-booleans

//Falsy : 
// undefined
//0
//null
//''
//NaN - not a number

let userColor = 'red';
userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);


