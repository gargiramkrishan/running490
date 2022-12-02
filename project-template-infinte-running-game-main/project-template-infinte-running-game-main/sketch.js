var p,playerImg;
var roa,roadimg;
var laser,lasere;
var Play,Score,End,GameState;
var imaginary,imaginaryline;
var car,carimg,car2 ,carimg2,car3,carimg3;
var game,gameover;

function preload()
{
   playerImg = loadAnimation("sonic-the-hegdehog-sonic.gif")
   roadimg = loadImage("360_F_278372288_RmVLxrzK3rjERKyxXSrME28z5vPicZsu.jpg")
   carimg = loadImage("Emira_Side_Low_DB_cropped.png")
   carimg2 = loadImage("Emira_Side_Low_DB_cropped4.png")
   carimg3 = loadImage("Emira_Side_Low_DB_cropped9.png")
   lasere = loadImage("b1cc7b451ef286cd5928d62f99fd9417.gif")
   gameover = loadImage("game-over-neon-sign-brick-wall-background-86413715.jpg")
   Score = 0
   Play = 1;
   End = 0;
   GameState = Play;
}

function setup() 
{
  createCanvas(windowWidth,windowHeight)
  car = createSprite(999999999999999999999999999,655555555555555555555555555580)
  roa = createSprite(width/2,height/2)
  roa.addImage("roadddddd",roadimg)
  roa.velocityX = -12
  roa.scale = 3
  p = createSprite(width / 40,600)
  p.addAnimation("player",playerImg)
  p.scale = 1
  imaginaryline = createSprite(200,900,400,350)
  imaginaryline.visible = false;
  obstacle = new Group()
}

function draw() 
{
 background("black")
 drawSprites();
 text("Score" + Score,width/2,height/2)
 if(GameState == Play)
 {
    p.collide(imaginaryline)
    Score = Score + 1
    p.velocityY = p.velocityY +0.17
    if(roa.x < 820)
    {
      roa.x = width/2,height/2;
    }
    if(keyDown("space"))
    {
         p.y = p.y - 13
    }
    car.velocityX = -9
    if(obstacle.isTouching(p))
    {
         GameState = End
         game = createSprite(width/2,height/2)
         game.addImage("overfff",gameover)
    }
    object()
    
 }
 else if(GameState == End)
 {
         p.destroy()
         roa.destroy()
         p.visible = false
         roa.visible = false
         object.destroy()
         text("You lost",width/2,height/2)
         noStroke();
 }

}
function object()
{
         if(frameCount%100==0)
         {
                  car = createSprite(1070,height/1.5)
                  car.scale = 0.3
                  car.setCollider("circle",0,0,300)
                  car.debug = false
                  car.x = Math.round(random(600,3000))
                  car2 = Math.round(random(1,3))
                  car.velocityX = -9
                  switch(car2)
                  {
                     case 1 : car.addImage(carimg)
                     break
                     case 2 : car.addImage(carimg2)
                     break
                     case 3 : car.addImage(carimg3)
                     break
                     default:
                           break
                  }
                  obstacle.add(car)
         }
}