//
//let yellow = color();
//
let t, dim;
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  
  
  t = 0;
  createCanvas(900, 900);
  
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  
  

  

}

function draw() {
  
  let purple = color(199, 98, 227);
  let pink = color(235, 89, 147);
  let blue = color(55, 81, 212);
  let black = color(0, 0, 0);
  let r=width/2.2;
  var red = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  var gra = color(red, g, b);
  var gra1 = color(g, b, red);
  c1 = gra;
  
  // stroke(235, 89, 147, 90);
  // strokeWeight(4);
  // //noStroke();
  // fill(blue);
  // rect(width/2-r/2, height/2-r/2, r, r);
  
  stroke(235, 89, 147, 50);
  //strokeWeight(4);
  noFill();
  //rect(width/2-r/2, height/2-r/2, r, r);
  background(red, g, b, 90);

  //setGradient(width/2-r/2, height/2-r/2, r, r, c1, blue, X_AXIS);
  
  t+= 0.001;
  setGradient(width/2-r/2, height/2-r/2, r, r, c1, blue, X_AXIS);
  setGradient(width/2-r/2, height/2-r/2, r/2, r/2, c1, blue, Y_AXIS);
  setGradient(width/2, height/2-r/2, r/2+1, r, blue, c1, X_AXIS);
 // setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  
  //-------------------------------------------
  noStroke();
  //var c = lerpColor(gra, blue, inter);
  rect(width/2-r/2, height/2-r/2, r/2, r/2);
  
}



function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}