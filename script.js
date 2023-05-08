


const Canvas =   (document.querySelector('canvas'));

c=Canvas.getContext('2d');



Canvas.width=window.innerWidth;
Canvas.height=window.innerHeight;



class Boundary {
    constructor({position,color}){
        this.position=position
        this.height=40
        this.width=40
        this.color=color || this.color;
    }
    draw(){
        c.fillStyle=this.color;
        c.fillRect(this.position.x,this.position.y,this.height,this.width);

    }
    color='purple';
}

let boxes=[];

function createBoxes(){
    let boxPosX=400;
    let boxPosY=10;
    for(let i=0;i<=10;i++){
        
        boxes.push(new Boundary({position:{x:boxPosX,y:boxPosY}}));
        boxPosY+=41;
        

    }
    console.log(boxes)
}
createBoxes();

let box= new Boundary({position:{
    x:250,
    y:250
}})





box2=new Boundary({position:{x:300,y:300}})
box2.draw();

function drawBoxes(){
    for(box of boxes){
        console.log(box);
        console.log(box.position.y);
        box.draw();
    }
}

drawBoxes();