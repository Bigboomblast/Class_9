var box
function setup() {
  createCanvas(400,400);
  box=createSprite(100,100,50,50)
}

function draw() 
{
  background(30);
  if(keyDown("left"))
  {
    box.x=box.x-5
  }
  if(keyDown("right"))
  {
    box.x=box.x+5
  }
  if(keyDown("down"))
  {
    box.y=box.y+5
  }
  if(keyIsDown(UP_ARROW))
  {
    box.position.y=box.position.y-5
  }
drawSprites()
}




