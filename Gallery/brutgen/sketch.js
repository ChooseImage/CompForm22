// require https://cdn.jsdelivr.net/npm/tweakpane@3.0.7/dist/tweakpane.min.js
// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js

const pane = new Tweakpane.Pane();

let w = 800;
let h = 800;
let woff = w*0.1;
let hoff = h*0.06;
let off = 0.3;

// front building
let x1 = 400;
let y1 = 400;
let w1 = 120;
let d1 = 100;
  
// rear building 
let x2 = 400;
let y2 = 400;
let w2 = 120;
let d2 = 100;
  
  
let xGap = 10;
let yGap = 10;
let sizeX = 200;
let sizeY = 30;
let sizeZ = 80;

let numCols;
let numRows;



  let winSize = 8;



  // Tweakpane params
  
  const PARAMS = {
  
    
    backGroundColor: "#bfbfef",
    squareColor: "#FEC5BB",
    BuildingColor:'#ECE4DB',
    BridgeColor:'#D8E2DC',
    WindowColor:'#b5bdd2',
    Shadow: 20,
    
    Perspective:0.3,
    
    AposX:153,
    AHeight:300,
    Awidth:150,
    Adepth:95,
    
    BposX:400,
    BHeight:84,
    Bwidth:430,
    Bdepth:230,  
    
    Bridges:5,
    BridgeGap:50,
    
    AWindowSize: 45,
    AWindowRows: 15,
    AWindowColumns: 3,
    AWindowsPosX:2,
    AWindowsPosY:13,
    
    BWindowSize: 20,
    BWindowRows: 27,
    BWindowColumns: 13,
    BWindowsPosX:5,
    BWindowsPosY:0
};

const color = pane.addFolder({
  title:"Colors",
  expanded: false,
})

const buildA = pane.addFolder({
  title:"Building A",
  expanded: false,
})

const buildB = pane.addFolder({
  title:"Building B",
  expanded: false,
})

const bridges = pane.addFolder({
  title:"Bridges",
  expanded: false,
})


function setup() {
  createCanvas(w, h);
  
  
  color.addInput(PARAMS, "backGroundColor", {
    view: "color",
  });

  color.addInput(PARAMS, "squareColor", {
    view: "color",
  });
  
  color.addInput(PARAMS, "BuildingColor", {
    view: "color",
  });
  
  color.addInput(PARAMS, "BridgeColor", {
    view: "color",
  });
  
  color.addInput(PARAMS, "WindowColor", {
    view: "color",
  });
  
  color.addInput(PARAMS, "Shadow", {
    min: 0,
    max: 100,
  });
  
  
  pane.addInput(PARAMS, "Perspective", {
    min: 0,
    max: 0.8,
  });
  
  
  
  buildA.addInput(PARAMS, "AposX", {
    min: 100,
    max: 210,
  });
  

  buildA.addInput(PARAMS, "AHeight", {
    min: 5,
    max: 300,
  });
  buildA.addInput(PARAMS, "Awidth", {
    min: 70,
    max: 150,
  });
  buildA.addInput(PARAMS, "Adepth", {
    min: 80,
    max: 150,
  });

  
  
  buildB.addInput(PARAMS, "BposX", {
    min: 350,
    max: 450,
  });
  buildB.addInput(PARAMS, "BHeight", {
    min: 50,
    max: 400,
  });
  buildB.addInput(PARAMS, "Bwidth", {
    min: 90,
    max: 450,
  });
  buildB.addInput(PARAMS, "Bdepth", {
    min: 100,
    max: 350,
  });


  bridges.addInput(PARAMS, 'Bridges', {
  step: 1,
  min: 0,
  max: 6,
});
  
  bridges.addInput(PARAMS, 'BridgeGap', {
  
  min: 45,
  max: 180,
});
  
  buildA.addInput(PARAMS, "AWindowSize", {
    min: 0,
    max: 50,
  });
  
  
  
  buildA.addInput(PARAMS, "AWindowRows", {
    step: 1,
    min: 0,
    max: 200,
  });
  

  buildA.addInput(PARAMS, "AWindowColumns", {
    step: 1,
    min: 0,
    max: 9,
  });

  buildA.addInput(PARAMS, "AWindowsPosX", {
    step:1,
    min: 1,
    max: 60,
  });
  buildA.addInput(PARAMS, "AWindowsPosY", {
    min: 0,
    max: 600,
  });
  
  buildB.addInput(PARAMS, "BWindowSize", {
    min: 0,
    max: 50,
  });
  
  
  
  buildB.addInput(PARAMS, "BWindowRows", {
    step: 1,
    min: 0,
    max: 80,
  });
  

  buildB.addInput(PARAMS, "BWindowColumns", {
    step: 1,
    min: 0,
    max: 200,
  });

  buildB.addInput(PARAMS, "BWindowsPosX", {
    step:1,
    min: 1,
    max: 60,
  });
  buildB.addInput(PARAMS, "BWindowsPosY", {
    min: 0,
    max: 600,
  });
  
}

