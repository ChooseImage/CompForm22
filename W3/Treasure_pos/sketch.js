/*
Inspired by and built upon Beatriz Ribeiro's sketch [3D Terrain w/ Noise()](https://compform.net/js_lab/js_lab.html?https://sketches2022spring.compform.net/posts/68m6pX79YRdPq7Kva/code)
*/

const boxSize = 12;

const noiseScale = 1/200; //smoothing (spread)

let mapping = null;

let n;
let l;

let c1 = "#00A878";
let c2 = "#D8F1A0";
let c3 = "#F3C178";
let c4 = "#FE5E41";
let c5 = "#829399";
let c6 = "#FF0000";


let sliderGroup = [];
let X;
let Y;
let p = 20;
let sizeN = 4;

function preload() {
  Spec_bold = loadFont('font/Spectral-Bold.ttf');
  Spec_bold_it = loadFont('font/Spectral-BoldItalic.ttf');
  Spec_thin = loadFont('font/Spectral-ExtraLight.ttf');
}

function setup() {

  createCanvas(800, 1100, WEBGL);
  background(200);
  rectMode(CENTER);
  noStroke();
  fill(170, 10);
  rect(6, 6,500, 800);
  fill('#FFF0E4');

  rect(0, 0,500, 800);
  
  let seed = floor(random(100));

  noiseSeed(seed);
  
  noiseDetail(10, 0.1); //octaves, falloff

  textFont(Spec_bold_it);
  fill(40);
  textSize(26);
    text('#'+seed, -18,150);


}

function draw(){
  
  framing();
  ambientLight(120);
  let dirX = width/2;
  let dirY = height/2;
  directionalLight(255, 255, 255, dirX, 12*dirY, -1);
  
  noStroke();
  //box(500, 800, 10);

  
  push();
  translate(-150, 0, 0);

  drawMap();
  stroke(0);
  pop();
  
  //noFill();
  noStroke();
  fill(30);

  

 
  //noLoop();

}


function pickTerrain(x, z){
  let h = noise((x)*noiseScale, (z)*noiseScale, frameCount*0.01);
  
  if (h < 0.2){  c = c1; } 
  else if (h < 0.3) { c = c2; } 
  else if (h < 0.4) { c = c3; }
  else if (h < 0.58) { c = c4; }
  else if (h < 0.7) { c = c5; }
  else { c = c6; }
  
  return color(c);
    
}

function drawMap(){




  for (let x = -height/2; x < height/2; x += boxSize){
	for (let z = -height/2; z < height/2 ; z += boxSize){      
      push();
      translate(x, 0, z);
      
      let n = noise(x * noiseScale + 10, z * noiseScale + 10, 0);
      let hills = int(n * 10);
      
	  for (let h = 0; h <= hills; h++) 
      {
      if(pow(x,2)+pow(z,2)<pow(width/sizeN,2)){
	  translate(0, -boxSize, 0);
      fill(pickTerrain(x, z));
	  box(boxSize);
      }
	  }
	  pop();
      
      fill(0);
      box(boxSize);
    }
  }
}

function mouseReleased(){
  save("canvas");
}

function framing(){
  camera(0.1*width, -1.5*height, 0);
}