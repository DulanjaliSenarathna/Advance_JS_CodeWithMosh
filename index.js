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




