class Block3{
    constructor(x, y, width, height) {
      var options = {
          isStatic : false, 
          restitution :0.6,
          friction :1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=255;
    }
    display(){
      if(this.body.speed<3){
       var pos= this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       fill("lightgreen")
       strokeWeight(3)
       rect(0,0,this.width, this.height);
       pop();
      }
      else{
        World.remove(world,this.body);
        push()
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility);
        pop()
      }
    }
  }