


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
    draw(){
        c.fillStyle='red';
        c.fillRect(this.position.x,this.position.y,this.height,this.width);

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

box2=new Boundary({position:{x:300,y:300}})
box2.draw();

