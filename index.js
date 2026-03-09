let numbers = [1,2,3,4,5,6];

//Emtying an Array only if it has the only reference
//Option 1
numbers = [];

// Option 2
numbers.length = 0;

//Option 3
numbers.splice(0, numbers.length);

//Option 4
while(numbers.length > 0)
    numbers.pop();


console.log(numbers);