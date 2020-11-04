var socket;
const cv = document.querySelector("#canvas");


function setup() {  
  /* cv = createCanvas(500, 500); */
  /* cv.position(400, 400);
  cv.background(51); */

  /* socket=io.connect('http://localhost:3000'); */
  socket = io();
  socket.on('mouse', newDrawing(data));
}

function newDrawing(data){
  console.log("yes");
  noStroke();
  fill(255);
  ellipse(data.x,data.y,36,36);
}

function mouseDragged()
{
  console.log('sending'+mouseX + ',' + mouseY);
  var data={
    x:mouseX,
    y:mouseY
  }
  socket.emit('mouse',data);
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,36,36);
}


function draw() {
  
}
