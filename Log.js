class Log{
  
    constructor(newx,newy,newheight,angle){
        var options = {
            restitution : 1.0,
            friction : 2,
            density : 2.0
          }
          this.body = Bodies.rectangle(newx,newy,20,newheight, options);
          this.width = 20;
          this.height = newheight;
          Matter.Body.setAngle(this.body,angle)
          World.add(myWorld,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        fill("white");
        stroke("green");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}