//For in

const person = {
    name: 'Mosh',
    age: 30
};

for(let key in person)
console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
for(let index in colors)
    console.log(index, colors[index]);

//For of (for each)
for(let color of colors)
    console.log(color);