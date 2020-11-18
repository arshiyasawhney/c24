class Bird{
    
    constructor(newx,newy){
        var options = {
            restitution : 1.0,
            friction : 0.3,
            density : 1.0
          }
          this.body = Bodies.rectangle(newx,newy,50,50, options);
          this.width = 50;
          this.height = 50;
          World.add(myWorld,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        stroke("blue")
        fill("red")
       
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}