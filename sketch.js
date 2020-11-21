
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(200, 310, 20,20 );
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(200,350, 450, 20);
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate() );
  text("survivalTime =" + survivalTime, 100, 50 );
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;

  }
  if(ground.x > 0){
    ground.x = ground.width/2;
  }
  monkey.velocityY = monkey.velocityY+1;
  monkey.collide(ground);
  ground.velocityX = 3;
  food();
  obstacles();
  drawSprites();
}

function food() {
    if (frameCount % 80 === 0) {
      r = Math.round(random(120, 200));
      banana = createSprite(400,r, 20, 20);
      banana.velocityX = -2;
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.lifetime = 200;
      bananaGroup.add(banana);
    }
}

function obstacles() {
    if (frameCount %300 === 0) {
      stone = createSprite(400,320, 20, 20);
      stone.velocityX = -2;
      stone.addImage(obstacleImage);
      stone.scale = 0.1;
      stone.lifetime = 200;
      obstacleGroup.add(stone);
    }
}