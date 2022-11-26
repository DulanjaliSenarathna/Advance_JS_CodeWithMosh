//Encapsulation

//Procedural programming

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overtime*rate);
}

//OOP

let employee = {
    baseSalary : 30000,
    overtime : 10,
    rate : 20,
    getWage : function(){
        return this.baseSalary + (this.overtime*this.rate);
    }
}

employee.getWage();

//Object literals
let circle = {
    radius: 1,
    location : {
        x: 1,
        y: 2
    },
    draw : function(){
        console.log('draw');
    }
}

circle.draw();

//Factories
//if we want to duplicate above circle object 10 times, it's hard to modify draw method over and over.in that case we use factory method
//if object has at least 1 method, then define object using factory method

function createCircle(radius){
    return {
        radius, //in ES6 if the key and the value is equal, remove value 
        draw : function(){
            console.log('draw');
        }
    }
}

const circle1 =  createCircle(1);
circle1.draw();

//Constructors

function Circle(radius){
    this.radius  = radius;
    this.draw = function(){
        console.log('draw');
    }
}

let circle2 = new Circle(3); //Circle.call({},3); exactly same this two
circle2.draw();

Circle.call({},3);
Circle.apply({},[1,2,3]);

//Constructor property
// circle2.constructor  output=> f Object() - built in js constructor mrthod
//circle1.constructor  output=> consctuctor function that we created above

//Functions are objects
function setDate(){
// in console, if we type setDate.name , the output is 'setDate'. it means  setDate function is a object.
}

//Circle.constructor => output => ƒ Function() - built in Function object 

const Circle1 = new Function('radius',`
    this.radius  = radius;
    this.draw = function(){
        console.log('draw');
    }`);

const circle3 = new Circle1(1);

//Values vs Reference type
let x = 10;
let y = x;

x=20;
console.log(y); //y is 10 in output, because of the x and y are independent variables , copy by value.

let z = {value:20};

let k = z;

z.value =50;

console.log(k.value); //now k =50, because k and z are pointing to the same object and , if we change one value , other variable can see the change.

let number = 10;
function increaseValue(number){
    number++;
}

increaseValue(number)
console.log(number);// output 10

let num = {value:10};

function increaseValue1(num){
    num.value++;
}

increaseValue1(num)
console.log(num); //output 11

//Adding/removing properties
circle1.color = {colo:'red'}; //added color property to the circle1 object using dot notation
circle1['location'] = {x:5};//added location property to the circle1 object using brac ket notation

const newProperty = 'xyz';
circle1[newProperty] = {f:5};

delete circle1.location;

//Enumerating properties

//way 1
for (let key in circle1){
    //only return properties and their values
    if(typeof circle1[key] !== 'function')
     console.log(key, circle1[key]);
}

//way2 - only return keys as an array
const keys = Object.keys(circle1);
console.log(keys);

//check the object has given property

if('radius' in circle1)
 console.log('circle 1 has radius');

 //Abstraction
 function Circle2(radius){
    this.radius  = radius;

    this.defaultLocation = {x:1,y:5};

    this.computeOptimumLocation = function(fac){
        //
    }

    this.draw = function(){
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }
}

//Private Properties and Methods 
function Circle3(radius){
    this.radius  = radius;

    let defaultLocation = {x:1,y:5};//pvt members, can't access outside 

    let computeOptimumLocation = function(fac){
        //
    }

    this.draw = function(){
        computeOptimumLocation(0.1); //access pvt members inside child function, (closure) no need this. keyword
        defaultLocation; //access pvt members inside child function, (closure) no need this. keyword
        console.log('draw');
    }
}

//Getters / Setters (access pvt members(properties and methods) publicly )

//we can access pvt members publicly in two ways
//1. as a method calling

//for this we should use method , called get 

function Circle4(radius){
    this.radius  = radius;

    let defaultLocation = {x:1,y:5};//pvt members, can't access outside 

    this.draw = function(){
        console.log('draw');
    }

    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
              throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });
}

const circle4 = new Circle4(20);

//Exercise

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running){
            throw Error('Stopwatch is already running');
        }
        else{
            running = true;
        }

         startTime = new Date();
    }

    this.stop = function(){

        if(!running){
            throw Error('Stopwatch is not start running');
        }
        else{
            running = false;
        }

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration +=seconds;

    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    });
}

const sw = new Stopwatch();

//Property Descriptors
let person = {name : 'Dul'};
let objectBase = Object.getPrototypeOf(person); //= person.__proto__
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
console.log(descriptor);

Object.defineProperty(person, 'name',{
    writable: false, // when person.name = 'Dil' , still Dul is the value of the name key.
    enumerable: false, //when,  Object.keys(person) output is [] empty array
    configurable:false // we can't delete property
});

person.name = 'Dil';
console.log(Object.keys(person));
delete person.name;

//Constructor Prototypes - we can get prototype using Constructor.prototype
//Ex : Circle.prototype

//Prototype vs Instance Members

function Circle4 (radius){
    //instance members (own members)
    this.radius = radius;

    this.move = function (){
        this.draw() // prototype members can access in instance members, also instance members can access in prototype members
        console.log('Move');
    }
}

//prototype members
Circle4.prototype.draw = function(){ //prototype members can add methods
    console.log('Draw');
}

const c1 = new Circle4(1);

Circle4.prototype.toString = function(){
    return 'Circle with radius' + this.radius ;
}

// Iterating Instance and Prototype Members

console.log(Object.keys(c1)); // using Object.keys(c1) only get instance (own) properties

for(let key in c1){ // return all instance and prototype properties
    console.log(key);
}
 // we can check property is own property or not using - c1.hasOwnProperty('radius') => output true

 //Avoid Extending the Built-in Objects
 //Don't modify built in objects

 function Stopwatch1(){
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        },
        set : function(value){
            duration = value;
        }
    });

    Object.defineProperty(this,'startTime',{
        get: function(){
            return startTime;
        }
    });

    Object.defineProperty(this,'endTime',{
        get: function(){
            return endTime;
        }
    });

    Object.defineProperty(this,'running',{
        get: function(){
            return running;
        }
    });
}

Stopwatch1.prototype.start = function(){ 

    if (this.running){
        throw Error('Stopwatch is already running');
    }
    else{
        running = true;
    }

    this.startTime = new Date();
}

Stopwatch1.prototype.stop = function(){

    if(!this.running){
        throw Error('Stopwatch is not start running');
    }
    else{
        this.running = false;
    }

    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime())/1000;
    duration +=seconds;

}


Stopwatch1.prototype.reset = function(){
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}

const sw1 = new Stopwatch1();
sw1.duration = 20;