function draw() {
  
  background(PARAMS.backGroundColor);
  //rect(0,0,w,h);
  
  translate(100, 100);
  
  drawStuff();
  
  
  //setNoise();
}



function drawStuff(){
    let outofBoundsA = PARAMS.Awidth<PARAMS.AWindowSize*PARAMS.AWindowColumns;
   let outofBoundsB = PARAMS.Bwidth<PARAMS.BWindowSize*PARAMS.BWindowColumns;
  
  fill(PARAMS.squareColor);
  rect(0,0,600);
  

  
  off = PARAMS.Perspective;
  
  //Rear
  drawUnit(PARAMS.BposX, PARAMS.BHeight, PARAMS.Bwidth, PARAMS.Bdepth);
  
  
  // BRIDGES
  howManyBridge(PARAMS.Bridges, PARAMS.BridgeGap);
  
  
  //Front
  drawUnit(PARAMS.AposX, PARAMS.AHeight, PARAMS.Awidth, PARAMS.Adepth);
  

  
  numCols = 100;
  numRows = 200;
  winSize = 20;

  if(!outofBoundsB){
  makeWindow(PARAMS.BposX, PARAMS.BHeight,PARAMS.BWindowColumns, PARAMS.BWindowRows, PARAMS.BWindowSize, 1, PARAMS.BWindowsPosX, PARAMS.BWindowsPosY);
  }else return;
  
  if(!outofBoundsA){
    makeWindow(PARAMS.AposX, PARAMS.AHeight,PARAMS.AWindowColumns, PARAMS.AWindowRows, PARAMS.AWindowSize, 1, PARAMS.AWindowsPosX, PARAMS.AWindowsPosY);
  }else return;
}




function howManyBridge(n, d){
  
  if(n===0){
    return
  }else if(n===1){
    drawLink(x1, y1, xGap, yGap, sizeX, sizeY, sizeZ);
  }else if(n===2){
    drawLink(x1, y1, xGap, yGap, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d, sizeX, sizeY, sizeZ);
  }else if(n===3){
    drawLink(x1, y1, xGap, yGap, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*2, sizeX, sizeY, sizeZ);
  }else if(n===4){
    drawLink(x1, y1, xGap, yGap, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*2, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*3, sizeX, sizeY, sizeZ);
  }else if(n===5){
    drawLink(x1, y1, xGap, yGap, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*2, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*3, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*4, sizeX, sizeY, sizeZ);
  }else if(n===6){
    drawLink(x1, y1, xGap, yGap, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*2, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*3, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*4, sizeX, sizeY, sizeZ);
    drawLink(x1, y1, xGap, yGap+d*5, sizeX, sizeY, sizeZ);
  }
  
}


function drawUnit(x1, y1, w1/*width*/, w2/*depth*/){
  
  let h1 = h;
  noStroke();
  
  let X1, X2, Y1, Y2, Y3, Y4;
  
  X1 = x1;
  X2 = x1+ w1;
  Y1 = y1;
  Y2 = y1+h;
  Y3 = y1+h+w1*off;
  Y4 = y1+w1*off;
  
  
  
  // RIGHT FACING SIDE
  
  fill(PARAMS.BuildingColor);

  beginShape();
  vertex(X1, Y1); // TOP LEFT
  vertex(X1, Y2); // BOT LEFT
  vertex(X2, Y3); // BOT RIGHT
  vertex(X2, Y4); // TOP RIGHT
  endShape();
  
  // LEFT FACING SIDE
  
  let I1, I2, J1, J2, J3, J4;
  
  I1 = x1;
  I2 = x1 - w2;
  J1 = y1;
  J2 = y1+h;
  J3 = y1+h+w2*off;
  J4 = y1+w2*off;
  
  //push();
  fill(PARAMS.BuildingColor);
  
  beginShape();
  vertex(I1, J1);
  vertex(I1, J2);
  vertex(I2, J3);
  vertex(I2, J4);
  endShape();
  //pop();
  
  push();
  fill(0, PARAMS.Shadow);
  
  beginShape();
  vertex(I1, J1);
  vertex(I1, J2);
  vertex(I2, J3);
  vertex(I2, J4);
  endShape();
  pop();
  
}

