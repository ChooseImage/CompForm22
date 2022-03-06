// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js\
let gradientSlope = 0.76;

let X, Y;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  angleMode(RADIANS);
  X = random(width);
  Y = random(height);
}

function draw() {
  background(51);
  
  drawQuick(gradientSlope);
  
  noLoop();
}

let drawQuick = (power) => {
  loadPixels();
  for (let x = 0; x < width; x++){
    for (let y= 0; y <height; y++){
      
      
      let n = (y*width + x) * 4;
      
      
      let dx = abs(X - x);
      let dy = abs(Y - y);
      
      let offx = (noise(frameCount*0.001)*2-1) * width;
      let offy = (noise(frameCount*0.001)*2-1) * height;
      
      let di = abs(n/4-X*Y);
      let pi = pow(di, power);

      
      let px = pow(dx, power);
      let py = pow(dy, power);
      
      let r = map(sin(n/width), -1, 1, 0, 255);
      let g = map(tan(n/width), -1, 1, 0, 255);
      let b = map(cos(n/width), -1, 1, 0, 255);
      
      let tr = map(noise(x, frameCount*0.06), 0, 1, 0, 255);
      let tg = map(noise(y, frameCount*0.06), 0, 1, 0, 255);
      let tb = map(noise(x, frameCount*0.06, y), 0, 1, 0, 255);
      
      r = map(px, 0, pow(width*2,power), 0, 255);
      g = map(py, 0, pow(height*2,power),0,255);
      b = map(py, 0, pow(height*2,power),0,255);

            
      pixels[n] = r;
      pixels[n+1] = g;
      pixels[n+2] = b;

      
    }
  }
  updatePixels();
}


function keyPressed() {
  if(keyCode === ENTER) saveCanvas('canvas');
}
