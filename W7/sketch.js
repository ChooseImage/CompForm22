
let s;

function setup() {
    createCanvas(800, 800);
    noFill();
    stroke(255);
    background(40);

    s = new Turtle();
  }
  
function draw() {



  }

let wave = 5;
// function drawS() {
//   stroke(255);
//   strokeWeight(3);
//   s.penUp();
//   s.moveTo(random(480), random(480));

//   for (var i = 0; i < 40; i++) {
//     s.penDown();
//     s.moveForward(wave);
//     s.penUp();
//     s.turnRight(6);
//     s.moveForward(wave * 2);
//   }
// }

function drawLine(length) {
    for (var i = 0; i < 60; i++) {
      t.penUp();
      t.moveTo(0, random(800));
      t.penDown();
  
      for (var length = 0; length < 500; length++) {
        t.moveForward(length + random(10));
        if (length < 45) {
          t.turnRight(random(30));
        } else {
          t.turnLeft(random(30));
        }
      }
    }
  }