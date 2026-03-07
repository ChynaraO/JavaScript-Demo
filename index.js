let x = {value : 10};
let y = x;     //when we use object, the address or the reference has been copied
x.value = 20;


let obj = {value: 10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); //10
