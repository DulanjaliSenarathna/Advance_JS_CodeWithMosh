function Shape(){

}

function Circle (radius){
this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log('draw');
}

//Circle.prototype = Object.create(Object.prototype); before creat shape and , this is default
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.duplicate = function(){
    console.log('duplicate');
}

const s = new Shape();
const c = new Circle(2);

