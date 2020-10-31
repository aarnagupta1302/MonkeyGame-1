
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  foodGroup = new Group();
  obstacleGroup = new Group ();
  
 
}



function setup() {
  
  ground = createSprite(400,350,900,10);
  
  ground.velocityX = -4;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" ,monkey_running);
  monkey.scale = 0.1;

  background = "white";
}


function draw() {
if(keyDown === ("space")){
  monkey.velocityY = -3;
  monkey.velocityY = monkey.velocityY  + 0.8;
}
  
ground.x = ground.width/2;
  
  food();
  obstacles();
  survive();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ",score,500,50);
  
  drawSprites();
  
}

function food(){
  if(World.framecount%80 === 0){
     banana = createSprite(0,0,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.setLifetime = 150;
    foodGroup.add(banana);
     }
  
}
function obstacles(){
  if(World.framecount%300 === 0){
    obstacle = createSprite(20,50,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.setLifetime = 150;
    obstacleGroup.add(obstacle);
    
}







}

function survive(){
  
  
  stroke("black");
  textSize(20);
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime:", survivalTime, 100,50);
}
  