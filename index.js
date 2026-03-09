const cources = [
    {id: 1, name: 'a'}, 
    {id: 2, name: 'b'}, 
];

//Arrow function syntax

const course = cources.find(course => course.name === 'a');


const course1 = cources.find(function(course){
    return course.name === 'as';
});

console.log(course);
console.log(course1);