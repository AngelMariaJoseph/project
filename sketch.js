var backgroundImg,background;
var obstacleImg, obstacle,obstaclesGroub;
var runner, RunnerImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  backgroundImg = loadImage("mountain-night-game-background-vector-21861282.jpeg");
  obstacleImg = loadImage("obstacle.png");
  RunnerImg = loadImage("giphy.gif");
  obstaclesGroup=new Group();
  invisibleBlockGroup=new Group();

}

function setup() {
  createCanvas(600, 600);
  background = createSprite(300,300);
  background.velocityX=1

  runner=createSprite(200,200,50,50)
  runner.scale=0.3
  runner.addImage(RunnerImg)
  
}

function draw() {
  background(200);
  if(gameState==="play"){

  
  if(background.x > 400){
      backgroundImg.x = 300
    }
    
    if(keyDown("space")){
      runner.velocityX= -3
    }
    runner.velocityX=runner.velocityX+0.8
    if(obstaclesGroub.isTouching(runner)){
      runner.velocityX=0 
      gameState="end"
    }
    spawnobstacles();
    if(gameState==="end"){
      text("gameover",230,250)
    }
  }
    drawSprites(); 
}

function spawnobstacles(){
if(frameCount%240===0){
  var obstacle=createSprite(200,-50);
  obstacle.addImage(obstacleImg);
  obstacle.x=Math.round(random(120,400))
  obstacle.velocityX=1
  obstacle.lifetime=800
  obstaclesGroup.add(door)

  runner.depth=obstacle.depth
  runner.depth=runner.depth+1

  var invisibleBlock=createSprite(200,50)
  invisibleBlock.width=obstacle.width
  invisibleBlock.height=2
  invisibleBlock.x=obstacle.x
  invisibleBlock.velocityY=1
  invisibleBlockGroup.add(invisibleBlock)
}

}