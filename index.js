const circle = {
    radius : 1,
    draw() {
        console.log('draw');
    }
};
//Old approach
// const another = {};
// for(let key in circle)
//     another[key] = circle[key];


//New approach
// const another = Object.assign({
//     color: 'red'
// }, circle);

//Another New approach
//spread an object
const another = {...circle};
console.log(another);
