
let gridX = 5;
let gridY = 5;
let w = 500/gridX;
let numGrids = gridX * gridY;

let rCount = 0;
let oCount = 0;
let yCount = 0;
let gCount = 0;
let blueCount = 0;
let vCount = 0;
let pCount = 0;
let blackCount = 0;

let tilesCol = []; //color of tilesCol
var colors = [
  [255, 0, 0], //c1
  [0, 255, 0], //c2
  [0, 0, 255]  //c3
];

function setup(){
  createCanvas(500, 500);
  for (let i = 0; i < numGrids; i++) {
    tilesCol[i] = int(random(colors.length));
  }
  print(tilesCol);
  background(51);
  for (let i = 0; i <= numGrids; i++) {
    changeNeighbors();
  }
  drawRects();
  
  for (i = 0; i < tilesCol.length; i++) {
    if (tilesCol[i] === 0) {
      rCount++;
    } else if (tilesCol[i] === 1) {
      oCount++;
    } else if (tilesCol[i] === 2) {
      yCount++;
    }
  }
}


function drawRects() {
  for (let i = 0; i < numGrids; i++) {
    let posx = ((i % gridX) * w);
    let posy = ((floor(i / gridX)) * w);
    //offset++;
      fill(colors[tilesCol[i]][0], colors[tilesCol[i]][1], colors[tilesCol[i]][2]);
      noStroke();
      rect(posx, posy, w, w);
    }
  
}

function changeNeighbors() {

  //Trying to change the color in the array.  "i + gridX +/-1" is the location of the corner squares.
  for (let i = numGrids; i > -1; i--) {

      
    if (i% gridX == 0){
      if (tilesCol[i] == tilesCol[i + 1]) {
      tilesCol.splice(i, 1, int(random(3)));
        print(tilesCol);
      }
    } else if (i% gridX == 4){
      if (tilesCol[i] == tilesCol[i - 1]) {
      tilesCol.splice(i, 1, int(random(3)));
      }
    } else if(i%gridX == 2){
      if (tilesCol[i] == tilesCol[i - 1] || tilesCol[i] == tilesCol[i+1]) {
      tilesCol.splice(i, 1, int(random(3)));
    }
    }
    if (tilesCol[i] == tilesCol[i + gridX]) {
       tilesCol.splice(i, 1, int(random(3)));
   }
    
    }
  
}
