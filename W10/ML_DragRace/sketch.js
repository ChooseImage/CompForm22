let classifier, ts;
let posY, speed, confidence;
let posX;
let t = 0;
let lapTime = 0;
let label;
let car, bg, flag;
let decrease = 0;
let a, a1;
//My Voice
//let soundModel = 'https://teachablemachine.withgoogle.com/models/pap_fdPnV/';
// Real car engine sound 
let soundModel = 'https://teachablemachine.withgoogle.com/models/rab7FGkMM/';






function preload() {
  
  p = loadFont('p.otf');
  p1 = loadFont('p1.otf');
  pix = loadFont('pix.ttf');
  
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
  
  car = loadImage('car1.png');
  bg = loadImage('bg.png');
  flag = loadImage('flag.png');
}

function setup() {
  createCanvas(900, 600);  
  classifier.classify(gotResult);
  speed = 0;
  posY = 520;
  posX = 60;
  t = millis();
  a = 255;
  a1 = 255;
  textFont(p);
  textSize(25);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(200);
  image(bg, 0, 0, 900, 600);
  
  fill(255, a1);
  textSize(25);
  text("Wait for the start sign...", width/2 -200, height/2.4);
  

  //text('SPEED: ', 720, 30);
  

  
  let w = 80;
  let h = 40;
  
  if(posX >= 850){
      ts = millis();
      lapTime = (ts - t)/1000;
      fill("#ff4929");
      text("Time: " + lapTime, 20, 30);
      posX = 850;
      print(`t: ${t}`);
      print(`ts: ${ts}`);
    
      let w = 100;
      let h = 100;
    
      image(flag, width/2 -w/2, height/4-h/2, w, h);
      textSize(60);
      text("FINISH!", width/2 -100, height/2.4);
      noLoop();
    
  }
  
  
  fill(255, 100, 255);
  //rect(posX, posY-h, w, h);
  image(car, posX+20, posY-h, -1*w, h);
  //print('confidence: ' +  confidence);
  
  //print('posX: ' +  posX);
  
  //print(label == undefined);
  
  
if(label != undefined || confidence > 3){
  
  

    speed = confidence;
    fill(255, 255, 255, a);
    textSize(60);
    text("Start!", width/2-100, height/2);

    decrease = 20;
    a1 = 0;
    let speedDis = map(confidence, 0, 10, 0, 300);
    
    if(posX <= 850){
      
      fill("#ff4929");
      textSize(25);
      text("SPEED: " + int(speedDis)+' kph', 650, 30);

    }
    
  }else{
   // print('speed-default');
    speed = 0;
  }
  
  posX += speed; 
  posY += (noise(millis())-0.5);
  a -= decrease;

}


function isCar(audio){
  return audio.label === "Class 2";
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  confidence = results.find(isCar).confidence * 10;
  print(results.find(isCar).confidence);

}





