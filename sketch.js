var exitwall;
var wallGroup,guardGroup,player,key;
var gameState="escape",keyflag=0, bg; 
var time = 60;
var guardTime = 20;


function preload(){
   soldierf = loadAnimation("images/soldierFront1.png","images/soldierFront2.png","images/soldierFront3.png");
   soldierb = loadAnimation("images/soldierBack1.png","images/soldierBack2.png","images/soldierBack3.png");
   soldierl = loadAnimation("images/soldierLeft1.png","images/soldierLeft2.png","images/soldierLeft3.png");
   soldierr = loadAnimation("images/soldierRight1.png","images/soldierRight2.png","images/soldierRight3.png");

   playerf = loadAnimation("images/playerFront1.png","images/playerFront2.png","images/playerFront3.png");
   playerb = loadAnimation("images/playerBack1.png","images/playerBack2.png","images/playerBack3.png");
   playerl = loadAnimation("images/playerLeft.png","images/playerLeft1.png","images/playerLeft2.png","images/playerLeft3.png");
   playerr = loadAnimation("images/playerRight.png","images/playerRight1.png","images/playerRight2.png","images/playerRight3.png");

   Key = loadImage("images/key.png");
   Lock = loadImage("images/lock.png");
   Unlock = loadImage("images/unlocking.png");// To display it while unlocking the lock.
   Treasure = loadImage("images/treasure.png");
   Antique = loadImage("images/antique.png");
   bg = loadImage("images/background.jpg");

}


function setup() {
  createCanvas(1350,650);
  wallGroup = new Group();
  createWalls();
  exitwall = createSprite(5, 620, 10, 100);

  //CHARACTERS
  //npc
  guardGroup = new Group();
  createGuards();
  //highest
  key1 = createSprite(950,40);
  key1.addImage("keys",Key);
  key1.scale = 0.08;
  //key1.debug = true;
  key1.setCollider("rectangle",0,0,400,300);
  //highest
  lock1 = createSprite( 50, 125);
  lock1.addImage("locks",Lock);
  lock1.scale = 0.13;

  //high-middle
  key2 = createSprite(200,100);
  key2.addImage("keys",Key);
  key2.scale = 0.08;
  //key2.debug = true;
  //high-middle
  lock2 = createSprite( 50, 275);
  lock2.addImage("locks",Lock);
  lock2.scale = 0.13;

  key2.setCollider("rectangle",0,0,400,300);
  //lower
  key3 = createSprite(580,625);
  key3.addImage("keys",Key);
  key3.scale = 0.08;
  //key3.debug = true;
  key3.setCollider("rectangle",0,0,400,300);
  //high-middle
  lock3 = createSprite(850, 560);
  lock3.addImage("locks",Lock);
  lock3.scale = 0.13; 

  treasure = createSprite(50,60);
  treasure.addImage("treasure",Treasure);
  treasure.scale = 0.4;
  //treasure.debug = true;
  treasure.setCollider("rectangle", 0, 0, 90, 190);

  antique = createSprite(1270,618);
  antique.addImage("antique",Antique);
  antique.scale = 0.08;
   
  player = createSprite( 30,615);                             //30, 615
  //player.debug = true;
  player.setCollider("rectangle",0,0,player.width-120,player.height-55)

  player.addAnimation("front",playerf);
  player.addAnimation("back",playerb);
  player.addAnimation("left",playerl);
  player.addAnimation("right",playerr);

}           

function draw() {
  background(bg);  

  console.log("x: " + player.x);
  console.log("y: " + player.y);
  if(gameState === "play"){
    pc();
    player.collide(wallGroup);
    
    guard1.guardMovingAnimation();
    if(player.y > 160){
      guard1.followPlayer();
    }
    guard2.guardMovingAnimation();
    if(player.y < 110){
      guard2.followPlayer();
  }
    guard3.guardMovingAnimation();
    if(player.y > 425){   
      guard3.followPlayer();
    }
    guard4.guardMovingAnimation();
    if(player.y > 205){
      guard4.followPlayer();
    }
    guard5.guardMovingAnimation();
    if(player.x < 980 && player.y > 555){
      guard5.followPlayer();
  }
    guard6.guardMovingAnimation();
    if(player.y > 80){
      guard6.followPlayer();
    }
    guard7.guardMovingAnimation();
    if(player.x > 840){
    guard7.followPlayer();
  }
    guard8.guardMovingAnimation();
    if(player.y > 350){
    guard8.followPlayer();
    }
    guard9.guardMovingAnimation();
    if(player.y < 96){
      guard9.followPlayer();}
    guard10.guardMovingAnimation();
    if(player.x < 1200 && player.x > 1110){
    guard10.followPlayer();}

    //KEY
    
    if(player.isTouching(key1)){
      key1.destroy();
      keyflag = 1;
    }
    if(keyflag === 1){
      image(Key,1310,1,35,30)
    }

    if(player.isTouching(key3)){
      key3.destroy();
      keyflag = 2;
    }
    if(keyflag === 2){
      image(Key,1275,1,35,30)
    }

    if(player.isTouching(key2)){
      key2.destroy();
      keyflag = 3;
    }
    if(keyflag === 3){
      image(Key,1240,1,35,30)
    }


    //COLLECTING TREASURE
    if(player.isTouching(treasure)){
      //var currentframe = frameCount;
      console.log("time: " + time);
      if(keyDown("space")){
        time = time-1;
      }
      if(time<1){
        console.log("treasure collected");
        textSize(50);
        //fill("blue");
        text("Collected! Go back to exit to win",400,300);
        treasure.destroy();
        //TreasureFlag
        image(Treasure,1210,1,35,30);
      } 
      //console.log("currentframe: " + currentframe);
    }

    if(player.isTouching(antique)){
      if(keyDown("space")){
        antique.destroy();
        image("Antique",1280,1,35,30);
      }
    }
    
    if(guardGroup.isTouching(player)){
      guardTime = guardTime-1;
      if(guardTime<1){
        gameState ="lose";
      }
      //guardTime < 1 --> end state/lose state
    }
  }

  else if(gameState === "escape"){
    textSize(30);
    fill("red");
    text("<---- EXIT",40,620)
    exitwall.destroy();
    pc();
    player.collide(wallGroup);
    
    guard1.guardMovingAnimation();
    guard1.followPlayerEscape();
    guard2.guardMovingAnimation();
    guard2.followPlayerEscape();
    guard3.guardMovingAnimation();
    guard3.followPlayerEscape();
    guard4.guardMovingAnimation();
    guard4.followPlayerEscape();
    guard5.guardMovingAnimation();
    guard5.followPlayerEscape();
    guard6.guardMovingAnimation();
    guard6.followPlayerEscape();
    guard7.guardMovingAnimation();
    guard7.followPlayerEscape();
    guard8.guardMovingAnimation();
    guard8.followPlayerEscape();
    guard9.guardMovingAnimation();
    guard9.followPlayerEscape();
    guard10.guardMovingAnimation();
    guard10.followPlayerEscape();


    if(player.x < 0){
      gameState = "win";
    }
  }

  if(gameState === "win"){
    text("Game Won",200,200);
    textSize(100);
    fill("green");
    destroy();
  }

  if(gameState === "lose"){
    text("Game lost",200,200);
    textSize(100);
    fill("red");
    destroy(); 
  }

  drawSprites();
}