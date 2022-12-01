//implementation detail - hiding - abstraction
const _radius =  new WeakMap();

//public interface
class Circle{
    constructor(radius){
        _radius.set(this,radius);
    }

    draw(){
        console.log('Circle with radius' + _radius.get(this));
    }

}

modules.exports= Circle;