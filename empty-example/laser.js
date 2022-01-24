function Laser(spos,angle){
    this.pos = createVector(spos.x,spos.y);
    this.vel =p5.Vector.fromAngle(angle); 
    this.vel.mult(10);

    this.update = function(){
        this.pos.add(this.vel);
    }
    this.render = function(){
        push();
        stroke(180,62,175)
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }
    this.hits = function(zombie){
        var d = dist(this.pos.x, this.pos.y, zombie.pos.x, zombie.pos.y);
        if(d<zombie.r){
          return true;
            }else{
            return false;
            }
            
    }
    this.offscreen = function(){
        if(this.pos.x>width || this.pos.x<0){
            return true;
        }
        if(this.pos.y>height || this.pos.y<0){
            return true;
        }
        return false;
    }
}