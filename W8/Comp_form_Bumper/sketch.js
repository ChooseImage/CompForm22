function preload() {
  font = loadFont('https://fonts.gstatic.com/s/newscycle/v14/CSR54z1Qlv-GDxkbKVQ_dFsvWNRevA.ttf');
}

let len = 140;
let P1 = 50;
let P2 = 38;
let N = 120;
let FontSize = 15;
const EXPORT = true;

function setup() {

  frameRate(30);
  createCanvas(800, 800, WEBGL);
  
  angleMode(DEGREES);
  
 // openGL 
  textFont(font);
  textSize(FontSize);
  textAlign(CENTER, CENTER);
  fill(255);
  colorMode(RGB);

}      



function draw() {
  
  
    len = map((sin(map(frameCount, 0, 45, 0, 360))*200), -200, 200, 180, 200);

    fill(0);
    plane (width, height);
  
    push();
  
    translate(noise(frameCount)*5, noise(frameCount+500, frameCount)*5);
    divide(width / 2 - len / 2, height / 2 + len * sqrt(3) / 4, len, 1, 5);
  
    pop();

	drawText1(" Computational ",0);
    drawText1(" Computational ", 200);
  	drawText2(" Form ", -40);
    drawText2(" Form ", 40);
	
  
  if (EXPORT) {
    saveFrame("Bumper", frameCount, "jpg", 90);
  }
  
  if(frameCount > 90){
    noLoop();
  }


}

const drawText1 = (txt, offA) => {
  
    	for (let i = 0; i < N; i ++) {
      
		  let y = 2 * PI * P1 * P2 * i / N;
		
		  fill(219, 123, 232, 140);
          //fill(255, i/N);
		  push();
      
          rotateY(millis()/-40 - 200);
          rotateY(y/P1);
          translate(0, 0, -200);
          rotateX(-2*y/P2+offA);
          translate(0, 0, 100);
          rotateZ(-PI/3+500);
          let tx = txt;
          fill(214, 248, 214, noise(frameCount)*255);
          text(tx.charAt(i % tx.length), 0, 0);
          pop();

	}
  
}


const drawText2 = (txt, offH) => {
  
      	for (let i = 0; i < N; i ++) {
      
		  let y = 2 * PI * P1 * P2 * i / N;
		
		  fill(245, 235, 41, 140);
          //fill(255, i/N);
		  push();
          rotateY(millis()/40-10);
          rotateY(y/P1);
          translate(0, 0, -200);
          translate(0, offH, 0);
          rotateY(PI/3+500);
          let tx = txt;
          fill(127, 198, 164, noise(frameCount)*255);
          text(tx.charAt(i % tx.length), 0, 0);
          pop();
        }
}



function divide(x, y, l, lvl, max) {
  if (lvl == max) {
    tri(x, y, l);
  } else {
    divide(x, y, l / 2, lvl + 1, max);
    divide(x + l / 2, y, l / 2, lvl + 1, max);
    divide(x + l / 4, y - l * sqrt(3) / 4, l / 2, lvl + 1, max);
  }
}

function tri(x, y, l) {
  push();
  rotateX(180);
  translate(-width/2, -height/2);
  noFill();
  stroke(255, noise(frameCount)*40);
  strokeWeight(noise(frameCount)*10);
  triangle(x, y, x + l / 2, y - l * sqrt(3) / 2, x + l, y);
  pop();
}
  
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  let paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
  
  


