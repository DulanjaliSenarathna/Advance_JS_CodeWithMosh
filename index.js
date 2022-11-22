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