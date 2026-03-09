const numbers = [1,2,-1,3,4];

const allPositive = numbers.every(function(number){
return number >= 0;});
console.log(allPositive);

const atLeastOnePositive = numbers.some(function(number){
return number >= 0;});
console.log(atLeastOnePositive);