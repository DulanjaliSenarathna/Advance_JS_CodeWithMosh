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
Circle.prototype.constructor = Circle;

Circle.prototype.duplicate = function(){
    console.log('duplicate');
}

const s = new Shape();
const c = new Circle(2);

//Resetting the Constructor - whenever you reset the prototype to parent prototype, you need to reset the constructor to original 

//in the line 15 , I reset the constructor

//Circle.prototype.constructor = Circle;
//Circle.prototype.constructor() => similar => new Circle(); - creating new object


