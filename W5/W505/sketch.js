
let iterations = 10;
let img;
let r, g, b;
r= 0;
g= 0;
b=0;
function preload() {
  // Load the image
  img = loadImage("s1.png");
}

function setup() {
  createCanvas(960, 540);
  pixelDensity(0.5);
  img.resize(width, height);
}

function draw() {
  
  for(let i =0; i<iterations; i++){

  img.loadPixels();
  
  const newPixels = [];
  
  

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      
      
      const index = (y * width + x) * 4;
      let nextIndex = (y * width + x) * 4 + (12 * int(random(-2, 2)));
      let nextIndex1 = (y * width + x) * 4 + (16 * int(random(-2, 2)));
      const lightness = (img.pixels[index + 0] + img.pixels[index + 1] + img.pixels[index + 2])/3;

 
      
      if(lightness<100){
        
        r = (img.pixels[nextIndex + 0] + img.pixels[index + 0] + img.pixels[nextIndex1 + 0])/3;
        g = (img.pixels[nextIndex + 1] + img.pixels[index + 1] + img.pixels[nextIndex1 + 1])/3;
        b = (img.pixels[nextIndex + 2] + img.pixels[index + 2] + img.pixels[nextIndex1 + 2])/3;
      }
      
      newPixels.push(r, g, b, 255);
      

    }
  }
  
  for(let i = 0; i<newPixels.length; i++){
   img.pixels[i] = newPixels[i]; 
  }

  img.updatePixels();
  
  //img.image(img, 0, 0, width, height);

  image(img, 0, 0);
    background(255, 30);

  }
  
  noLoop();
}