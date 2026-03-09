const first = [{id: 1}];
const second = [5,6,7];

const combined = first.concat(second);
first[0].id = 10;
console.log(combined);

const slice = combined.slice();
const slice1 = combined.slice(2);
console.log(slice);
console.log(slice1);