function drawLink(x, y, xGap, yGap, sizeX, sizeY, sizeZ){
  
  
  fill(PARAMS.BridgeColor);
  x = PARAMS.BposX;
    
  
  // RIGHT FACING SIDE

  let newX = x-xGap;
  let newY = y+yGap+sizeY;
  
  let U1, U2, V1, V2, V3, V4;
  
  U1 = x-xGap;
  U2 = U1 - sizeX;
  V1 = y+yGap+sizeY;
  V2 = y+yGap;
  V3 = y+yGap-sizeX*off;
  V4 = y+yGap+sizeY-sizeX*off


  
  beginShape();
  vertex(U1, V1); // BOT RIGHT
  vertex(U1, V2); // TOP RIGHT
  vertex(U2, V3); // TOP LEFT
  vertex(U2, V4); // BOT LEFT
  endShape();
   
  // DOWN FACING SIDE
  
  let N1, N2, N3, N4, M1, M2, M3, M4;
  
  fill(PARAMS.BridgeColor);
  
  
  
  N1 = x-xGap;
  N2 = x-xGap-sizeZ;
  N3 = x-xGap-sizeX-sizeZ;
  N4 = x-xGap-sizeX;
  M1 = y+yGap+sizeY;
  M2 = y+yGap+sizeY+sizeZ*off;
  M3 = y+yGap+sizeY-sizeX*off+sizeZ*off;
  M4 = y+yGap+sizeY-sizeX*off;
  
  beginShape();
  vertex(N1, M1); // TOP RIGHT
  vertex(N2, M2); // BOT RIGHT
  vertex(N3, M3); // BOT LEFT
  vertex(N4, M4); // TOP LEFT
  endShape();
  
  
  push();
  fill(0,PARAMS.Shadow);
    beginShape();
  vertex(N1, M1); // TOP RIGHT
  vertex(N2, M2); // BOT RIGHT
  vertex(N3, M3); // BOT LEFT
  vertex(N4, M4); // TOP LEFT

  endShape();
  pop();
}
  
  function makeWindow(x, y, numCols, numRows, winSize, margin, firstCol, offY){
    
  let winEdgeX = margin;
  let winEdgeY = offY;
    
 
  //print(outofBounds);
    
  push();
  fill(PARAMS.WindowColor);
    noStroke();
  //stroke(200);
  for(let col = firstCol; col<numCols; col++){
    for(let row = 0; row<numRows; row++){
      
      let u1, o1, u2, o2, o3, o4;
      
      u1 = x+winEdgeX+winSize*col;
      o1 = y+winEdgeY+winSize*row+winSize*col*off;
      u2 = u1+winSize; 
      o2 = o1+winSize;
      o4 = o1+winSize*off;
      o3 = o4+winSize;
      
      beginShape();
      vertex(u1,o1);
      vertex(u1,o2-margin);
      vertex(u2-margin,o3-margin);
      vertex(u2-margin,o4);
      endShape();
    }
  }
  pop();
  }
  
  function setNoise() {
    loadPixels();
    for (let x = 0; x < width; x++ ) {
        for (let y = 0; y < height; y++ ) {
            if (random(1) > 0.92) {
                const index = (x + y * width) * 4;
                pixels[index] = 255;
                pixels[index + 1] = 254;
                pixels[index + 2] = 255;
                pixels[index + 3] = random(220,250);
            }
        }
    }
    updatePixels();
}

 
// function mouseReleased() {
//   save('Brut_gen' + hour() + minute() + second() + '.jpg')
// }
  