let _X, _Y, scale;

function setup() {
  createCanvas(1000, 1000);
 // _X = random(width);
  //_Y = random(height);
  scale = 0.047;
}

function draw() {
  background(0);
  drawStuff(500);
  noLoop();

}

function setQuick(img, x, y, c) {
	const i = (y * img.width + x) * 4;
	
	img.pixels[i + 0] = c[0];
	img.pixels[i + 1] = c[1];
	img.pixels[i + 2] = c[2];
	img.pixels[i + 3] = c[3];
}



function drawStuff(r){
  
  img = createImage(r, r);
  img.loadPixels();
  
  for(let y=0; y< img.height; y++){
    for(let x =0; x<img.height; x++){
      
      
    //  dx = abs(_X - x);
    //  dy = abs(_Y - y);
      
      
      let R,G,B;
      let A = 255;
      
      let pr =1;
      let pg =1;
      let pb =30;
      
      R = map(pow(sin(x*scale), pr)/pow(cos(y*scale), pr), -1, 1, 0, 255);
      G = map(pow(cos(y*scale), pg)/pow(cos(x*scale), pg), -1, 1, 0, 255);
      B = map(pow(sin(y*scale), pb)/pow(cos(x*scale), pb), -1, 1, 0, 255);
      
      
      
      
      color[0] = R;
      color[1] = G;
      color[2] = B;
      color[3] = A;
      
      setQuick(img, x, y, color);
    }
  }
  
  
  img.updatePixels();

  noSmooth();
  image(img, 0, 0, width, height);
  
}


function keyPressed() {
    if(keyCode === ENTER) 
    {saveCanvas("pixel-pair" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
  }
}

