function createWalls(){ 
    
    //boundary
    //lower
    wall1 = new Walls(50, 645, 100, 10);
    wall2 = new Walls(150, 645, 100, 10);
    wall3 = new Walls(250, 645, 100, 10);
    wall4 = new Walls(350, 645, 100, 10);
    wall5 = new Walls(450, 645, 100, 10);
    wall6 = new Walls(550, 645, 100, 10);
    wall7 = new Walls(650, 645, 100, 10);
    wall8 = new Walls(750, 645, 100, 10);
    wall9 = new Walls(850, 645, 100, 10);
    wall10 = new Walls(950, 645, 100, 10);
    wall11 = new Walls(1050, 645, 100, 10);
    wall12 = new Walls(1150, 645, 100, 10);
    wall13 = new Walls(1250, 645, 100, 10);
    wall14 = new Walls(1350, 645, 100, 10);
    //right
    wall15 = new Walls(1345, 620, 10, 100);
    wall16 = new Walls(1345, 520, 10, 100);
    wall17 = new Walls(1345, 420, 10, 100);
    wall18 = new Walls(1345, 320, 10, 100);
    wall19 = new Walls(1345, 220, 10, 100);
    wall20 = new Walls(1345, 120, 10, 100);
    wall21 = new Walls(1345, 20, 10, 100);
    //upper
    wall22 = new Walls( 50, 5, 100, 10);
    wall23 = new Walls(150, 5, 100, 10);
    wall24 = new Walls(250, 5, 100, 10);
    wall25 = new Walls(350, 5, 100, 10);
    wall26 = new Walls(450, 5, 100, 10);
    wall27 = new Walls(550, 5, 100, 10);
    wall28 = new Walls(650, 5, 100, 10);
    wall29 = new Walls(750, 5, 100, 10);
    wall30 = new Walls(850, 5, 100, 10);
    wall31 = new Walls(950, 5, 100, 10);
    wall32 = new Walls(1050, 5, 100, 10);
    wall33 = new Walls(1150, 5, 100, 10);
    wall34 = new Walls(1250, 5, 100, 10);
    wall35 = new Walls(1350, 5, 100, 10);
    //left
    wall37 = new Walls(5, 520, 10, 100);
    wall38 = new Walls(5, 420, 10, 100);
    wall39 = new Walls(5, 320, 10, 100);
    wall40 = new Walls(5, 220, 10, 100);
    wall41 = new Walls(5, 120, 10, 100);
    wall42 = new Walls(5, 20, 10, 100);
    //maze
    wall43 = new Walls(100, 585, 100, 10);
    wall44 = new Walls(100, 525, 100, 10);
    wall45 = new Walls(200, 590, 10, 100);
    wall46 = new Walls(200, 450, 100, 10);
    wall47 = new Walls(250, 550, 10, 100);
    wall48 = new Walls(300, 595, 100, 10);
    wall49 = new Walls(350, 550, 10, 100);
    wall50 = new Walls(400, 550, 10, 100);
    wall51 = new Walls(450, 595, 100, 10);
    wall52 = new Walls( 80, 450, 150, 10);
    wall53 = new Walls( 50, 280, 100, 10);/*high-middle door*/
    wall54 = new Walls(550, 590, 10, 130);
    wall55 = new Walls(500, 530, 100, 10);
    wall56 = new Walls(600, 595, 100, 10);
    wall57 = new Walls( 50, 130, 100, 10);/*highest door*/
    wall58 = new Walls(350, 450, 200, 10);
    wall59 = new Walls(700, 590,  10,100);
    wall60 = new Walls(520, 480,  10,100);
    wall61 = new Walls(420, 400,  10,100);
    wall62 = new Walls(470, 355, 100, 10);
    wall63 = new Walls(655, 540, 100, 10);
    wall64 = new Walls(640, 470, 250, 10);
    wall65 = new Walls(760, 530,  10,120);
    wall66 = new Walls(805, 590, 100, 10);
    wall67 = new Walls(980, 530, 300, 10);
    wall68 = new Walls(960, 560,  10, 50);
    wall69 = new Walls(1040,560,  10, 50);
    wall70 = new Walls(1125,560,  10, 50);
    wall71 = new Walls(1000,620,  10, 50);
    wall72 = new Walls(1085,620,  10, 50);
    wall73 = new Walls(1170,580,  80, 10);
    wall74 = new Walls(1250,580,  10,120);
    wall75 = new Walls(1280,590,  60, 10);
    wall76 = new Walls(1320,520,  50, 10);
    wall77 = new Walls(1125,500,  10, 80);
    wall78 = new Walls(1230,460, 220, 10);
    wall79 = new Walls( 950,470, 200, 10);
    wall80 = new Walls( 800, 30,  10,120);
    wall81 = new Walls( 100,180,  10,350);
    wall82 = new Walls( 850,560,  10, 50);/*lowest door*/
    wall83 = new Walls( 100,430,  10, 50);
    wall85 = new Walls( 360,340,  10,100);
    wall86 = new Walls( 300,400,  10,100);
    wall87 = new Walls( 240,340,  10,100);
    wall88 = new Walls( 180,400,  10,100);
    wall89 = new Walls( 300,290, 130, 10);
    wall90 = new Walls( 430,290, 130, 10);
    wall91 = new Walls( 170,290, 130, 10);
    wall92 = new Walls(1150,410,  10,100);
    wall93 = new Walls( 540,355,  50, 10);
    wall94 = new Walls( 560,280,  10,140);
    wall95 = new Walls( 510,225, 100, 10);
    wall96 = new Walls( 400,220,  10,140);
    wall97 = new Walls( 560,150,  10,130);
    wall98 = new Walls( 450,155, 100, 10);
    wall99 = new Walls( 450, 90, 220, 10);
    wall100 = new Walls( 340,155, 10,140);
    wall101 = new Walls( 310,220, 60, 10);
    wall102 = new Walls( 200,220, 60, 10);
    wall103 = new Walls( 255,170, 50, 10);
    wall104 = new Walls( 280,195, 10, 60);
    wall105 = new Walls( 230,195, 10, 60);
    wall106 = new Walls( 280, 60, 10,100);
    wall107 = new Walls( 230,120, 10,100);
    wall108 = new Walls( 170,115, 10, 90);
    wall109 = new Walls( 200, 75, 60, 10);
    wall110 = new Walls( 725, 90,160, 10);
    wall111 = new Walls( 640,150,160, 10);
    wall112 = new Walls( 620,400, 10,150);
    wall113 = new Walls( 620,270,120, 10);
    wall114 = new Walls( 680,330, 10,130);
    wall115 = new Walls( 760,400,170, 10);
    wall116 = new Walls( 850,435, 10, 80);
    wall117 = new Walls( 780,240, 10,180);
    wall118 = new Walls( 820,155, 80, 10);
    wall119 = new Walls( 855,110, 10, 80);
    wall120 = new Walls( 710,210,150, 10);
    wall121 = new Walls( 705,270, 50, 10);
    wall122 = new Walls( 760,330, 50, 10);
    wall123 = new Walls( 850,310, 10,180);
    wall124 = new Walls( 920,240, 10,340);
    wall125 = new Walls( 890, 75, 60, 10);
    wall126 = new Walls( 980,320, 10,300);
    wall127 = new Walls( 960, 75, 70, 10);
    wall128 = new Walls(1020,170, 90, 10);
    wall129 = new Walls(1060,120, 10,100);
    wall130 = new Walls(1120,120, 10,220);
    wall131 = new Walls(1085,230, 80, 10);
    wall132 = new Walls(1040,275, 10,100);
    wall133 = new Walls(1040,390,120, 10);
    wall134 = new Walls(1095,340, 10,100);
    wall135 = new Walls(1150,295,100, 10);
    wall136 = new Walls(1200,185, 10,230);
    wall137 = new Walls(1250, 75,100, 10);
    wall138 = new Walls(1300,200,100, 10);
    wall139 = new Walls(1200,350, 10,100);
    wall140 = new Walls(1250,260,100, 10);
    wall141 = new Walls(1300,330,100, 10);
    wall142 = new Walls(1250,395,100, 10);
}   

