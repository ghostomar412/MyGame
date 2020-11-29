var bgIMG
var earth,earthIMG
var shooter,shooterIMG
var bullet,bulletIMG
var astr,astr1,astr2
function preload(){
  bgIMG=loadImage("Images/bgIMG.png")
  earthIMG=loadImage("Images/earth.png")
  shooterIMG=loadImage("Images/shooter.png")
  astr1=loadImage("Images/astr1.png")
  astr2=loadImage("Images/astr2.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  earth=createSprite(75,height/2);
  earth.addImage(earthIMG);

  shooter=createSprite(200,height/2);
  shooter.addImage(shooterIMG)
  shooter.scale=0.3
  
  
}

function draw() {
  background(bgIMG);
  if(keyDown(UP_ARROW)){
    shooter.y=shooter.y-10
  }  
  if(keyDown(DOWN_ARROW)){
    shooter.y=shooter.y+10
  }  
  if(keyDown("space")){
    spawnBullet();
  }
  spawnAstr();
  drawSprites();
}
function spawnBullet(){

  bullet=createSprite(250,shooter.y,30,10)
  bullet.shapeColor=("red")
  bullet.velocityX=10
}
function spawnAstr(){
  if(frameCount%60===0){
  var astr=createSprite(width,random(0,height),20,20)
  var ran=Math.round(random (1,2))
  switch(ran){
    case 1:astr.addImage(astr1);
    break;
    case 2:astr.addImage(astr2);
    break;
    default:break
  }
  astr.velocityX=-10
}
}