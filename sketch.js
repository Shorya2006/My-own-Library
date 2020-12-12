var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(400,120,50,30);
  obj1.shapeColor="orange";
  obj2 = createSprite(290,230,40,30);
  obj2.shapeColor="orange";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  obj1.x=mouseX;
  obj1.y=mouseY;

  if(isTouching(obj1,obj2)){
    obj1.shapeColor="yellow";
    obj2.shapeColor="yellow";
  }else{
    obj1.shapeColor="orange";
    obj2.shapeColor="orange";
  }
  
  drawSprites();
}

