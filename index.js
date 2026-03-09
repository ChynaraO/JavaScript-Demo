const first = [1,2,3,4];
const second = [5,6,7];

//spread operator
const combined = [...first,'a',...second];
console.log(combined);

// const copy = combined.slice();
const copy = [...combined];

console.log(copy);


