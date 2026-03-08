const cources = [
    {id: 1, name: 'a'}, 
    {id: 2, name: 'b'}, 
];

// console.log(cources.includes({id: 1, name: 'a'}));

const course = cources.find(function(course){
    return course.name === 'a';
});
const course1 = cources.find(function(course){
    return course.name === 'as';
});

console.log(course);
console.log(course1);