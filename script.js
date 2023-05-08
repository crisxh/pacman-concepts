


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



function createBoxes(startX,startY,color,number,orientation){
    let boxPosX=startX;
    let boxPosY=startY;
    let boxes=[];
    for(let i=0;i<number;i++){
        
        boxes.push(new Boundary({position:{x:boxPosX,y:boxPosY},color:color}));
        if(orientation==='v'){
            boxPosY+=40;

        }else if(orientation==='h'){
            boxPosX+=40

        }
        
        

    }
    return boxes;
}
let leftBoxes= createBoxes(40,10,'grey',10,'v');
let rightBoxes=createBoxes(400,10,'pink',10,'v');
let topBoxes=createBoxes(40,10,'blue',10,'h')

let box= new Boundary({position:{
    x:250,
    y:250
}})





box2=new Boundary({position:{x:300,y:300}})
box2.draw();

function drawBoxes(array){
    for(box of array){
        console.log(box);
        console.log(box.position.y);
        box.draw();
    }
}

drawBoxes(leftBoxes);
drawBoxes(rightBoxes);
drawBoxes(topBoxes);