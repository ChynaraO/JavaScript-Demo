const first = [1,2,3,4];
const second = [5,6,7];

for(let number of first)
    console.log(number);

first.forEach((number, index)=>
    console.log(index, number));


