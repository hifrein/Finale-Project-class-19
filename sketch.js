var towerImg, tower;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.jpg");
  ghostImg = loadImage("ghost-jumping.png");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.scale = 2.5
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,90);
  ghost.addImage("ghost-jumping.png",ghostImg);
  //ghost.velocityY= 2
  
}

function draw() {
  background(200);
  ghost.scale = .2 

  ghost.velocityY = ghost.velocityY + .05
  
  if(ghost.y > 600){
    console.log("GAME OVER PEOPLE!!")
  }  
  
  if (keyDown("space")){
    ghost.velocityY = ghost.velocityY - 0.9

  }
  
  if(tower.y > 400){
      tower.y = 300
  }
  
  drawSprites();

}