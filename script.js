


const Canvas =   (document.querySelector('canvas'));

c=Canvas.getContext('2d');



Canvas.width=window.innerWidth;
Canvas.height=window.innerHeight;

class Boundary {
    constructor({position}){
        this.position=position
        this.height=200
        this.width=200
    }
}


function draw(b){
    c.fillStyle='blue';
    c.fillRect(b.position.x,b.position.y,b.height,b.width);
    console.log( b)
    console.log(b.position.x)
    console.log('drawing...')
}

let box= new Boundary({position:{
    x:250,
    y:250
}})

console.log(box)

c.fillStyle='blue';
c.fillRect(box.position.x,box.position.y,box.height,box.width);
c.fillRect(100,100,100,100);




