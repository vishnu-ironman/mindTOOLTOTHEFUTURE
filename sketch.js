var bgImg,boyImg,boy_walk,triviaImg,chemImg,bioImg,phyImg,mathImg;
var boy,bg,triviaChem,triviaBio,triviaPhy,triviaMath1,triviaChem1,triviaBio1,triviaPhy1,triviaMath1;
var START = 0;
var STORY = 1;
var LEVEL1 = 2;
var LEVEL2 = 3
var LEVEL3 = 4;
var LEVEL4 = 5
var END = 6
var gameState = START;
var door;
var tittle,s;
var play,play2;
var collectCount = 0;
var Tex,Tex2; 
var ballons,ballon,ballonB,ballonG;
var atom,quiz1;
var BALOONSGroup,BALOONGroup,BALOONBGroup,BALOONGGroup;
var next,next1,next2,next3;
var applause,sound;
var correctAnswer = 0
var entrance,congrat,door2;
var door3;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22;
var trivia1,trivia2,trivia3,trivia4;
var replay,replayImg
var Visibility = 255;
var ulMaze
function preload(){
  boyImg = loadAnimation("images/boy.png");
  boy_walk = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png");
  triviaImg = loadImage("images/tri.png");
  chemImg = loadImage("images/chem.png");
  mathImg = loadImage("images/mat.png");
  bioImg = loadImage("images/bio.png");
  phyImg = loadImage("images/phy.png");
  bgImg = loadImage("images/a.jpg");
  s = loadImage("images/s.png");
  playImg = loadImage("images/play.png");
  art = loadImage("images/heart.png");
  plant = loadImage("images/img.jpg");
  math = loadImage("images/math.jpg");
  tom = loadImage("images/image.png")
  teddy = loadImage("images/teddy.png")
  cricket = loadImage("images/cricke.png")
  doorImg = loadImage("images/door.png")
  congrats = loadImage("images/images.jfif")
  applause = loadSound("images/applause8.mp3")
  balonImg  = loadImage("images/baloon.png");
  blueB = loadImage("images/blueB.png");
  greenB = loadImage("images/greenB.png");
  goldB = loadImage("images/goldB.png")
  sound = loadSound("images/applause.mp3")
  ohno = loadSound("images/oh no.mp3")
  dooImg = loadImage("images/door.png")
  congrat = loadImage("images/congr.jfif")
  maze = loadImage("images/Untitled.png")
  welcome = loadImage("images/welcome.png");
  TriviasIMG = loadImage("images/tri.png");
  doorImg2 = loadImage("images/door2.png");
  boyIm = loadImage("images/boy.png");
  replayImg = loadImage("images/replay.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
 bg = createSprite(width/2,height/2,2000,2000);
  bg.scale = 2.7;
  bg.addImage(bgImg);

  tittle = createSprite(800,200,20,20);
  tittle.scale =1.5
  tittle.addImage(s);

  play = createSprite(800,height-100);
  play.addImage(playImg)
  
 boy = createSprite(50,height - 100) ;
  boy.addAnimation("static",boyImg);
  boy.addAnimation("walk",boy_walk);

door = createSprite(5100,470)
  door.addImage(doorImg);
  door.visible = false;
  door.scale = 0.3

door2 = createSprite(5100,470)
  door2.addImage(doorImg);
  door2.visible = false;
  door2.scale = 0.3

  door3 = createSprite(5100,470)
  door3.addImage(doorImg);
 door3.scale = 0.3;

 entrance = createSprite(5100,470)
entrance.addImage(dooImg);
entrance.scale = 0.3

door4 = createSprite(5100,470);
door4.addImage(doorImg2);
door4.scale = 0.3;

triviaChem = createSprite(1268,70);
  triviaChem.addImage(chemImg)
  triviaChem.scale = 0.2
  triviaBio = createSprite(1496,458);
  triviaBio.addImage(bioImg)
  triviaBio.scale = 0.1
  triviaPhy = createSprite(500,720);
  triviaPhy.addImage(phyImg)
  triviaPhy.scale = 0.1
  triviaMath = createSprite(1104,526);
  triviaMath.addImage(mathImg)
  triviaMath.scale = 0.1

  triviaChem1 = createSprite(1268,70);
  triviaChem1.addImage(chemImg)
  triviaChem1.scale = 0.2
  triviaBio1 = createSprite(1496,458);
  triviaBio1.addImage(bioImg)
  triviaBio1.scale = 0.1
  triviaPhy1 = createSprite(500,720);
  triviaPhy1.addImage(phyImg)
  triviaPhy1.scale = 0.1
  triviaMath1 = createSprite(1104,526);
  triviaMath1.addImage(mathImg)
  triviaMath1.scale = 0.1

  triviaPhy2 = createSprite(5208,670);
  triviaPhy2.addImage(phyImg);
  triviaPhy2.scale = 0.05;

  triviaChem2 = createSprite(12096,268);
  triviaChem2.addImage(chemImg)
  triviaChem2.scale = 0.1

 triviaMath2 = createSprite(9804,511);
  triviaMath2.addImage(mathImg);
  triviaMath2.scale = 0.07

  triviaBio2 = createSprite(13500,460);
  triviaBio2.addImage(bioImg);
  triviaBio2.scale = 0.05

     triviaPhy.visible = false;
     triviaBio.visible = false;
     triviaMath.visible = false;
     triviaChem.visible = false;
     
     triviaPhy1.visible = false;
     triviaBio1.visible = false;
     triviaMath1.visible = false;
     triviaChem1.visible = false;;

     Tex = createSprite(0,100);
     Tex.addImage(congrats);
      Tex.visible = false;

     Tex2 = createSprite(10,100);
     Tex2.addImage(congrat);
     Tex2.visible = false;

replay = createSprite(937,710,20,20);
     replay.addImage(replayImg);
     replay.scale = 0.1
     replay.visible = false;
     
     trivia1 = createSprite(22,25,20,20);
         trivia1.scale = 0.2
         trivia1.addImage(triviaImg)
          trivia1.visible = false;

          trivia2 = createSprite(612,256,20,20);
         trivia2.scale = 0.2;
         trivia2.addImage(triviaImg);
         trivia2.visible = false;

         trivia3 = createSprite(1192,138,20,20);
         trivia3.scale = 0.2;
         trivia3.addImage(triviaImg);
         trivia3.visible = false;

          trivia4 = createSprite(1514,393,20,20);
         trivia4.scale = 0.2;
         trivia4.addImage(triviaImg);
         trivia4.visible = false;
         
ulMaze = new cardboard();
   
   BALOONSGroup = new Group();
 BALOONGroup = new Group();
 BALOONBGroup =   new Group();
BALOONGGroup = new Group()

next = createButton("NEXT");
next.position(-750,0)
next1 = createButton("NEXT");
next1.position(-750,0)
next2 = createButton("NEXT");
next2.position(-750,0)
next3 = createButton("NEXT");
next3.position(-750,0)

atom = createButton("ATOM");
atom.position(-750,0)
bacteria = createButton("BACTERIA")
bacteria.position(-750,0)
higgsBosson = createButton("HIGGS BOSSON")
higgsBosson.position(-750,0)
quiz1 = createElement("h2");

fifty = createButton("FIFTY");
fifty.position(-750,0)
infinite = createButton("INFINITE")
infinite.position(-750,0)
seven = createButton("SEVEN")
seven.position(-750,0)
quiz2 = createElement("h2");

eightyThousand= createButton("80,000");
eightyThousand.position(-750,0)
ALLPLANTS = createButton("ALL plants")
ALLPLANTS.position(-750,0)
seventy = createButton("SEVENTY")
seventy.position(-750,0)
quiz3 = createElement("h2");

heart= createButton("HEART");
heart.position(-750,0)
LUNGS = createButton("LUNGS")
LUNGS.position(-750,0)
KIDNEY = createButton("KIDNEY")
KIDNEY.position(-750,0)
quiz4 = createElement("h2");

next4 = createButton("NEXT")
next4.position(-750,0)
next5 = createButton("NEXT")
next5.position(-750,0)

next6 = createButton("NEXT")
next6.position(-750,0)
next7 = createButton("NEXT")
next7.position(-750,0)

question1 = createElement("h2");
hydrochoricAcid = createButton("HYDROCHLORIC ACID");
hydrochoricAcid.position(-750,0)
sulphuricAcid = createButton("SULPHURIC ACID");
sulphuricAcid.position(-750,0)
citricAcid = createButton("citric acid");
citricAcid.position(-750,0)

question2 = createElement("h2");
pi = createButton("pi")
pi.position(-750,0)
e =createButton("E")
e.position(-750,0)
EulerConstant = createButton("Euler's constant")
EulerConstant.position(-750,0)

question3 = createElement("h2");
gravity  = createButton("GRAVITY");
gravity.position(-750,0)
wind  = createButton("WIND");
wind.position(-750,0)
electricity = createButton("ELECTRICITY")
electricity.position(-750,0)

question4 = createElement("h2");
phloem = createButton("PHLOEM");
phloem.position(-750,0)
cappilaries = createButton("CAPPILARIES");
cappilaries.position(-750,0)
waterTubes = createButton("WATER TUBES")
waterTubes.position(-750,0)
  
}

function draw() {
  background(0);  

  drawSprites();
          
   if(gameState === START) {

 play.visible = true;
    boy.visible = true;
    bg.visible = true;
    if(mousePressedOver(play) || touches.length > 0 ){
      tittle.visible = false;
      bg.visible = false;
      play.visible = false;
      gameState = STORY
      touches = []
    }
  
  }

if(gameState === STORY){

boy.visible = true;
 boy.changeAnimation("static",boyImg)
 boy.x = 50;
 boy.y = height-100
textSize(30);
fill("red")
text("STORY OF THE GAME",600,100);

     fill("cyan")
     text("George a boy of 12 always hates to study he didn't realise its value .",100,400)
     text("After getting  a lot of advice from his parents and teachers he finds its value. ",100,450);
     text("But he don't know were to start with and he was unable to realise the theories ,he wanted to learn practically.",100,500)
     text("Help george to study practically by this game.",110,550)
     fill("green")
     text("press on george to help him",600,600)
  
      if(mousePressedOver(boy) || touches.length > 0){
      gameState = LEVEL1
      touches = []
    }
     
   }

   if(gameState === LEVEL1){
     bg.visible = true;
     boy.visible = true;
     tittle.visible = true;
     tittle.scale = 1;

     if(keyIsDown(RIGHT_ARROW)){
       boy.changeAnimation("walk",boy_walk);
       boy.x = boy.x+10;
      
     }else if(keyIsDown(LEFT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x-10;
    }else if(keyIsDown(UP_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.y = boy.y-10;
    }else if(keyIsDown(DOWN_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.y = boy.y+10;
     }
     else{
       boy.changeAnimation("static",boyImg)
     }
       triviaPhy.visible = true;
       
     triviaBio.visible = true;
     triviaMath.visible = true;
     triviaChem.visible = true;
      
     textSize(20);
       fill("red")
       text(" GOAL : Collect All The Four Objects Related To  ",100,100)
       text(" Physics, Maths, Biology, Chemistry",200,150)

          if(boy.isTouching(triviaChem)){
         fill("darkBlue")
         text("During an average lifetime, the heart pumps nearly ",980,120);
         text("1.5 million barrels of blood, which is enough to fill 200 train tank cars",900,140)
         image(art,1000,200)

         next2.position(900,170);
         next2.mousePressed(NEXT2)
        }

        if(boy.isTouching(triviaBio)){
         fill("darkBlue")
         text("The earth has more than 80,000 species of edible plants.",1000,550)
         image(plant,1230,600)

         next1.position(1000,590);
         next1.mousePressed(NEXT1)
        
       }

        if(boy.isTouching(triviaMath)){
          fill("darkRed")
         text("Roman numerals only have seven different letters which form the entire number system:  I, V, X, L, C, D, and M.",550,600);
         image(math,650,650)
         next3.position(870,670);
         next3.mousePressed(NEXT3)
       }

       if(boy.isTouching(triviaPhy)){
         triviaPhy.visible = false;
      
         fill("darkBlue");
         text("Atoms are made of tiny particles called protons, neutrons and electrons.",750,670);
         image(tom,800,500) 
        
         next.position(1000,720);
         next.mousePressed(Next)
       }
         image(teddy,130,300);
         image(cricket,360,450);
         
        if(collectCount %4  ===0 && collectCount>0){
          door.visible = true;
          triviaMath.visible = false;
          door.x = 1100
         }
        if(boy.isTouching(door)){
         gameState = LEVEL2;
        }
}



   if(gameState === LEVEL2){
    boy.visible = true;
    bg.visible = true;
 
    if(keyIsDown(RIGHT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+10;
     }else if(keyIsDown(LEFT_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.x = boy.x-10;
   }else if(keyIsDown(UP_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-10;
     }else if(keyIsDown(DOWN_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y+10;
     }else{
      boy.changeAnimation("static",boyImg)
    }
        triviaChem.velocityX = 8;
        triviaMath.velocityX = 8;
        triviaBio.velocityX = 8;
        triviaPhy.velocityX = 8;
        
        door.destroy();
        
        Tex.visible = true;
      Tex.velocityX =5;

if(Tex.x<1000){
       sound.play()
 }

      fill("blue");
      textSize(30)
      text("HIT THE BALOONS AND ANSWER",780,50)

      spawnBaloons();
      spawnBaloon();
      blueBaloon();
      Baloons();

      textSize(20);
      text("MAKE THE BOY HIT THE BALOON  BEFORE IT GETS DESTROYED AND ANSWER THE QUESTIONS TO PASS TO THE NEXT STAGE",20,180)
      
       tittle.scale = 0.7;
       tittle.x = 810;
       tittle.y  = 460;

       if(BALOONSGroup.isTouching(boy) &&  atom){
       
        BALOONSGroup.setLifetimeEach(-1)
        BALOONSGroup.setVelocityXEach(6)
        BALOONGGroup.destroyEach()
        BALOONBGroup.destroyEach()
        spawnBaloon();
        BALOONGroup.destroyEach()
        quiz1.html("WHICH HAS ELECTRON,PROTON,NUETON IN IT ??")
        quiz1.position(320,300)
         atom.position(320,360);
        atom.mousePressed(correctAnswer1);
        bacteria.position(400,360);
        bacteria.mousePressed(wrongAnswer3)
        higgsBosson.position(490,360);
        higgsBosson.mousePressed(wrongAnswer3)
} if(BALOONGroup.isTouching(boy) && seven){
        BALOONGroup.setLifetimeEach(-1)
        BALOONGroup.setVelocityXEach(6)
        BALOONGGroup.destroyEach()
        BALOONBGroup.destroyEach()
        BALOONSGroup.destroyEach()
        quiz2.html("ROMAN NUMERALS HAVE HOW MANY LETTERS IN THEM??")
        quiz2.position(320,300)
         spawnBaloon();
       infinite.position(320,360);
       infinite.mousePressed(wrongAnswer3);
       seven.position(400,360);
       seven.mousePressed(correctAnswer2)
       fifty.position(490,360);
       fifty.mousePressed(wrongAnswer3)
 }
 if(BALOONGGroup.isTouching(boy)  && eightyThousand){

     BALOONGGroup.setLifetimeEach(-1)
      BALOONGGroup.setVelocityXEach(6)
       BALOONGroup.destroyEach()
      BALOONBGroup.destroyEach()
      BALOONSGroup.destroyEach()
      spawnBaloon();
      quiz3.html("HOW MANY EDIBLE PLANT SPECIES ARE THERE IN THE EARTH ??")
      quiz3.position(320,300)
      ALLPLANTS.position(320,360);
     ALLPLANTS.mousePressed(wrongAnswer3);
     seventy.position(400,360);
    seventy.mousePressed(wrongAnswer3)
    eightyThousand.position(490,360);
    eightyThousand.mousePressed(correctAnswer3)
 }

  if(BALOONBGroup.isTouching(boy)&& heart){

    BALOONBGroup.setLifetimeEach(-1)
    BALOONBGroup.setVelocityXEach(6)
     BALOONGroup.destroyEach()
    BALOONGGroup.destroyEach()
    BALOONSGroup.destroyEach()
    quiz4.html("WHICH PUMPS 1.5 MILLON OF BLOOD??")
    quiz4.position(320,300)
    spawnBaloon();
    LUNGS.position(320,360);
    LUNGS.mousePressed(wrongAnswer3);
    heart.position(400,360);
     heart.mousePressed(correctAnswer4)
    KIDNEY.position(490,360);
    KIDNEY.mousePressed(wrongAnswer3)
}
if(correctAnswer ===  4 ){
  BALOONBGroup.setVelocityXEach(0);
  BALOONGGroup.setVelocityXEach(0);
  BALOONSGroup.setVelocityXEach(0);
  BALOONGroup.setVelocityXEach(0);
   entrance.x =1110;
 }
   if(boy.isTouching(entrance)){
    boy.x = 50;
    boy.y = height-100
    sound.play(); 
    gameState = LEVEL3
  }
 }



   if(gameState === LEVEL3){
    boy.visible = true;
    bg.visible = true;
    if(keyIsDown(RIGHT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+10;
 }else if(keyIsDown(LEFT_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.x = boy.x-10;
   }else if(keyIsDown(UP_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-10;
}else if(keyIsDown(DOWN_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y+10;
 } else{
      boy.changeAnimation("static",boyImg)
    }
     boy.scale = 0.3;

    entrance.destroy();
  
    BALOONBGroup.destroyEach()
  BALOONGGroup.destroyEach()
  BALOONSGroup.destroyEach()
  BALOONGroup.destroyEach()

  image(maze,1400,0)

    ulMaze.display();
    ulMaze.bounce(boy)

      triviaChem1.visible = true;
      triviaPhy1.visible = true;
      triviaMath1.visible = true
      triviaBio1.visible = true;

      if(boy.isTouching(triviaBio1)){
        fill("white");
        textSize(20)
        text("plants have veins like humans caled phloem,xylem",1000,550)
        image(plant,1230,600)
        next4.position(1000,590);
        next4.mousePressed(Next4)
 }

      if(boy.isTouching(triviaPhy1)){
        fill("white");
        textSize(20);
        text("MAN Weighs less in moon compared to earth due to gravity",750,670);
       
        next5.position(1000,720);
        next5.mousePressed(Next5)
      }
      
      if(boy.isTouching(triviaMath1)){
        fill("white");
        textSize(20);
        text("pi is the ratio of any circle's circumference to diameter",550,600);
       
        next6.position(870,670);
        next6.mousePressed(Next6)
      }


   if(boy.isTouching(triviaChem1)){
    fill("white");
    textSize(20);
    text("Do you know the Queen of acids?? it is sulphuric acids",900,140);
    next7.position(900,170);
    next7.mousePressed(Next7)
   }
 if(collectCount === 8){
    door3.x = 100;
   }

   if(boy.isTouching(door3)){
     gameState = LEVEL4
   }
 }




   if(gameState ===LEVEL4 ){
     boy.visible = true;
    bg.visible = true;

    if(keyIsDown(RIGHT_ARROW)){
      boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+10;
     
    }else if(keyIsDown(LEFT_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.x = boy.x-10;
     } else if(keyIsDown(UP_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-10;
 } else if(keyIsDown(DOWN_ARROW)){
     boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y+10;
 }else{
      boy.changeAnimation("static",boyImg)
    }

    if(triviaMath1.x>0){ 
   sound.play()
}

     triviaBio1.velocityY = 7;
     triviaChem1.velocityY =-7;
     triviaPhy1.velocityX = 7;
     triviaMath1.velocityX = -7;

    ulMaze.destroy();
    door3.destroy()

     image(welcome,1200,0);
     boy.scale = 0.5;

     fill("red");
   textSize(30)
   text("find the brains which is hidden and find the objects  by the clue which brain gives ",100,114);

  trivia1.visible = true;
  trivia2.visible = true;
  trivia3.visible = true;
  trivia4.visible = true;

if(boy.isTouching(trivia1)){
    fill("red")
    text("find three balls under the dark",306,158);
    triviaPhy2.x = 551;
    triviaPhy2.y = 700
}
if(boy.isTouching(trivia2)){
    fill("red")
    text("find the bubbles of reaction between the buildings",612,300);
    triviaChem2.x = 1447
}
 if(boy.isTouching(trivia3)){
    fill("red")
    text("find the beads of maths on were you sit",902,180);
    triviaMath2.x = 984;
 }
 if(boy.isTouching(trivia4)){
  fill("red")
   text("find the greenary between the greenary",904,420);
   triviaBio2.x = 1350;
 }
if(boy.isTouching(triviaChem2)){
   question1.html("What is the queen of Acids??");
   question1.position(274,282);
    hydrochoricAcid.position(200,370);
   hydrochoricAcid.mousePressed(wrongAnswer3);
   sulphuricAcid.position(400,370)
   sulphuricAcid.mousePressed(correctAnswer5)
    citricAcid.position(600,370);
   citricAcid.mousePressed(wrongAnswer3);
     trivia2.destroy()
 }

 if(boy.isTouching(triviaMath2)){
  question2.html("Ratio of circumference to diameter of circle is __________ ");
  question2.position(274,282);
  pi.position(200,370);
  pi.mousePressed(correctAnswer6);
  e.position(300,370)
  e.mousePressed(wrongAnswer3);
  EulerConstant.position(400,370);
  EulerConstant.mousePressed(wrongAnswer3)
   trivia3.destroy()
  }
if(boy.isTouching(triviaPhy2)){
     question3.html("what makes your weight low on moon");
     question3.position(274,282)
    wind.position(200,370);
   wind.mousePressed(wrongAnswer3)
   electricity.position(300,377)
   electricity.mousePressed(wrongAnswer3)
    gravity.position(430,370);
   gravity.mousePressed(correctAnswer7)
    trivia1.destroy()
 }
if(boy.isTouching(triviaBio2)){
  question4.html("Plants have veins like structures called xylem and _______ ");
   question4.position(274,282)
 cappilaries.position(200,370);
  cappilaries.mousePressed(wrongAnswer3);
  phloem.position(300,370);
  phloem.mousePressed(correctAnswer8);
  waterTubes.position(400,370);
  waterTubes.mousePressed(wrongAnswer3)
trivia4.destroy()
}
if(correctAnswer === 8){
  door4.x = 100
}
if(boy.isTouching(door4)){
  gameState =END
 door4.destroy()
}

}
if(gameState === END){
  triviaChem2.velocityY = 7;
  triviaMath2.velocityX =  7;
  triviaPhy2.velocityY = -7
  triviaBio2.velocityX = 7;
   play.visible = false;

   fill("magenta")
textSize(30)
text("education is not the learning of facts ",600,300);
text("But, the training of your brain",600,340);
fill("red")
textSize(20)
text(" - ALBERT EINSTEIN",700,380)
textSize(30)
fill("cyan")
text("Thanks for playing",600,500)
bg.visible = false;

push();
Visibility = Visibility - 2;
tint(255,this.Visibility);
imageMode(CENTER)
image(bgImg,600,600,2000,2000);
pop();

tittle.visible = false;
push();
Visibility = Visibility - 2;
tint(255,this.Visibility);
imageMode(CENTER)
image(s,tittle.x,tittle.y,500,500);
pop();

boy.visible = false;
push();
Visibility = Visibility - 2;
tint(255,this.Visibility);
image(boyIm,boy.x,boy.y-100,150,150);
pop();





 
}

fill("red")
text(mouseX +"'"+mouseY,20,100)
}

function wrongAnswer3(){
  ohno.play();
}
