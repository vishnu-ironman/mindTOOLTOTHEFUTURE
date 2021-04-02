class cardboard{   
    
    

    constructor(){
        cardboard2=createSprite(1150,350,20,200);
        cardboard2.shapeColor=('brown');
      cardboard2.visible = false;
     
     
        cardboard1 = createSprite(140,570,20,200);
        cardboard1.shapeColor=('brown');
       cardboard1.visible = false;
     
         cardboard3=createSprite(300,400,20,200);
         cardboard3.shapeColor=('brown');
         cardboard3.visible = false;
     
        cardboard4=createSprite(1380,500,20,200);
         cardboard4.shapeColor=('brown');
         cardboard4.visible  = false;
     
     
          cardboard5=createSprite(500,500,200,20);
            cardboard5.shapeColor=('brown');
           cardboard5.visible = false
     
         cardboard6=createSprite(649,653,200,20);
          cardboard6.shapeColor=('brown');
        cardboard6.visible = false
     
        cardboard7=createSprite(1220,590,20,200);
          cardboard7.shapeColor=('brown');
          cardboard7.visible = false


       cardboard8=createSprite(1090,803,20,200);
           cardboard8.shapeColor=('brown');
           cardboard8.visible = false
           
         cardboard9=createSprite(986,938,20,300);
            cardboard9.shapeColor=('brown');
            cardboard9.visible = false;
        
        cardboard10=createSprite(1000,504,300,20);
            cardboard10.shapeColor=('brown');
         cardboard10.visible = false;
     
      cardboard11=createSprite(850,100,20,200);
            cardboard11.shapeColor=('brown');
          cardboard11.visible = false;
     
        cardboard12=createSprite(950,304,200,20);
            cardboard12.shapeColor=('brown');
            cardboard12.visible = false;
           
         cardboard13 = createSprite(750,706,20,200);
           cardboard13.shapeColor = "brown"
           cardboard13.visible = false;
         
        cardboard14=createSprite(650,170,20,200);
            cardboard14.shapeColor = "brown"
          cardboard14.visible = false;
     
         cardboard15=createSprite(550,400,20,200);
            cardboard15.shapeColor=('brown');
           cardboard15.visible = false;
     
         cardboard16=createSprite(453,116,20,200);
             cardboard16.shapeColor=('brown');
           cardboard16.visible = false;

     
         cardboard17=createSprite(350,214,200,20);
            cardboard17.shapeColor=('brown');
      cardboard17.visible = false;

         cardboard18=createSprite(255,96,200,20);
             cardboard18.shapeColor=('brown');
             cardboard18.visible = false;
           
        cardboard19=createSprite(152,110,20,200);
             cardboard19.shapeColor=('brown');
         cardboard19.visible = false
     
          cardboard20=createSprite(29,282,20,200);
              cardboard20.shapeColor=('brown');
            cardboard20.visible = false

     
           cardboard21=createSprite(900,500,20,200);
            cardboard21.shapeColor=('brown');
            cardboard21.visible = false;
       
           cardboard22=createSprite(310,312,200,20);
              cardboard22.shapeColor=('brown');
            cardboard22.visible = false;
    }

    display(){
       cardboard1.visible = true
       cardboard2.visible = true
       cardboard3.visible = true
       cardboard4.visible = true
       cardboard5.visible = true
       cardboard6.visible = true
       cardboard7.visible = true
       cardboard8.visible = true
       cardboard9.visible = true
       cardboard10.visible = true
       cardboard11.visible = true
       cardboard12.visible = true
       cardboard13.visible = true
       cardboard14.visible = true
       cardboard15.visible = true
       cardboard16.visible = true
       cardboard17.visible = true
       cardboard18.visible = true
       cardboard19.visible = true
       cardboard20.visible = true
       cardboard21.visible = true
       cardboard22.visible = true
     
       
   
    }






    bounce(object1){
        
        object1.bounceOff(cardboard1)
    object1.bounceOff(cardboard2)

       object1.bounceOff(cardboard3)

       object1.bounceOff(cardboard4)

        object1.bounceOff(cardboard5)

        object1.bounce(cardboard6)
        object1.bounce(cardboard7)
        object1.bounce(cardboard8)
       object1.bounce(cardboard9)
      object1.bounce(cardboard10)
        object1.bounce(cardboard11)
        object1.bounce(cardboard12)
      object1.bounce(cardboard13)
      object1.bounce(cardboard15)
     object1.bounce(cardboard16)
        object1.bounce(cardboard17)
        object1.bounce(cardboard18)
     object1.bounce(cardboard19)
     object1.bounce(cardboard20)
        object1.bounce(cardboard21)
        object1.bounce(cardboard22)


    }


    destroy(){
        cardboard1.velocityX = -15
        cardboard2.velocityX  =  15;
        cardboard3.velocityY =  15;
        cardboard4.velocityY = - 15;
        cardboard5.velocityX =  15;
        cardboard6.velocityX = - 15;
        cardboard7.velocityY =  15;
        cardboard8.velocityY = - 15;
        cardboard9.velocityX = - 15;
        cardboard10.velocityX =  15;
        cardboard11.velocityY =  15;
        cardboard12.velocityY = - 15;
        cardboard13.velocityX =  15;
        cardboard14.velocityX = - 15;
        cardboard15.velocityY =  15;
        cardboard16.velocityY = - 15;
        cardboard17.velocityX = - 15;
        cardboard18.velocityX = 15;
        cardboard19.velocityY = - 15;
        cardboard20.velocityY =  15;
        cardboard21.velocityX = - 15;
        cardboard22.velocityX  =  15;
    }
}