//Primitives
const numbers = [1,3,2,4];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

//Objects

const cources = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
];

cources.sort(function(a,b){
const nameA = a.name.toLowerCase();
const nameB = b.name.toLowerCase();
if (nameA < nameB) return -1;
if (nameA > nameB) return 1;
return 0;
});
console.log(cources);

