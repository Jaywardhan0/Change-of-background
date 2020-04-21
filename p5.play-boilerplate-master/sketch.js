var bg
function setup() {
createCanvas(400,400)
//bg = createSprite(200,200,600,600)
}

function draw() {
  background(mouseX,mouseY,mouseX);  
  ellipse(mouseX,mouseY,60,60)
  drawSprites();
  
}
