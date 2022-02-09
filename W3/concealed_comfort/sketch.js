const bgColor = "#041119";

function setup() {
  canvas = createCanvas(460, 700);
  fill(255);
}


function draw() {
  noiseDetail(100, 0.01);
  background(bgColor);
  fill(255);
  textSize(20.2);
  text('HAPPY BREAKUP', 2*width/7+11,2*height/7-12);
  textSize(16);
  text('CONCEALED DELIGHT', 2*width/7+11,5*height/7.2);
  noFill();
  stroke(255);
  strokeWeight(1);
  
  
  for(n = 2.2*height/7; n<5*height/7.6; n+=height/200){
  beginShape();
  for (i = 2*width/7; i < 5*width/7; i+=width/40) {
    let d = dist(i,n,width/2,n);
    curveVertex(i,n-noise(n, i+frameCount*0.01)*(width/9-d/2))
  }
  endShape();
  }
  
  canvas.loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if(random(10)<0.005){
      canvas.set(x, y, color(noise(frameCount)*130, 0, 130));
    }
    }
  }
  canvas.updatePixels()
  
  
 // noLoop();
  
}

function mouseReleased() {
	save('Concealed_Delight' + hour() + minute() + second())
}