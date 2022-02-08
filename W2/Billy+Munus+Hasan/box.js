let colorPalette = ["#FFF8F0", "#4B4948", "#F16A35", "#208973", "#B79A23"];

class Box {
  constructor(x, y, w, h) {
    let options = {
      friction: 0.1,
      restitution: 0.5,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.mode = deckBox();
    this.colorList = shuffle(colorPalette);
    this.rotateAngle = random(360);
    World.add(world, this.body);
    //this.color = random(colors);
  }

  show() {
    angleMode(DEGREES);
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rotate(this.rotateAngle);
    rectMode(CENTER);
    noStroke();

    fill(this.colorList[0]);
    rect(0, 0, this.w, this.h);
    drawModeBox(this.mode, this.colorList, this.w, this.h);
    pop();
  }
}

function drawModeBox(modes, colorList, bWidth, bHeight) {
  switch (modes) {
    case 0:
      push();
      noStroke();
      fill(colorList[1]);
      rect(-bWidth / 4, -bHeight / 4, bWidth / 2, bHeight / 2);
      fill(colorList[2]);
      rect(bWidth / 4, bHeight / 4, bWidth / 2, bHeight / 2);
      pop();
      break;
    case 1:
      push();
      noStroke();
      fill(colorList[3]);
      arc(0, 0, bWidth, bWidth, 90, 270);
      fill(colorList[4]);
      arc(0, 0, bWidth / 2, bWidth / 2, 270, 90);
      pop();
      break;
    case 2:
      push();
      noStroke();
      fill(colorList[1]);
      triangle(-bWidth / 2, -bHeight / 2, bWidth / 2, -bHeight / 2, 0, 0);
      fill(colorList[2]);
      triangle(-bWidth / 2, 0, bWidth / 2, 0, 0, bHeight / 2);
      pop();
      break;
    case 3:
      push();
      noStroke();
      fill(colorList[3]);
      arc(-bWidth / 2, 0, bWidth, bWidth, 270, 90);
      arc(bWidth / 2, 0, bWidth, bWidth, 90, 270);
      fill(colorList[4]);
      rect(0, 0, bWidth / 2, bHeight / 2);
      fill(colorList[2]);
      ellipse(0, 0, bWidth / 4, bHeight / 4);
      pop();
      break;
    case 4:
      push();
      noStroke();
      fill(colorList[1]);
      rect(
        -bWidth / 4 + bWidth * 0.25,
        -bHeight / 4 - bHeight * 0.25,
        bWidth,
        bHeight / 4
      );
      fill(colorList[2]);
      triangle(
        -bWidth / 2,
        -bHeight / 4,
        -bWidth / 2 + bWidth / 3,
        -bHeight / 4,
        -bWidth / 2 + bWidth / 6,
        bHeight / 2
      );
      triangle(
        -bWidth / 2 + bWidth / 3,
        -bHeight / 4,
        -bWidth / 2 + bWidth / 3 + bWidth / 3,
        -bHeight / 4,
        -bWidth / 2 + bWidth / 6 + bWidth / 3,
        bHeight / 2
      );
      triangle(
        -bWidth / 2 + bWidth / 3 + bWidth / 3,
        -bHeight / 4,
        -bWidth / 2 + bWidth / 3 + bWidth / 3 + bWidth / 3,
        -bHeight / 4,
        -bWidth / 2 + bWidth / 6 + bWidth / 3 + bWidth / 3,
        bHeight / 2
      );
      pop();
      break;
    case 5:
      fill(colorList[1]);
      ellipse(-bWidth / 4, 0, bWidth / 2, bHeight);
      fill(colorList[2]);
      rect(bWidth / 4, 0, bWidth / 2, bHeight);
      fill(colorList[3]);
      ellipse(bWidth / 4, 0, bWidth / 2, bHeight);
      break;
    case 6:
      fill(colorList[2]);
      rect(bWidth / 4, 0, bWidth / 2, bHeight);
      fill(colorList[3]);
      rect(bWidth / 8, 0, bWidth / 2, bHeight);
      fill(colorList[4]);
      rect(bWidth / 8, 0, bWidth / 4, bHeight);
      break;
    case 7:
      push();
      noStroke();
      fill(colorList[2]);
      arc(-bWidth / 2, -bHeight / 2, bWidth*2, bWidth*2, 0, 90);
      fill(colorList[3]);
      arc(-bWidth / 2, -bHeight / 2, bWidth*1.5, bWidth*1.5, 0, 90);
      fill(colorList[4]);
      arc(-bWidth / 2, -bHeight / 2, bWidth*1, bWidth*1, 0, 90);
      pop();
      break;
    default:
      break;
  }
}

let deckBoxs = [];
let deckBoxDraws = 0;

function deckBox() {
  if (deckBoxs[0] === undefined) {
    //  munus - create deckBox
    for (let i = 0; i < 8; i++) {
      deckBoxs.push(i);
    }
    deckBoxs = shuffle(deckBoxs);
  }

  if (deckBoxDraws == 8) {
    deckBoxDraws = 0;
    deckBoxs = shuffle(deckBoxs);
  }

  deckBoxDraws++;
  return deckBoxs[deckBoxDraws - 1];
}
