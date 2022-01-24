
var ship;
var zombie = [];
var lasers =[];
var victims =[];


function setup() {
  
  createCanvas(windowWidth,windowHeight);
  ship = new ship();
  
  for(var i=0; i<10;i++){
  zombie.push(new Zombie())
  }
   
  for(var i=0; i<5;i++){
    victims.push(new Victims())
    }
}
function draw() {
  background(0);
  
  for(var i=0; i<zombie.length;i++){
    zombie[i].render();
    zombie[i].update();
    zombie[i].edges();
  }
  for(var i=0; i<victims.length;i++){
    victims[i].render();
    victims[i].update();
    victims[i].edges();
  }

  for(var i=0; i<lasers.length;i++){
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()){
      lasers.splice(i,1);
    }else{
      for(var j=0; j<zombie.length;j++){
        if (lasers[i].hits(zombie[j])){
         
          zombie.splice(j,1);
          lasers.splice(i,1);
          ship.setscore();
          break;
      
        }
      }
    }
  }
  
  ship.render();
  ship.turn();
}   
function keyReleased(){
  ship.setRotation(0);
  
}
function keyPressed(){
  if(key == " "){
    lasers.push(new Laser(ship.pos, ship.heading ));
  } else if(keyCode ==RIGHT_ARROW){
    ship.setRotation(0.1);  
  } else if(keyCode ==LEFT_ARROW){
    ship.setRotation(-0.1);
  }
}


  

