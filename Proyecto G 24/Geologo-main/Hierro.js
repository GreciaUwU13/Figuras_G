class Hierro {
    constructor(x,y) {
      var options = {
        'restitution': 0.8,
        'density': 30,
        'friction': 3,
      }
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.width = 100;
      this.height = 100;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke("black")
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };