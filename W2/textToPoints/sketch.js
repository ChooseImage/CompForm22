let hel;
let textArr;
let thickness;

function preload(){

  //Loaded a custom font
  
  hel = loadFont("hel.otf");
  
}
let fontSize = 260;
let steps = [-1, 0, 1];


function setup() {
  createCanvas(900, 540);
  background(30);
  
  textSize(fontSize);
  textArr = hel.textToPoints("wat", width/3.6, height/1.7);
  textFont(hel);
  print(textArr);
}

function draw() {
  
  stroke(230);
  let dirX = random(-4,4);
  let dirY = random(-4,4);
  background(random(150, 210),random(50, 70), random(150, 210), 30);
  thickness = random(300,1520);
  for (let i =0; i< textArr.length; i++){
    //ellipse(textArr[i].x, textArr[i].y, 5, 5);
    // for (let j=0; j<130; j++)
    for(let j = 0; j<thickness; j++){
    stroke(20,230,20, map(j, 0, thickness, 255, 0));
    //line(textArr[i].x+j*random(steps), textArr[i].y+j*random(steps), textArr[i].x+dirX+j*random(steps), textArr[i].y+dirY+j*random(steps));
    line(textArr[i].x+j, textArr[i].y+j, textArr[i].x+dirX+j, textArr[i].y+dirY+j);
    thickness = random(120);
    }
  }
  
}