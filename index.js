const numbers = [1,2,3,1, 4];

const max = getMax([1,3]);
console.log(max);

//basic
// function getMax(array){
//     if(array.length === 0) return undefined;
    
//     let max = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i] > max) 
//             max = array[i];
//     }
//     return max;
// }

//reduce
function getMax(array){
    if(array.length === 0) return undefined;
    
    // let max = array[0];
    // for(let i = 1; i < array.length; i++){
    //     if(array[i] > max) 
    //         max = array[i];
    // }
    // return max;
    return array.reduce((a, b) => (a > b) ? a : b);
}