'use strict';//in strict mode enable, fucntion call's this keyword is undefined

const Circle = function(){ //constructor
    this.draw = function(){
        console.log(this);
    }
};

const c = new Circle();
c.draw(); //output => above object
console.log(c.draw); //output => draw function

function Squar(){
    console.log(this);
}

Squar();//output undefined, because of the strict mode

class Piremed {
    draw(){
        console.log(this);
    }
}

const pr = new Piremed();
pr.draw();
console.log(pr.draw);

//draw();//output undefined, whether strict mode or not, because of method inside class declaration behave like strict mode. (don't give output as windows.object)

//Private Members Using Symbols

const _radius = Symbol();//gives unique radius value, every times that Symbol() calling
const _draw = Symbol();

class Circle1{
    constructor(radius){
        this[_radius] = radius;
    }

    [_draw](){

    }

}

const c2=new Circle1(2);
const key = Object.getOwnPropertySymbols(c2)[0];
console.log(c2[key]);

//Private Members Using WeakMaps
const _radius1 = new WeakMap();
const _move = new WeakMap();

class Circle2{
    constructor(radius){

        _radius1.set(this,radius);

        _move.set(this,()=>{
            console.log('move',this);
        });
    }

    draw(){
        _move.get(this)();
        console.log('draw');
    }
}

const c3 = new Circle2(10);

//Getters and Setters

const _radius2 =  new WeakMap();

class Circle3{
    constructor(radius){
        _radius2.set(this,radius);
    }

    get radius(){
        return _radius2.get(this);
    }

    set radius(value){
        if(value<=0) throw new Error('Invalid radius');
         _radius2.set(this,value);
    }
}

const c4 = new Circle3(5);
//c4.radius => output 5
//c4.radius = 10 
//c4.radius => output 10

//Inheritance

class Shape{
    constructor(color){
        this.color =  color;
    }

    move(){
        console.log('move');
    }
}

class Circle4 extends Shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }
}

const shape = new Circle4('red',4);

