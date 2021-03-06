// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require https://cdn.jsdelivr.net/npm/tweakpane@3.0.7/dist/tweakpane.min.js


const PARAMS = {
  SPEED: 0,
  FOV: 0.8,
  ang: 25,
  Wobble: 5,
  dx: 20,
}

const pane = new Tweakpane.Pane();
const SSPPEEDD = 0;
let SPEED = 0;
let R = 100;
let D = -4;
let acc = 1.2;
let ang = 25;
let YpWarp = 1.09; // Perspective warp Y
let dx = 10;      // X dist from center X
let fov_stretch = 1.7;
let colors = ['#2e4f85'];
let Wobble = 5;
let period = 0.6;
let Y_AXIS = 1;
let X_AXIS = 2;
let alpha = 225;
let t;
let EXPORT = false;


let c1, c2, c3;
let hel;
let textArr;
let thickness;


let TIMER = SPEED;


let speed = SPEED;
let r = R;
let h = 5;        // Line height
let d = D;


let speed1 = SPEED;
let r1 = R;
let d1 = D;
let h1 = 5;


  let purple;
  let pink;
  let blue;
  let black;
  let red;
  let g;
  let b;
  let gra;
  let gra1;
let fontSize = 80;




function setup() {
  
  
  
  // pane.addInput(PARAMS, "SPEED", {
  //   min: 0,
  //   max: 5
  // });
  pane.addInput(PARAMS, "FOV", {
    min: 0.4,
    max: 1.5
  });
  pane.addInput(PARAMS, "ang", {
    min: 5,
    max: 70
  });
  pane.addInput(PARAMS, "Wobble", {
    min: 0,
    max: 30
  });
  pane.addInput(PARAMS, "dx", {
    min: 5,
    max: 200
  });
  
  pane.on("change", ()=>{
    redraw();
    SPEED = SSPPEEDD;
  });
  


  //print(textArr);
  
  
  
  angleMode(DEGREES);
  createCanvas(600, 600);
  t=0;
  //noStroke();
}

function draw() {
  
  purple = color(199, 98, 227);
  pink = color(235, 89, 147);
  blue = color(55, 81, 212);
  black = color(0, 0, 0);
  red = 255 * noise(t+10);
  g = 255 * noise(t+15);
  b = 255 * noise(t+20);
  gra = color(red, g, b);
  gra1 = color(g, b, red);
  gra2 = color(b, red, g);
  
  
  
  // LOAD PARAM;
  
  SPEED = PARAMS.SPEED;
  ang = PARAMS.ang;
  Wobble = PARAMS.Wobble;
  dx = PARAMS.dx;
  fov_stretch = PARAMS.FOV;
  
  
  // noStroke();
  
  c1 = color(214, 118, 21);
  c1 = gra;
  c2 = color(0);
  c3 = color(0)
  
  let off = random(-10, 10);
  
  TIMER += acc;
  
  background(0);


    
  //drawBuildings();

    
  drawLine();
  
  if(TIMER > 14){
    drawLine1();
  }
    t+= 0.005;
  
  //drawFrame();
  
  
    if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 90);
  }


  
}







const drawBuildings = ()=>{
  
  for (let i=0; i<90; i++){
    
    let offx = (noise(2000*i))*width;
    let offy = (noise(440*i)-0.5)*100;
    let offw = (noise(2190*i)-0.5)*20;
    
      setGradient(offx*2.5-60, height/5+offy, 30+offw, height/3-height/5-offy,   c3, gra1, Y_AXIS);
  }
}

const setGradient = (x, y, w, h, c1, c2, axis) => {
  
  noFill();
 //noStroke();
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

const drawLine = () => {
  
   //noStroke();
  let off =  noise(frameCount*period)*Wobble;
  
  //TIMING
  
  if (speed > 24){
   speed = SPEED;
  
   r = R;
   h = 5;  
   d = D;
  }

  let cX = width/2;
  let cY = height/4-20;
  
  let w = 20;         // 1/2 Line width

  let sx = 10;       // Shift amount of top x and bottom x
 

  
  let XpWarp = 1.1; // Perspective warp Y
  
  
  
  speed += acc;
  
  


  
  let rx = r * cos(ang) + off;
  let ry = r * sin(ang);
  
  let dw = d * cos(ang) + off;
  let dh = d * sin(ang);
  
    //CENTER
    fill(214, 193, 54, alpha);

  
  quad(
    cX - w/2 + off , cY + ry,
    cX + w/2 + off , cY + ry,
    cX + w/2 + off , cY + h + ry + dh*0.7,
    cX - w/2 + off , cY + h + ry + dh*0.7
  );
  
  //SIDES 
  fill(255, alpha);
  
  quad(
    cX -dx + w - rx + sx,        cY + ry,  
    cX -dx - rx + sx,            cY + ry ,
    cX -dx - rx - dw,            cY + h + ry + dh,
    cX -dx - rx + w - dw,        cY + h + ry + dh
  );
  
    quad(
    cX +dx - w + rx - sx,       cY + ry,  
    cX +dx + rx - sx,           cY + ry,
    cX +dx + rx + dw,           cY + h + ry + dh,
    cX +dx + rx - w + dw,       cY + h + ry + dh
  );
  

  
   
  r+= speed;
  h *= YpWarp;
  d += speed * fov_stretch;
  
 
  

}




const drawLine1 = () => {
   //noStroke();
  let off =  noise(frameCount*period)*Wobble;
  
  //TIMING
  
  
  if (speed1 > 24){
   speed1 = SPEED;
  
   r1 = R;
   h1 = 5;  
   d1 = D;
    
  }
  
  
  let cX = width/2;
  let cY = height/4-20;
  
  let w = 20;         // 1/2 Line width
  let sx = 10;       // Shift amount of top x and bottom x
 

  
  let XpWarp = 1.1; // Perspective warp Y
  
  speed1 += acc;

  
  let rx = r1 * cos(ang) + off;
  let ry = r1 * sin(ang);
  
  let dw = d1 * cos(ang) + off;
  let dh = d1 * sin(ang);
  
  
      //CENTER
  
  fill(214, 193, 54, alpha);
  
  quad(
    cX - w/2  + off, cY + ry,
    cX + w/2 + off , cY + ry,
    cX + w/2 + off , cY + h1 + ry + dh*0.7,
    cX - w/2 + off , cY + h1 + ry + dh*0.7
  );
  
  fill(255, alpha);
  
  quad(
    cX -dx + w - rx + sx,        cY + ry,  
    cX -dx - rx + sx,            cY + ry ,
    cX -dx - rx - dw,            cY + h1 + ry + dh,
    cX -dx - rx + w - dw,        cY + h1 + ry + dh
  );
  
    quad(
    cX +dx - w + rx - sx,       cY + ry,  
    cX +dx + rx - sx,           cY + ry,
    cX +dx + rx + dw,           cY + h1 + ry + dh,
    cX +dx + rx - w + dw,       cY + h1 + ry + dh
  );
  
   
  r1 += speed1;
  h1 *= YpWarp;
  d1 += speed1 * fov_stretch;

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



const drawFrame = () => {
  
  push();
  noFill();
  strokeWeight(50);
  stroke(gra);
  rect(0,0, width, height);
  //strokeWeight(0);
  
  pop();
}


const drawSun = (r) => {
  fill(gra2);
  
  const x = map(millis() % 50000, 0, 50000, -r/2, width+r/2);
  const a = map(millis(), 0, 500, 0, PI);
  let offset = sin(a) * 100 -50;
  ellipse(x, height/3 + offset, r);
  
}

