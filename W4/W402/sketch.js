/* 
Inspired by Levente Sandor's Nervous Waves 2
*/

let density = 20;
 


function setup() {
  createCanvas(800, 800);
  fill(0);
  noStroke();
  rectMode(CENTER);
  frameRate(30);
  noiseDetail(2, 0.9);
}

function draw() {
  background(0);
  
  drawGrid(density);

}

function drawGrid(density){
    for (let x = 10; x < width; x += 10) {
    for (let y = 10; y < height; y += 10) {
      let n = noise(x * 0.005, y * 0.005, mouseX * 0.005, mouseY * 0.005);
      let c1 = map(n, 0, 1, 0, 255);
      let c2 = 255 - c1;
      fill(c2, 20, c1);
      push();
      translate(x, y);
      rotate(TWO_PI * n);
      scale(density * n);
      rect(0, 0, 1, 1);
      pop();
    }
  }
}