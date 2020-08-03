var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(200,200,20,30);
  movingRect.shapeColor = "green";
}

function draw() {

  background("black");  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    ){
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}