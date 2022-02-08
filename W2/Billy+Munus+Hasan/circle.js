class Circle {
  constructor(x, y, r) {
    let options = {
      friction: 0.3,
      restitution: 0.1
    };
    this.body = Bodies.circle(x, y, r, options);
    this.colorList = shuffle(colorPalette);
    this.r = r;
    World.add(world, this.body);
    this.shapeIndex = random([1, 2, 3, 4]);
    this.noiseFactor = 0;
  }
  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    
    if (this.shapeIndex === 1) {
      push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.colorList[0]);
        ellipse(0, 0, this.r * 2);
      pop();
    }
    else if (this.shapeIndex === 2) {
      push();
        translate(pos.x, pos.y);
        rotate(angle);
        let rDifference = this.r/4;
        for (let i = 0; i < 4; i++) {
          push();
            if (i !== 0) {
              noFill();
              stroke(this.colorList[3])
            }
            else {
              noStroke();
              fill(this.colorList[2]);
            }
            ellipse(0,0, (this.r - (rDifference * i))*2);
          pop();
        }
      pop();
    }
    else if (this.shapeIndex === 3) {
      push();
        noStroke();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.colorList[1]);
        ellipse(0,0, this.r*2);
        fill(this.colorList[2]);
        ellipse(-this.r/2,0, this.r);
      pop();
    }
    else {
      push();
        noStroke();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.colorList[3]);
        ellipse(0,0, this.r*2);
        fill(this.colorList[4]);
        arc(0,0, this.r*2, this.r*2, 0, 180);
      pop();
    }
  }
}