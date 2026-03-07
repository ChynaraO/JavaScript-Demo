function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log('draw');
    }
}


// const Circle1 = new Function('raduis', `
//     this.radius = radius,
//     this.draw = function(){
//         console.log('draw');
//     }
//         `
// );

console.log(Circle);
Circle.call({}, 1);
Circle.apply({}, [1,2,3]);


const another = new Circle(1);
console.log(another);