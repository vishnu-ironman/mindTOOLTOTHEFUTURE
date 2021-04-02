function spawnBaloons(){
    if(frameCount%100 === 0){
     var y = Math.round(random(10,900))
     ballons = createSprite(1900,y);
     ballons.addImage(balonImg)
     ballons.scale = 0.2;
     ballons.velocityX= -6;
     ballons.lifetime = 300;
     BALOONSGroup.add(ballons);
    }
   }
   
   function spawnBaloon(){
     if(frameCount%60=== 0){
      var y = Math.round(random(10,800))
      ballon = createSprite(1900,y);
      ballon.addImage(goldB)
      ballon.scale = 0.1;
      ballon.velocityX= -6;
      ballon.lifetime = 300;
      BALOONGroup.add(ballon);
     }
    }
   
    function blueBaloon(){
     if(frameCount%80 === 0){
      var y = random(10,700)
      ballonB = createSprite(1900,y);
      ballonB.addImage(blueB)
      ballonB.scale = 0.3;
      ballonB.velocityX= -6;
      ballonB.lifetime = 300;
      BALOONBGroup.add(ballonB);
     }
    }
   
    function Baloons(){
     if(frameCount%20 === 0){
      var y = random(10,9000)
      ballonG = createSprite(1900,y);
      ballonG.addImage(greenB)
      ballonG.scale = 0.1;
      ballonG.velocityX= -6;
      ballonG.lifetime = 300;
      BALOONGGroup.add(ballonG);
     }
    }