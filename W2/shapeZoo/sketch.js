// Example based on https://www.youtube.com/watch?v=urR596FsU68
// 5.17: Introduction to Matter.js - The Nature of Code
// by @shiffman

// module aliases

var Engine = Matter.Engine,
  //    Render = Matter.Render,
  World = Matter.World,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;


var values = [10,20,30,40,50,60,70,80];
var position = 0;


let borderThickness = 25;
let engine;
let world;
let boxes = [];
let circles = [];
let grounds = [];
let mConstraint;

let canvas;
let sizes = [10, 20, 30, 40];
let sizeX = 800;
let sizeY = 400;
let heightOff = -40;

function setup() {
  canvas = createCanvas(sizeX, sizeY);
  values = shuffle(values);
  
  engine = Engine.create();
  world = engine.world;
  //  Engine.run(engine);
  grounds.push(new Boundary(0, height / 2, borderThickness, height));
  grounds.push(new Boundary(width, height / 2, borderThickness, height));
  grounds.push(new Boundary(width/2, height / 2, borderThickness/2, height));
  grounds.push(new Boundary(sizeX/2, 0, width, borderThickness)); // up
  grounds.push(new Boundary(sizeX/2, height, width, borderThickness));  
  grounds.push(new Boundary(sizeX/2, height/2, width, borderThickness/2));  
  World.add(world, grounds);

  let mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity() // for retina displays etc
  let options = {
    mouse: mouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

let count = 0;
function draw() {
  background("#F9E7E7");
  
  drawShapes(width/4, height/4+heightOff);
  drawShapes(3*width/4, height/4+heightOff);
  drawShapes(width/4, 3*height/4+heightOff);
  drawShapes(3*width/4, 3*height/4+heightOff);
  
  
}

function drawShapes(x, y){
    if (frameCount % 20 === 0) {
    print (++count);
    let size = random(sizes);
    if (random() < 0.5) {
      boxes.push(new Box(x, y, size, size));
    } else {
      circles.push(new Circle(x, y, size / 2));
    }
  }
  Engine.update(engine);
  for (let box of boxes) {
    box.show();
  }
  for (let circle of circles) {
    circle.show();
  }
  for (let ground of grounds) {
    ground.show();
  }
  
  
 

}

function valueFromDeck() {
  // find the value at the current position in the deck
  var v = values[position];

  // change the position for next time
  position++;

  // if that was the last value, shuffle and start over from the top
  if (position == values.length) {
    values = shuffle(values);
    position = 0;
  }

  // return the value
  return v;
}

// function mouseDragged() {
//   let size = random(sizes);
//   if (random() < 0.5) {
//     boxes.push(new Box(mouseX, mouseY, size, size));
//   } else {
//     circles.push(new Circle(mouseX, mouseY, size / 2));
//   }
// }