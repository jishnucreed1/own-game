var mario,marioImg,cops,chest,chestImg,galactus,buildingImg,building,ground,groundImg;



function preload(){
  buildingImg=loadImage("images/bank-building.jpg");
  marioImg=loadAnimation("images/marioidle.png",'images/mariowalk.png',"images/mariowalk2.png","images/mariowalk3.png","images/mariowalk4.png");
  chestImg=loadImage("images/chest fortnite.png")
   groundImg=loadImage('images/road.png')
   song = loadSound('images/mario_bros.mp3');
}

function setup() {
  createCanvas(1500,1000);
    building=createSprite(750,500);
    building.addImage('building',buildingImg)
    building.scale=4

  mario=createSprite(250,850);
  mario.addAnimation('mario',marioImg)
  mario.scale=2

  chest=createSprite(1250,850);
  chest.addImage("chest",chestImg)

 ground=createSprite(350,960);
 ground.addImage("ground",groundImg)
 ground.scale=2;

 


}
function draw() {
  background("green");
  song.play();
  song.stop();


  
  
  drawSprites();
  
 }
                                
 