
var monkey , monkey_running , ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
 createCanvas(600,400) 

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.1;
   
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
}

function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=survivalTime+Math.round(getFrameRate()/60)
  text("Survival Time:"+ survivalTime,100,50)
    
 if(keyDown("space")) {
   monkey.velocityY= -16;
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  ground.x=ground.width/2;
  
  food();
  stone(); 
  
  drawSprites(); 
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y= Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    }
}

function stone() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.y= 330;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -4;  
    obstacle.lifetime = 170; 
    }  
}