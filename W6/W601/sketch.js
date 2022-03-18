var bounds = new Rectangle(new Point(0, 0), new Point(view.size._width, view.size._height));
var rectangle = new Path.Rectangle(bounds);
rectangle.fillColor = "#0d046e";


var sizeX = view.size._width;
var sizeY = view.size._height;
var center = new Point(view.size._width/2, view.size._height/2);
console.log(center);
//var sides = 6;

function drawUnit(pos, a, r, sides){
  var shape = new Path.RegularPolygon(pos, sides, r);
 
  shape.strokeColor = "#b4abf5";
  shape.rotate(a);
  //path1.fillColor = "b4abf5";
  //console.log(pos);
  shape.style = {
    //strokeColor: "black",
    // /fillColor: "#ccf",
    strokeWidth: 0.1,
    dashArray: [10, 4],
    shadowColor: new Color("#fc7cde"),
    shadowBlur: 12,
    shadowOffset: new Point(3, 3),
  };
}

//(cneter, angle, r, sides)
function render(pos, sides, phase){
  
  for (var i = 0; i< 80; i+=1){
    drawUnit(pos, i, Math.cos(i*phase)*40, sides);
  }

}

var cols = 8; 
var rows = 6;
var ratioX = sizeX/cols;
var ratioY = sizeY/rows;

for (var i = 0; i< cols; i++){
  for (var j=0; j< rows; j++){
    var sides = Math.floor(Math.random()*12+2);
    render(new Point(i*ratioX+ratioX/2,j*ratioY+ratioY/2), sides, Math.random()*0.05+0.01);
  }
}


