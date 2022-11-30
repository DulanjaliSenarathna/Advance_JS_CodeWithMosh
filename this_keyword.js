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

draw();//output undefined, whether strict mode or not, because of method inside class declaration behave like strict mode. (don't give output as windows.object)
