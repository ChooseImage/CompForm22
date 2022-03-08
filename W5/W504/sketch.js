let img;

function preload() {
  // Load the image
  img = loadImage("L.png");
}

function setup() {
  createCanvas(498, 498);
  pixelDensity(1);
  img.resize(width, height);
}

function draw() {

  img.loadPixels();
  
  const newPixels = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {

      const index = (y * width + x) * 4;

      let nextIndex = (y * width + x) * 4 + (12 * int(random(-2, 2)));
      const r = (img.pixels[nextIndex + 0] + img.pixels[index + 0])/2;
      const g = (img.pixels[nextIndex + 1] + img.pixels[index + 1])/2;
      const b = (img.pixels[nextIndex + 2] + img.pixels[index + 2])/2;
      
      newPixels.push(r, g, b, 255);
      

    }
  }
  
  for(let i = 0; i<newPixels.length; i++){
   img.pixels[i] = newPixels[i]; 
  }

  img.updatePixels();

  image(img, 0, 0);
}