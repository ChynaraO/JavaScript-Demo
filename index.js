//Factory functions
//Camel Notation: oneTwo
//Pascal Notation: OneTwo
function createCircle(raduis){
    return {
        raduis,
        draw(){
            console.log('draw');
        }
    };
}
 const circle1 = createCircle(1);
 console.log(circle1);

 const circle2 = createCircle(2);
 console.log(circle2);

 //constructor function
 function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('dddd');
    }
 }

 const circle = new Circle(4);
 console.log(circle);
 circle.draw();