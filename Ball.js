class Ball{
    constructor(x,y,r){

        var options={
            restitution:0.8,
            friction:1.5,
            density:1
        }

this.r= r;
        this.image=loadImage("paper.png");
      this.body=Bodies.circle(x, y, r,options ) 
        World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(255);
      image(this.image,pos.x, pos.y, this.r*2, this.r*2);
    }
  };
