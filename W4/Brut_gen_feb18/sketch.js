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


  let winEdge = 5;
  let winSize = 8;



  // Tweakpane params
  
  const PARAMS = {
  
    
    backGroundColor: "#f2d174",
    BuildingColor:'#e8e3d5',
    BridgeColor:'#d6d5e8',
    
    Perspective:0.3,
    
    AposX:160,
    AHeight:120,
    Awidth:150,
    Adepth:100,
    
    BposX:400,
    BHeight:320,
    Bwidth:430,
    Bdepth:200,  
    
    Bridges:4,
    BridgeGap:72
};


function setup() {
  createCanvas(w, h);
  
  
  pane.addInput(PARAMS, "backGroundColor", {
    view: "color",
  });
  
  pane.addInput(PARAMS, "BuildingColor", {
    view: "color",
  });
  
  pane.addInput(PARAMS, "BridgeColor", {
    view: "color",
  });
  
  
    pane.addInput(PARAMS, "Perspective", {
    min: 0,
    max: 0.8,
  });
  
  
  
  pane.addInput(PARAMS, "AposX", {
    min: 100,
    max: 210,
  });
  

  pane.addInput(PARAMS, "AHeight", {
    min: 5,
    max: 300,
  });
  pane.addInput(PARAMS, "Awidth", {
    min: 70,
    max: 150,
  });
  pane.addInput(PARAMS, "Adepth", {
    min: 80,
    max: 150,
  });

  
  
  pane.addInput(PARAMS, "BposX", {
    min: 350,
    max: 450,
  });
  pane.addInput(PARAMS, "BHeight", {
    min: 50,
    max: 400,
  });
  pane.addInput(PARAMS, "Bwidth", {
    min: 90,
    max: 450,
  });
  pane.addInput(PARAMS, "Bdepth", {
    min: 100,
    max: 350,
  });


  pane.addInput(PARAMS, 'Bridges', {
  step: 1,
  min: 0,
  max: 6,
});
  
  pane.addInput(PARAMS, 'BridgeGap', {
  
  min: 45,
  max: 180,
});

  
}

function draw() {
  background(PARAMS.backGroundColor);
  
  off = PARAMS.Perspective;
  
  //Rear
  drawUnit(PARAMS.BposX, PARAMS.BHeight, PARAMS.Bwidth, PARAMS.Bdepth);
  
  
  // BRIDGES
  howManyBridge(PARAMS.Bridges, PARAMS.BridgeGap);
  
  
  //Front
  drawUnit(PARAMS.AposX, PARAMS.AHeight, PARAMS.Awidth, PARAMS.Adepth);
  
    let numCols = floor(PARAMS.Awidth/winSize);
  let numRows = floor(PARAMS.AHeight/winSize);
  
  makeWindow(numCols, numRows, 0);
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
  fill(0, 70);
  
  beginShape();
  vertex(I1, J1);
  vertex(I1, J2);
  vertex(I2, J3);
  vertex(I2, J4);
  endShape();
  pop();
  
    // Front detail
//   let gap = w1*0.15;
//   fill(180);

//   vertex(x1+gap, y1+gap);  // TOP LEFT
//   vertex(x1+w1-gap, y1+w1*offgap);  // TOP RIGHT
//   vertex(x1+w1-gap, y1+h1+w1*off);  // BOT RIGHT
//   vertex(x1+gap, y1+h1);  // BOT LEFT
//   endShape();
  
  
//Work in progress
  //Window

  
//   push();
//   fill(255);
//   for(let col = 0; col<numCols; col++){
//     for(let row = 0; row<numRows; row++){
      
//       let u1, o1, u2, o2, o3, o4;
      
//       u1 = x1+winEdge+winSize*col;
//       o1 = y1+winEdge+winSize*row+winSize*col*off;
//       u2 = u1+winSize; 
//       o2 = o1+winSize;
//       o4 = o1+winSize*off;
//       o3 = o4+winSize;
      
      
      
      
// //       let x2 = 
      
//       beginShape();
//       vertex(u1,o1);
//       vertex(u1,o2);
//       vertex(u2,o3);
//       vertex(u2,o4);
//       endShape();
//     }
//   }
//   pop();
  
  /*
  Oliviers window
  
  function drawWindows (wallWidth,winH,buildingH,c1,c2,shift,isRight = false) {
    
  let windowMargin = wallWidth*0.05;
  const winW = wallWidth / windowColumns - windowMargin/2;
  
  for ( let col = 0; col < windowColumns; col++ ){
    for ( let row = 0; row < windowRows; row++ ){
  
      fill( lerpColor( color(c1), color(c2), random() ) );
      
      if( random() < 0.6 ){
        
        const x1 = winW * col + windowMargin;
        const x2 = x1 + winW - windowMargin;
              
        const yOffset = isRight ? lerp( 0, shift, x1/wallWidth ) : lerp( shift, 0, x1/wallWidth );
        const yOffset2 = isRight ? lerp( 0, shift, x2/wallWidth ) : lerp( shift, 0, x2/wallWidth );
    
        const y1 = -buildingH + yOffset + winH * row + windowMargin;
        const y2 = y1 + winH - windowMargin;
        const y4 = -buildingH + yOffset2 + winH * row + windowMargin;
        const y3 = y4 + winH - windowMargin;


        beginShape();
        vertex( x1, y1 );
        vertex( x1, y2 );
        vertex( x2, y3 );
        vertex( x2, y4 );
        endShape();
      }
    }
  }   
}

*/
  
  

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
  fill(0,70);
    beginShape();
  vertex(N1, M1); // TOP RIGHT
  vertex(N2, M2); // BOT RIGHT
  vertex(N3, M3); // BOT LEFT
  vertex(N4, M4); // TOP LEFT

  endShape();
  pop();
}
  
  function makeWindow(numCols, numRows, margin){
    
      push();
  fill(170);
  stroke(200);
  for(let col = 0; col<numCols; col++){
    for(let row = 0; row<numRows; row++){
      
      let u1, o1, u2, o2, o3, o4;
      
      u1 = x1+winEdge+winSize*col;
      o1 = y1+winEdge+winSize*row+winSize*col*off;
      u2 = u1+winSize; 
      o2 = o1+winSize;
      o4 = o1+winSize*off;
      o3 = o4+winSize;
      
      
      
      
//       let x2 = 
      
      beginShape();
      vertex(u1,o1);
      vertex(u1,o2);
      vertex(u2,o3);
      vertex(u2,o4);
      endShape();
    }
  }
  pop();
  }

 
// function mouseReleased() {
//   save('Brut_gen' + hour() + minute() + second() + '.jpg')
// }
  