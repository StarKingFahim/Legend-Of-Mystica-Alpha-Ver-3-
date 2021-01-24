//The Map Parts

var village,villageImg;

var House1,House1Img;

var House2,House2Img;

var Land1,Land1Img;

var Land2,Land2Img;

var Dungeon,DungeonImg;

//

// var villager=[];

var O_Man,O_Woman,Man,Woman,Boy,Girl;

var O_ManImg,O_WomanImg,ManImg,WomanImg,BoyImg,GirlImg;

var Man_idle;

//

//Sound

var villageSound;

//

//Main_Characters

var Adam,Adam_W_UP=[],Adam_W_DOWN=[],Adam_W_RIGHT=[],Adam_W_LEFT=[];


//

//Enemy

var Enemy;

//

//GameStates

/*var In_Village=0;
var In_House=1
*/

//var gameState=In_Village;

//triggers

var HouseTrigger1,HouseOutTrigger1;

var HouseTrigger2,HouseOutTrigger2;

var DungeonTriger,DungeonOutTriger;

//

//Barriers

var Borders=[];
var B1,B2,B3,B4,B5,B5,B6,B7,B8,B9,B10;

//











function preload()
{
  villageImg=loadImage("Maps Made/Original Map Ver.2.png");
  
  House1Img=loadImage("Maps Made/House Inside 1.png");
  
  House2Img=loadImage("Maps Made/House Inside 2.png");

  Land1Img=loadImage("Maps Made/Landscape 1 Ver.1.png");

  Land2Img=loadImage("Maps Made/Landscape 2 Ver.1.png");

  DungeonImg=loadImage("Maps Made/Tutorial Dungeon.png");
  
  O_ManImg = loadImage("NPC and PC/Villagers/1 Old_man/Old_man.png");
  O_WomanImg = loadImage("NPC and PC/Villagers/2 Old_woman/Old_woman.png");
  
  ManImg = loadImage("NPC and PC/Villagers/3 Man/Man.png");
  
  Man_idle = loadAnimation("NPC and PC/Villagers/3 Man/Man_Idle/I1.png","NPC and PC/Villagers/3 Man/Man_Idle/I2.png","NPC and PC/Villagers/3 Man/Man_Idle/I3.png","NPC and PC/Villagers/3 Man/Man_Idle/I4.png");
  
  Man_walk = loadAnimation("NPC and PC/Villagers/3 Man/Man_Walk/W1.png","NPC and PC/Villagers/3 Man/Man_Walk/W2.png","NPC and PC/Villagers/3 Man/Man_Walk/W3.png","NPC and PC/Villagers/3 Man/Man_Walk/W4.png","NPC and PC/Villagers/3 Man/Man_Walk/W5.png","NPC and PC/Villagers/3 Man/Man_Walk/W6.png");

  WomanImg =loadImage("NPC and PC/Villagers/4 Woman/Woman.png");

  BoyImg = loadImage("NPC and PC/Villagers/5 Boy/Boy.png");
  GirlImg =loadImage("NPC and PC/Villagers/6 Girl/Girl.png");
 
  villageSound = new Audio("Sound Tracks/Calm village.wav");
  
  
  //Main Characters

  Adam = loadImage("Main Characters/Adam_Walking/Adam (19).png");


  for(var i= 0;i<9;i++)
  {
  Adam_W_UP[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  for(var i= 9;i<18;i++)
  {
  Adam_W_LEFT[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  for(var i= 18;i<27;i++)
  {
  Adam_W_DOWN[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  for(var i= 27;i<36;i++)
  {
  Adam_W_RIGHT[(i+1)] = loadImage("Main Characters/Adam_Walking/Adam ("+(i+1)+").png");
  }
  



  
  
  //All THE CHARACTERS //
}

function setup()
{

 canvas = createCanvas(displayWidth,displayHeight);
  
 village=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight*2)
 // image(villageImg,0,displayHeight*4,displayWidth,displayHeight*2);

 village.addImage(villageImg);
 village.scale=5.30;
 village.depth=1;


 House=createSprite(10000,10000,10,10);
 House.addImage(House1Img);
 House.scale=3;
 House.depth=1; 

 House2=createSprite(15000,10000,10,10);
 House2.addImage(House2Img);
 House2.scale=3;
 House2.depth=1; 

 Dungeon=createSprite(20000,10000,10,10);
 Dungeon.addImage(DungeonImg);
 Dungeon.scale=6;
 Dungeon.depth=1; 


 Land1=createSprite(displayWidth/2,-3690,displayWidth*2,displayHeight*2);
 Land1.addImage(Land1Img);
 Land1.scale=5.30;
 Land1.depth=0;

 Land2=createSprite(6890,displayHeight/2,displayWidth*2,displayHeight*2);
 Land2.addImage(Land2Img);
 Land2.scale=5.30;
 Land2.depth=0;

//MAIN CHARACTERS

Adam=createSprite(300,300,15,30);



//

 //villager.push(O_Man,O_Woman,Man,Woman,Boy,Girl)


 O_Man=createSprite(200,300,100,100);
 O_Man.addImage(O_ManImg);
 O_Man.scale=5;
 O_Man.depth=2;
 //O_Man.wander();

 O_Woman=createSprite(500,200,100,100);
 O_Woman.addImage(O_WomanImg);
 O_Woman.scale=5;
 O_Woman.depth=2;

 Man=createSprite(-1550,-1060,15,30);// 20000,10000,15,30//
 //Man.addImage(ManImg);
 Man.velocityY=0;
 Man.scale=5;
 Man.depth=2;
 Man.setCollider("rectangle",-10, 5,18,40);
// Man.debug=true;

 Woman=createSprite(1200,800,100,100);
 Woman.addImage(WomanImg);
 Woman.scale=5;
 Woman.depth=2;

 Boy=createSprite(200,500,100,100);
 Boy.addImage(BoyImg);
 Boy.scale=5;
 Boy.depth=2;

 Girl=createSprite(300,800,100,100);
 Girl.addImage(GirlImg);
 Girl.scale=5;
 Girl.depth=2;


 //Triggers

 HouseTrigger1=createSprite(1340,80,10,1);
 HouseTrigger1.visible=true;

 HouseOutTrigger1=createSprite(9960,11210,100,10);
 HouseOutTrigger1.visible=true;


 HouseTrigger2=createSprite(9010,1710,1,1);
 HouseTrigger2.visible=false;

 HouseOutTrigger2=createSprite(14930,10550,1,1);
 HouseOutTrigger2.visible=false;

 DungeonTriger=createSprite(13600,10520,1,1);
 DungeonTriger.visible=false;

 DungeonOutTriger=createSprite(20150,9870,10,10);
 DungeonOutTriger.visible=false;


 //

 //Barriers

 B1= createSprite(-483 ,-1480,3050,100);
 B1.visible=false;
 //B1.debug=true; 

 B2= createSprite(1683 ,-1480,700,100);
 B2.visible=false;
 //B2.debug=true; 

 B3= createSprite(-483 ,-1780,3050,100);
 B3.visible=false;
 //B3.debug=true; 

 B4= createSprite(1683 ,-1780,700,100);
 B4.visible=false;
 //B4.debug=true; 

 B5= createSprite(620 ,-1255,125,100);
 B5.visible=false;
 //B5.debug=true; 

 B6= createSprite(1050 ,-1160,125,100);
 B6.visible=false;
 //B6.debug=true; 

 B6= createSprite(-822.5 ,-1055,250,100);
 B6.visible=true;
 //B6.debug=true; 


 // -1155

 Man.debug=true;

 //

}

function draw()
{
 
  background("black");
 
  console.log(Man.x,Man.y);

  villageSound.play();
  villageSound.loop = true;


 //  

 
 if(keyWentDown(UP_ARROW))
  {
    Man.velocityY=-100;
    Man.addAnimation("walk ",Man_walk);
  }
  else if(keyDown(DOWN_ARROW))
  {
    Man.velocityY= 100;
    Man.addAnimation("walk2 ",Man_walk);

  }
  else if(keyDown(RIGHT_ARROW))
  {
    Man.mirrorX(1);
    Man.addAnimation("walk3 ",Man_walk);
    Man.velocityX= 100;
    
  }
  else if(keyDown(LEFT_ARROW))
  {
    Man.mirrorX(-1);
    Man.addAnimation("walk4 ",Man_walk);
    Man.velocityX= -100;
    
  }

  if(keyDown(UP_ARROW)&&keyDown(LEFT_ARROW)) {
    Man.velocityX = -10;
    Man.velocityY = -10;
  }
  if(keyDown(UP_ARROW)&&keyDown(RIGHT_ARROW)) {
    Man.velocityX = 10;
    Man.velocityY = -10;
  }
  if(keyDown(DOWN_ARROW)&&keyDown(LEFT_ARROW)) {
    Man.velocityX = -10;
    Man.velocityY = 10;
  }
  if(keyDown(DOWN_ARROW)&&keyDown(RIGHT_ARROW)) {
    Man.velocityX = 10;
    Man.velocityY = 10;
  }


  
    if(keyWentUp(UP_ARROW))
    {
      Man.velocityY=0;
    }
    else if(keyWentUp(DOWN_ARROW))
    {
      Man.velocityY=0;
    }
    else if(keyWentUp(RIGHT_ARROW))
    {
      Man.velocityX=0;
      
    }
    else if(keyWentUp(LEFT_ARROW))
    {
      Man.velocityX=0;
    }  
    



    if(Man.velocityX===0 && Man.velocityY===0)
    {
     // Man.addAnimation("idle",Man_idle);
    }

  
camera.x=Man.x;
camera.y=Man.y;

  //House Triggers

 if(Man.isTouching(HouseTrigger1))
 {
   //gameState=1;
   Man.scale=6;
   Man.x=9960;
   Man.y=10960;
 }
 if(Man.isTouching(HouseOutTrigger1))
 {
   //gameState=1;
   Man.scale=5;
   Man.x=1370;
   Man.y=230;
 }


 if(Man.isTouching(HouseTrigger2))
 {
   Man.scale=6;
   Man.x=15010;
   Man.y=10290;
 }

 if(Man.isTouching(HouseOutTrigger2))
 {
   //gameState=1;
   Man.scale=5;
   Man.x=9110;
   Man.y=2020;
 }

 if(Man.isTouching(DungeonTriger))
 {
   Man.scale=6;
   Man.x=21990;
   Man.y=11960;
    
 }

 if(Man.isTouching(DungeonOutTriger))
 {
   //gameState=1;
   Man.scale=5;
   Man.x=9050;
   Man.y=2000;
    
 }
 



 //

/*if(gameState===0)
 {
   village.visible=true;
   
   O_Man.visible=true;
   O_Woman.visible=true;
   Man.visible=true;
   Woman.visible=true;
   Boy.visible=true;
   Girl.visible=true;
 }*/  

/* if(gameState===1)
 {
  village.visible=false;
   
  O_Man.visible=true;
  O_Woman.visible=false;
  Man.visible=false;
  Woman.visible=false;
  Boy.visible=false;
  Girl.visible=false;
 }
   */
//Colliders Function

  Man.collide(B1);
  Man.collide(B2);
  Man.collide(B3);
  Man.collide(B4);
  Man.collide(B5);
  Man.collide(B6);
  //Man.collide(B7);
  //Man.collide(B8);
  //Man.collide(B9);
  //Man.collide(B10);

 
  drawSprites();
}


//Villager Ai

