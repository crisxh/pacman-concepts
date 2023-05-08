c.beginPath();
c.arc(100, 75, 50, 0, 2 * Math.PI);
c.strokeStyle='red';
c.stroke(); 

c.beginPath();
c.arc(300,300,300,0*Math.PI,1.5*Math.PI);
c.strokeStyle='purple';
c.stroke();

//control box 

c.fillStyle='blue';
c.fillRect(box.position.x,box.position.y,box.height,box.width);
c.fillRect(100,100,100,100);