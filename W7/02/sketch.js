
// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js


let t, n;
let totally_subjective_nice_looking_angle_factors = iangs = [1.811, 1.817, 1.818, 1.667846];

function setup() {
  createCanvas(800, 800);
  t = new Turtle();
 
}

function draw() {
  background(0);

  noFill();
  stroke(255, 3);

  
for(let i = 0; i<60; i++){
    // drawField(width/2+noise(i, 100)*50, height/2+noise(100,i)*50, i, iangs[0], 2300, 340);
     drawField(width/2, height/2, i, iangs[2], 4200, 525);
}
 

  noLoop();
}

function drawField(x, y, n, iang, r, p){
    for(let i =0; i<n; i++){
      spiro(x, y, r, p, iang);
  }
}

function spiro(posx, posy, r, npoints, iang){
  
  t.penUp();
  t.moveTo(posx, posy);

  t.penDown();
  let turnAng = 180 - 360/npoints;

  for (let i = 0; i < npoints; i++) {
    
    strokeWeight(sin(i)*0.5);
    t.moveForward(r);
    t.turnRight(iang*turnAng);
  }

}

function keyPressed() {
	save('spiro.jpg')
}