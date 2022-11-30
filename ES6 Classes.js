//Es6 classes

class Circle{ //Es6 class is a function =>typeof Circle => function
    constructor(radius){
        this.radius = radius;
        //if you don't want to add method to prototype, you need to desclare it in constructor

        this.move = function(){
            console.log('move');
        }
    }

    draw(){ //outside the constructor function , this method is in prototype
        console.log('draw');
    }
}

const c = new Circle(1);

//Hoisting

//function declararions are hoisted - raise to the top when executing. we can call the method before it declare

//function declararion 

Car(); //no errors and gives output

function Car(){
    console.log('car');
}

//function expressions - not hoisted. we can't call the method before it declare

//Bus(); //gives error
const Bus = function(){
    console.log('Bus');
}

//Class declaration - not hoisted. we can't create object using class before it declaring
//const l = new Lorry(); gives an error
class Lorry{

}

//class expression -not hoisted. we can't create object using class before it declaring
//const l = new Van(); gives an error
const Van = class{

}

