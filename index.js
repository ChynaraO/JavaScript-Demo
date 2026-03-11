const numbers = [1,2,-1,3,4];

let sum = 0;
for(let n of numbers)
    sum += n;

console.log(sum);
// const sum1 = numbers.reduce((accumulator, currentValue) => {
// return accumulator + currentValue;
// }, 0);

const sum1 = numbers.reduce((accumulator, currentValue) =>
accumulator + currentValue);
console.log(sum1);