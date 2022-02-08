let particles = [];
let numP = 180;
let sizeP = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);
  for (let i =0; i<numP; i++){
   let p = new Particle(); 
      particles.push(p);

  }

  for (let i = particles.length -1; i>=0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()){
      
      particles.splice(i,1);
    }
  }
}

class Particle {
  
  constructor () {
    this.x = width/2;
    this.y = height/2;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.ax = random(-0.1, 0.1);
    this.ay = random(0.1, -0.1);
    this.alpha = 255;
  }
  
  finished(){
    return this.alpha <0;
  }
  
  update(){
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy; 
    this.alpha -=5;
  }
  
  show() {
    noStroke();
//stroke(255);
    fill(255, this.alpha);
    ellipse(this.x+random(-(width/2-mouseX), width/2-mouseX), this.y+random(-(height/2-mouseY), height/2-mouseY), sizeP);
   // text ("0", this.x, this.y);
  }
}

