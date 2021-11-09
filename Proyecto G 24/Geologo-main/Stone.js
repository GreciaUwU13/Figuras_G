class Stone {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'density': 12,
          'friction': 0.9,
      }
      this.body = Bodies.rectangle(x,y,50,70,options);
      this.width = 50;
      this.height = 70;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black")
      fill("purple");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }