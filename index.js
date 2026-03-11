const numbers = [1,2,3,4];

//array , index of an element, offset -position where it needs to be moved
const output = move(numbers, 0, -2);
console.log(output);
console.log(move(numbers, 0, -1));


function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invalid offset');
    }
 
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}
