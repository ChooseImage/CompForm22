// require /text/tracery.min.js

const date = `${Math.floor(Math.random()*12+1)}/${Math.floor(Math.random()*30+1)}/${1999+Math.floor(Math.random()*20)}`;



const storyGrammar = {
  story: ["<p class = 'title'>#title#</p><p class = date>#date# - Rev. <p class = type>#type#</p></p></br><p>#setting##place# #time#</p></br><p>#establishingShot#</p><p>#subjectIntro#</p></br><p class='italic'>#dp#</p><p>#q1#</p><p>#a1#</p></br><p class='transition'>#transition#</p><p>#subjectIntro# #establishingShot#   "],
  
  type:['LATE PRODUCTION DRAFT', 'FINAL DRAFT', "TREATMENT"],

  date: [date],
  title: ['#roadname# #fix#'],
  establishingShot: ['#description# #adj# #nounDes# of  #location_#.'],
  subjectIntro: ['#subject# #verb# #obj#, #verb# #obj# #geoVerb# #geo#.'],
  q1: ["<p class='line'>#subject#:</p><p>So, you came to see if #subject#'s #geoVerb# #geo#?</p>"],
  a1: ["<p class='line'>#subject#:</p><p>To #verbo# #obj# and #verbo# #geoVerb# #geo#.</p>"],



  verb: ["leaves", "finds", "chases", "goes",  'drives', 'takes', 'calls'],
  verbo: ["leave", "find", "chase", "go", 'drive', 'take', 'call'],
  obj: ['the car', 'the apartment', 'the microphone', 'the phone', 'the man', ' a mirror', 'the room', 'the door', 'the bell'], 

  roadname: ['Avalon', 'Glen', 'Glendale', 'Crenshaw', 'Lincoln', 'NORTHSTAR'],
  fix: ['Street', 'Boulevard', 'Avenue', 'Mall'],
  setting: ['Int. ', "Ext. "],
  adj: ['Overwhelming', 'Distant', 'Damp', 'Humid', 'Sweet', 'Disorganized', 'Subtle'],
  nounDes: ['look', 'sound', 'atmosphere', 'texture'],
  location_:['freeway traffic', 'the city', 'skidrow alley', 'fire escape'],
  description: ['Darkness.', 'Silence.', 'Industrial noise.', 'Brewing unease.'],
  dp: ['close-up', '', 'tilt-up', 'tilt-down', 'pan-up', 'pan-down', 'tilt-shift', 'Back to scene', 'Cut to', 'dolly-zoom'], 
  transition: ['DISSOLVE TO:', 'CUT TO'],
  subject: ['The cowboy', 'Harry', 'Neal', 'Betty', 'Irene', 'Coco', 'Joe', 'Ed', 'Adam', 'Luigi', 'Ray', 'Rita'],
  geoVerb: ['in the', 'from the', 'towards the', 'off the'],
  geo: ['middle', 'side', 'window', 'top', 'street', 'place'],
  place: ['MULHOLLAND DRIVE', 'HOLLYWOOD STREETS', 'LAX AIRPORT', 
          '1612 HAVENHURST', 'APARTMENT - BEDROOM', 'OFFICE ON SIXTH FLOOR',
          'CENTURY CITY', 'OFFICE BUILDING', 'CONFERENCE ROOM',
          "AUNT RUTH'S BEDROOM", 'SUNSET BOULEVARD', 'BEVERLY HILLS HOTEL'],
  time:['- NIGHT', '- DAY', '- MOMENTS LATER', '- LATER', '- AFTERNOON', ''],

};

function main() {
  let grammar = tracery.createGrammar(storyGrammar);
  let story = grammar.flatten("#story#");

  const storyDiv = document.createElement("div");
  storyDiv.style = "font-size: 24px; margin: 10%; line-height: 1.5;";
  //storyDiv = story;
  storyDiv.innerHTML = story;

  console.log(story);
 document.body.insertAdjacentElement("beforeend", storyDiv);
}

setTimeout(main, 10);


function setup() {
 // createCanvas(800, 800);
}

function draw() {
 // background(220);
}
