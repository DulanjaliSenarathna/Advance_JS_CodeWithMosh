function Shape(color){
this.color = color;
}

function extend(Childr,Parent) //parameters starting with capital letter, because of these are connect with constructor functions
{
    Childr.prototype = Object.create(Parent.prototype);
    Childr.prototype.constructor = Childr;
}

function Circle (radius,color){
    Shape.call(this,color);
    this.radius = radius;
}

extend(Circle,Shape);

Circle.prototype.draw = function(){
    console.log('draw');
}

//Circle.prototype = Object.create(Object.prototype); before creat shape and , this is default(no need to below 2 lines because of line 5)

//Circle.prototype = Object.create(Shape.prototype);
//Circle.prototype.constructor = Circle;

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

const s = new Shape();
const c = new Circle(2,'red');

//Resetting the Constructor - whenever you reset the prototype to parent prototype, you need to reset the constructor to original 

//in the line 15 , I reset the constructor

//Circle.prototype.constructor = Circle;
//Circle.prototype.constructor() => similar => new Circle(); - creating new object

//Calling the Super Constructor - line 6

// Intermediate Function Inheritance

//imagine we need to add another constructor class called, Square.

function Square(size){
    this.size = size;
}

extend(Square,Shape);

const sq = new Square(10);

//we need to add prototype reset and constructor reser after this function

//Square.prototype = Object.create(Shape.prototype);
//Square.prototype.constructor = Square;

//using these 2 lines over and over is a mess. to avoid this, we can use new function to make this re-usable (line 5)

//Method Overriding - override a method wrote in a parent object

//think , we need to add duplicate method to circle object.

function extend1(Childr,Parent) //parameters starting with capital letter, because of these are connect with constructor functions
{
    Childr.prototype = Object.create(Parent.prototype);
    Childr.prototype.constructor = Childr;
}

function Shape1(){

}

Shape1.prototype.duplicate1 = function(){
    console.log('duplicate1');
}

function Circle5(){

}

extend(Circle5,Shape1);

//method overriding - should be add after the exdent method. because in here resetting the prototype
Circle5.prototype.duplicate1 = function(){
    Shape1.prototype.call(this);//call like normal method call. this means implementaion of the calling method body
    console.log('duplicate circle');
}

//when cc.duplicate() => output => duplicate circle. (call child method automatically).
//but when we need to call parent object also, line 88 , now output => duplicate1 duplicate circle

const cc = new Circle5();







