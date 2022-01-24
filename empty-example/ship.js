function ship(){
    this.pos = createVector(width/2,height/2);
    this.r = 20;
    this.heading = 0
    this.rotation = 0
    this.score = 0
      this.render = function(){
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI/2);
        fill(0);
        stroke(255);
        triangle (-this.r,this.r,this.r,this.r,0,-this.r);
        pop();
      }
    this.setRotation = function(a){
      this.rotation =a;
    }
    this.turn =function(){
      this.heading += this.rotation;
      }
    this.setscore = function(){
      ship.score = this.score + 100;
      console.log(this.score);
      
    }
}  