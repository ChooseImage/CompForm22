
const canvas = {
  width: 800,
  height: 800
};


const drawSpace = {
  width: canvas.width - 20,
  height: canvas.height - 300,
  pos: {
      x: 10,
      y: 10
  }
}

const requestSpace = {
  width: canvas.width - 20,
  height: 250,
  pos: {
      x: 50,
      y: drawSpace.pos.y + drawSpace.height + 30
  }
}

const shapes = [
/rectangle|rect|square|box/,
/ellipse|circle/,
/triangle/
];

function getInput() {
  // Returns a lowercased string from text input
  return request.value().toLowerCase();
}

function returnShape() {
  // Returns shape from string input; if not defined, returns null
  let string = getInput();
  shapeSubstring = null;

  for (i = 0; i < shapes.length; i++) {
      let regex = shapes[i];

      // if a match is found
      if (regex.test(string) === true) {
          match = string.match(regex);
          shapeSubstring = match[0];
      }
  }
  return shapeSubstring;
}

function setup() {
createCanvas(canvas.width, canvas.height);
request = createInput("Type here...");
}

function draw() {
background(220);
let y = returnShape();
print(y);
}