var mario,marioImg,cops,chest,chestImg,galactus,buildingImg,building,ground,groundImg,victoryRoyale,victoryRoyaleImg;



function preload(){
  buildingImg=loadImage("images/bank-building.jpg");
  marioImg=loadAnimation("images/marioidle.png",'images/mariowalk.png',"images/mariowalk2.png","images/mariowalk3.png","images/mariowalk4.png");
  chestImg=loadImage("images/chest fortnite.png")
   groundImg=loadImage('images/road.png')
   song = loadSound('images/mario_bros.mp3');
  victoryRoyaleImg = loadImage('images/victoryRoyale.jpg');
}

function setup() {
  createCanvas(1500,1000);
    building=createSprite(750,500);
    building.addImage('building',buildingImg)
    building.scale=4


    ground=createSprite(350,960);
    ground.addImage("ground",groundImg)
    ground.scale=2;


    mario=createSprite(200,900);
    mario.addAnimation('mario',marioImg)
    mario.scale=2

  


  chest=createSprite(1250,900);
  chest.addImage("chest",chestImg)
  chest.scale=0.7

 


 


}
function draw() {
  background("green");
  song.play();
song.stop()

  
  if(keyDown("UP_ARROW")){
    mario.velocityX=5
  }
  
  if(keyWentUp("UP_ARROW")){
      mario.velocityX=0
  }

  if(mario.isTouching(chest)){
    mario.velocityX=0
    var victoryRoyale=createSprite(750,600)
    victoryRoyale.addImage(victoryRoyaleImg)
    victoryRoyale.scale=2
  
  }
   
  



  
  
  drawSprites();
  
 }
                                
 