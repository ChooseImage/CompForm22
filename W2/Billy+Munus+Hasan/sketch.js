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

var values = [10, 20, 30, 40, 50, 60, 70, 80];
var position = 0;

let scalar = 70;
let ang1 = 30;
let engine;
let world;
let boxes = [];
let circles = [];
let grounds = [];
let mid = [];
let mConstraint;
let offset;
let numofBoxes = 55;

let canvas;
let sizes = [20, 30, 34, 34, 34, 34, 40, 70, 100];
let sizeX = 800;
let sizeY = 400;
let heightOff = -40;
let c = 0;
let borderColor;
let slider;

function setup() {
  //slider = createSlider(-width/2, width/4, 100);
  //

  borderColor = random(colorPalette);
  sizeX = random(700, windowWidth);
  sizeY = random(300, windowHeight);
  offV = random(-125, 125);
  offH = random(-50, 50);

  canvas = createCanvas(sizeX, sizeY);

  let borderThickness = random(30, 50);
  let r = borderThickness;
  values = shuffle(values);

  engine = Engine.create();
  world = engine.world;

  //  Engine.run(engine);
  grounds.push(new Boundary(0, height / 2, borderThickness, height));
  grounds.push(new Boundary(width, height / 2, borderThickness, height));

  //mid vert
  grounds.push(
    new Boundary(width / 2 + offV, height / 2, borderThickness / 2, height)
  );

  grounds.push(new Boundary(width / 2, 0, width, borderThickness));
  grounds.push(new Boundary(width / 2, height, width, borderThickness));

  //mid Hor
  grounds.push(
    new Boundary(width / 2, height / 2 + offH, width, borderThickness / 2)
  );
  World.add(world, grounds);

  let mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity(); // for retina displays etc
  let options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

let count = 0;

function draw() {
  background("#F9E7E7");

  //   mid.push(new Boundary(width/2+offV+val, height / 2, 30/2, height));
  //   World.add(world, mid);

  if (boxes.length < numofBoxes) {
    drawShapes(width / 4 + offH, height / 4 + offV);
    drawShapes((3 * width) / 4 + offH, height / 4 + offV);
    drawShapes(width / 4 + offH, (3 * height) / 4 + offV);
    drawShapes((3 * width) / 4 + offH, (3 * height) / 4 + offV);
  } else {
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

  //print(boxes.length);
}

function drawShapes(x, y) {
  if (frameCount % 20 === 0) {
    //print (++count);
    let size = random(sizes);
    offX = random(-width / 6, width / 6);
    offY = random(-height / 6);
    if (random() < 0.5) {
      //rect(x+offX, y+offY, 50, 50)
      boxes.push(new Box(x + offX, y + offY, size, size));
    } else {
      circles.push(new Circle(x + offX, y + offY, size / 2));
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

function keyPressed() {
  if (keyCode === ENTER) {
    save("billy+munus+hasan" + hour() + minute() + second() + ".jpg");
  }
}
