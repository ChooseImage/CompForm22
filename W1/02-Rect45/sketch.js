let w = 800;
let h = 800;
let r = 270;
let n = 0;
let a = 45;
let d = 30;

function setup() {
  createCanvas(w, w);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220);
  
  translate(w/2, w/2);
  
  drawRects();
  rotate(a);
  //rect(w/2, w/2, 40);


}

function draw() {
  //background(220);
}

function drawRects(){
  while (n<1000){
    rotate(a);
    stroke(255);
    strokeWeight(0.1);
    rect(0, 0, (w-d)/n);
    n+=0.002;
    noFill();
    
  }
}