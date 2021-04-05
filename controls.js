function boyNorth(){
    boy.changeAnimation("walk",boy_walk);
     boy.y = boy.y-50;
}

function boySouth(){
    boy.changeAnimation("walk",boy_walk);
    boy.y = boy.y+50
}

function boyEast(){
    boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x+50;
}

function boyWest(){
    boy.changeAnimation("walk",boy_walk);
      boy.x = boy.x-50;
}