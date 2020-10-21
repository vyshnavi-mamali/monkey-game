
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
   
  
  
}



function setup() {
  m = createSprite(80,315,20,20);
  m.addAnimation("moving",monkey_running);
m.scale=0.1;
  
ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
   bananasGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background("white")
if(keyDown("space") ) {
 m.velocityY=-5; 
    }
  
    m.velocityY = m.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x=200;
    }
  m.collide(ground);
  
  stroke("white");
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival:"+survivalTime,100,50);
  
   Obstacles();
  Banana();
drawSprites();
  
}

function Banana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var b = createSprite(600,120,40,10);
    b.y = Math.round(random(120,200));
    b.addImage(bananaImage);
    b.scale = 0.1;
    b.velocityX = -3
    
     //assign lifetime to the variable
    b.lifetime = 200;

bananasGroup.add(b);

  }

  }
function Obstacles() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}