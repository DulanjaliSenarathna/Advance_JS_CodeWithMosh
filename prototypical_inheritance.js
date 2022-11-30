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
    Shape1.prototype.duplicate1.call(this);//call like normal method call. this means implementaion of the calling method body
    console.log('duplicate circle');
}

function Square1(){

}

extend(Square1,Shape1);

Square1.prototype.duplicate1 = function(){
    Shape1.prototype.duplicate1.call(this);
    console.log('duplicate square');
}

//when cc.duplicate() => output => duplicate circle. (call child method automatically).
//but when we need to call parent object also, line 88 , now output => duplicate1 duplicate circle

const cc = new Circle5();

const shapes = [
    new Circle5(),
    new Square1()
];

//getting array of method calls outputs with OOP

for(let shape of shapes){
    shape.duplicate1();
}

//getting array of method calls outputs without OOP - this is mess when 100 of objects.

for(let shape of shapes){
    if(shape.type === 'circle5'){
        //duplicateCircle();//we need to implement this method outside(comment out for avoid console error)
    }else if(shape.type === 'square1'){
       // duplicateSquare();//we need to implement this method outside
    }else{
        //duplicateShape();
    }
}

//Mixins - compose 2 object's method together

const CanEat = {
    eat : function (){
        console.log('Eating');
    }
}

const CanWalk = {
    walk : function (){
        console.log('Walking');
    }
}

//mixin function

function mixin(target, ...sources){ //rest operator(we don't know how many arguments should we pass in this function)
    Object.assign(target,...sources);//spread operator(we can't pass array as a argument)
}

//added above 2 objects to the new empty object
const person = Object.assign({},CanEat,CanWalk);

console.log(person);

//compose using constructor

function Person(){

}

//Object.assign(Fish.prototype,CanEat,CanSwim); instead of using this again and again, we can use function called mixin
mixin(Person.prototype,CanEat,CanWalk);

const newob = new Person();
console.log(newob);

//if we want to add new object called swim

const CanSwim = {
    swim : function(){
        console.log('swimming');
    }
}

function Fish(){

}

//Object.assign(Fish.prototype,CanEat,CanSwim); instead of using this again and again, we can use function called mixin
mixin(Fish.prototype,CanEat,CanSwim);
const fish = new Fish();
console.log(fish);

//Exercise -Prototypical Inheritance

function HtmlElement(){
    this.click = function(){
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log('focused');
}

function HtmlSelectElement(items = []){
this.items = items;

this.addItem = function(item){
    this.items.push(item);
    }

    this.removeItems = function(item){
        this.items.splice(this.items.indexOf(item),1);
    }

    this.render = function(){
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    }
}
HtmlSelectElement.prototype = new HtmlElement();//set the prototype of HtmlSelectElement to instance of HtmlElement
HtmlSelectElement.prototype.constructor = HtmlSelectElement; //new HtmlSelectElement.prototype.constructor; (similar),new HtmlSelectElement() (similar).

//Exercise - Polymorphism
function HtmlImageElement(src){
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}"/>`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
//now we can create object of HtmlSelectElement and that object.call can access HtmlElement's methods and it's prototype methods.

const sv = new HtmlSelectElement();
console.log(sv.click()); //output Clicked
console.log(sv.focus());//output focused
















