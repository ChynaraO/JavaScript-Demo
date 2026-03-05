// comment

//object literal
let people = {};
let person = {
    name: 'Mosh',
    age : 30
};

//dot notation
person.age = 31;

//bracket notation
let selection = 'name';
// person['name'] = 'Mary';
person[selection] = 'Mary';


console.log(person);
console.log(people);
