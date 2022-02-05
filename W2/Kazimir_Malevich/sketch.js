//require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let h = 800;
let w = 600;
let cH = 420;
let cW = 300;
let margin = 100;
let yOff = 40;
let r = 200;
let portion = 0.2;
let barPortion = 14;


function setup() {
  rectMode(CENTER);
  angleMode(DEGREES);
  createCanvas(w, h);
  background(255, 254, 237);
  noStroke();
  fill(235, 234, 213);
  drawCanvas();


  drawBar(w/2+20, h/2-yOff-40, 370, -25);
  
  drawFan(w/2+45, h/2-50, 350, 190, 290, 120);
  drawFan(w/2+45+10, h/2-50+45, 180, 190, 290, 30);
      fill(10);
  rect(550, 660, 60, 11);
    fill(20, 200);
  textSize(18);
  textFont('Amaranth');
  text('Abb. 79', 80, 595);
  textSize(10);
  text('SUPREMATISTISCHE KOMPOSITION.', 150, 590);
  text('WEISS  IN  WEISS.  (EMPFINDUNG DES VERKLINGENS.)', 150, 602);
    text('1916.', 150, 614);

  textSize(26);
  text('83', 520, 690);
  drawFan(w/2+30+55, h/2-50+130, 90, 190, 290, 20);
  fill(10);
  
  
  fill(20, 200);
  textSize(18);
  textFont('Amaranth');
  //text('Abb. 79', 80, 590);
  textSize(26);
  text('83', 520, 690);
  
  
}

function drawCanvas(){
  rect(w/2, h/2-yOff, cW, cH);
    filter(BLUR, 1.4);

}

function setNoise() {
    loadPixels();
    for (let x = 0; x < width; x++ ) {
        for (let y = 0; y < height; y++ ) {
            if (random(1) > 0.92) {
                const index = (x + y * width) * 4;
                pixels[index] = 255;
                pixels[index + 1] = 254;
                pixels[index + 2] = 255;
                pixels[index + 3] = random(220,250);
            }
        }
    }
    updatePixels();
}



function drawBar(x, y, l, a){
  push();
  translate(-200, 15);
  rotate(a);
  a+=1;
  for (let i = 0; i < l/barPortion; i ++){
  stroke(20, map(i, 0, l/barPortion, 200, 0));
  line(x+i, y, x+i, y+l);
  }
  pop();
      filter(BLUR, 0.7);
  setNoise()
}
  
  

function drawFan(x, y, r, start, end, thickness){
    noFill();
  for (let i = r; i >= portion*r; i-=1){
    stroke(20, pow(map(i, r, portion*r, 120, -1*thickness), 1.04));
    arc(x, y, i, i, start, end);
  }
      filter(BLUR, 0.8);
  setNoise()
}

function mouseReleased(){
  	save('Kazimir Malevich' + '.jpg')
}