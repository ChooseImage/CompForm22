/*
This sketch is built following The coding train's coding challenge#85
link => https://thecodingtrain.com/CodingChallenges/085-the-game-of-life.html
*/



function make2DArray(cols, rows){
  
// Making an empty 2d array
  let arr = new Array(cols);
  for (let i = 0; i< arr.length; i++){
    arr[i] = new Array(rows);
  }
  
  return arr;
}

let grid;
let cols;
let rows;
let res = 10;

let w = 600;
let h = 400;

function setup() {
  createCanvas(w, h);
  cols = width/res;
  rows = height/res;
  grid = make2DArray(cols, rows);

  
  for (let i= 0; i<cols; i ++){
    for (let j = 0; j<rows; j++){
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0);
  

  
  for (let i= 0; i<cols; i ++){
    for (let j = 0; j<rows; j++){
      
      let x = i * res;
      let y = j * res;
      
      if(grid[i][j] == 1){
        fill(255);
        noStroke();
        rect(x, y, res, res);
      }     
    }
  }
  
  let next = make2DArray(cols, rows);
  

  
  // Compute next based on grid
  
  for (let i= 0; i<cols; i ++){
    for (let j = 0; j<rows; j++){
      
      let state = grid[i][j];
      
      //edges will just stay the same

      // Count live neighbors
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);
      

      
      if(state ==0 && neighbors == 3){
        next[i][j] = 1;
      }else if (state ==1 && (neighbors < 2 || neighbors >3) ){
       next[i][j] = 0; 
      }else{
        next[i][j] = state;
      }
    
  } 
  }
  grid = next;
  
}

function countNeighbors(grid, x, y){
  let sum = 0;
  for (let i = -1; i<2; i++){
    for (let j = -1; j<2; j ++){
      
      // Wrapping -> shift 1 colum and row to compensate the first col/row
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  
  return sum;
}