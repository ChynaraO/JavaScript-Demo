const numbers = [1,2,3,4];
console.log(numbers.includes(numbers, 6));

function includes(array, searchElement){
    for(let item of array)
        if(item === searchElement)
            return true;
    return false;
}
