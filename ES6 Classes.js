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