/*

Press mouse to toggle audio

Original music: Ingenue - Atoms for Peace 

*/

const scl = 9; // The size of the grid
let cols, rows;
let r = 5;  // size of the circle unit
let c;  // stroing color later with noise
let contrast = 5;   //the power index of the noise, the bigger the darker
let noiseAmp = 6;   // How drastic the slope of the noise is  


let w = 800;
let h = 400;
function preload(){
  sound = loadSound('audio/ingenue.mp3');
}

function setup() {
  let canvas = createCanvas(w, h);
  canvas.mouseClicked(togglePlay);
  cols = floor(width / scl);
  rows = floor(height / scl);
  
  
  fft = new p5.FFT();
}

function draw() {
  background(0);
  
  let spectrum = fft.analyze(); //returns array of 1024, values seems to be between 0, 255
  //print(spectrum);
  
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      
    // Option-01 the specturm is not fully represented in the grid, this has generated a more aestheticly pleasing result so far imo
      let noiseSpec = noise(map(spectrum[x], 0, 255, 0, noiseAmp), map(spectrum[y], 0, 255, 0, noiseAmp));
      
    // Option-02 is a work in progress, this doesn't seem to be the right conversion, or the result is just not as prominant as option-01
      
    // let noiseSpec = noise(map(spectrum[floor(map(x, 0, cols, 0, spectrum.length))], 0, spectrum.length, 0, noiseAmp), map(spectrum[floor(map(y, 0, rows, 0, spectrum.length))], 0, spectrum.length, 0, noiseAmp));
      
      
      
      let c = map(pow(noiseSpec,contrast), 0, 0.9, 0, 255);
      
      
      push();
     
      translate(x * scl, y * scl);
	  fill(c);
      circle(0, 0, r);
      pop();
    }
  }
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
