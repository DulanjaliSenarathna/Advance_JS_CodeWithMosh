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

const circle1 = new createCircle(1);
circle1.draw();