class Box {
  constructor(x, y, w, h) {
    let options = {
      friction: 0.3,
      restitution: 0.1
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    //this.color = random(colors);
  }

  show(color= ["#5af282", "#08138a", "#c11ff2", "#f76645"]) {
    let pos = this.body.position;
    let angle = this.body.angle;
    
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke();
    fill("#AC3931");
    rect(0, 0, this.w, this.h);
    pop();
  }
}