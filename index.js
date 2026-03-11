const numbers = [1,2,3,1, 4];

const count = countOccurences(numbers, 1);
console.log(count);
//basic
// function countOccurences(array, searchElement){
//     let count = 0;
//     for(let element of array)
//         if(element === searchElement)
//             count++;
//     return count;
// }

//reduce
function countOccurences(array, searchElement){
    // let count = 0;
    // for(let element of array)
    //     if(element === searchElement)
    //         count++;
    // return count;
return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}