function createGuards(){

    guard1 = new Guard(50, 300);
    guard1.guardAnimation();
    guard1.guard.velocityX = 1;  
    
    guard2 = new Guard(300, 50);
    guard2.guardAnimation();
    guard2.guard.velocityX = 4;
  
    //Bottom Left
    guard3 = new Guard(150, 480);
    guard3.guardAnimation();
    guard3.guard.velocityX = 3;
  
    guard4 = new Guard(150, 260);
    guard4.guardAnimation();
    guard4.guard.velocityX = 3;
  
    guard5 = new Guard(950, 620);
    guard5.guardAnimation();
    guard5.guard.velocityX = 3;
  
    guard6 = new Guard(1250, 110);
    guard6.guardAnimation();
    guard6.guard.velocityX = 2;
  
    guard7 = new Guard( 900, 80);
    guard7.guardAnimation();
    guard7.guard.velocityY = 5;
  
    guard8 = new Guard(450, 400);
    guard8.guardAnimation();
    guard8.guard.velocityX = 3;
  
    guard9 = new Guard(900, 50);
    guard9.guardAnimation();
    guard9.guard.velocityX = 4;
  
    guard10 = new Guard(1135, 50);
    guard10.guardAnimation();
    guard10.guard.velocityY = 4; 
}

 function pc(){
    //CONTROLS OF THE PLAYER
    if(keyDown(UP_ARROW)){
        player.y = player.y-8;
        player.changeAnimation("back");
    }
    if(keyDown(DOWN_ARROW)){
        player.y = player.y+8;
        player.changeAnimation("front");
    }
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+8;
        player.changeAnimation("right");
    }
    if(keyDown(LEFT_ARROW)){
        player.x = player.x-8;
        player.changeAnimation("left");                                                
    }
}

function destroy(){
    background(0);
    guardGroup.destroy();
    wallGroup.destroy();
    player.destroy();
    key1.destroy();
    key2.destroy();
    key3.destroy();
    lock1.destroy();
    lock2.destroy();
    lock3.destroy();
    treasure.destroy();
    antique.destroy();

}


