// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.11.5/paper-full.min.js
// language paperscript

/*
inspired by annagarbier (https://github.com/annagarbier/paper)
*/

var _W = _H = 800;
var resX, resY;
var topLeft = view.center - [400, 400];
var bottomRight = view.center + [400, 400];

var colors = ["#4B543B", "#B57F50", "#DCE2AA", "#B4D2BA", "#FFFBE1", "#48A9A6", "#dbdbdb"];
var bounds = new Rectangle(new Point(0, 0), new Point(view.size._width, view.size._height));
var rectangle = new Path.Rectangle(bounds);
rectangle.fillColor = colors[6];


var bleed = 40;
resX = 50;
resY = 10;


// for (var x = 0; x < _W; x += resX) {
//   for (var y = 0; y < _H; y += resY) {
//     custom_line({
//       Point_a: new Point(x, y + 1),
//       Point_b: new Point(x + resX, y +1 ),
//       nsegments: (Math.sin(x/resX)+1)*45,
//       wobble: Math.cos(x/90)*5,
//       stroke_width: 0.05 * Math.abs(Math.tan(x/90)),
//       stroke_color: '#FF5A5F',
//     //   stroke_color: {
//     //     gradient: {
//     //         stops: [colors[1], colors[3], colors[0], colors[2]]
//     //     },
//     //     origin: topLeft,
//     //     destination: bottomRight
//     //   },
//       stroke_cap: 'round',
//     });
//   }
// }



//this tex
// var texture0 = new Group();

// for (var x = bleed; x < _W-bleed-resX; x += resX) {
//   for (var y = bleed; y < _H-bleed-resY; y += resY) {
//     custom_line({
//       Point_a: new Point(x, y + 1),
//       Point_b: new Point(x + resX, y +1 ),
//       nsegments: (Math.sin(x/resX)+1)*15,
//       wobble: Math.cos(x/90)*5,
//       stroke_width: 0.05 * Math.abs(Math.tan(x/90)),
//       stroke_color: '#FF5A5F',
//       parent: texture0,
//     //   stroke_color: {
//     //     gradient: {
//     //         stops: [colors[1], colors[3], colors[0], colors[2]]
//     //     },
//     //     origin: topLeft,
//     //     destination: bottomRight
//     //   },
//       stroke_cap: 'round',
//     });
//   }
// }



// for (var x = 0; x < _W; x += resX) {
//     for (var y = 0; y < _H; y += resY) {
//       custom_line({
//         Point_a: new Point(x, y + 1),
//         Point_b: new Point(x + resX, y +1 ),
//         nsegments: (Math.sin(x/resX)+1)*45,
//         wobble: Math.cos(y/90)*12,
//         stroke_width: 0.05 * Math.abs(Math.tan(x/90)),
//         stroke_color: colors[2],
//       //   stroke_color: {
//       //     gradient: {
//       //         stops: [colors[1], colors[3], colors[0], colors[2]]
//       //     },
//       //     origin: topLeft,
//       //     destination: bottomRight
//       //   },
//         stroke_cap: 'round',
//       });
//     }
//   }











function custom_line(specs) {
    var delta_x = specs.Point_b.x - specs.Point_a.x;
    var delta_y = specs.Point_b.y - specs.Point_a.y;
    var increment_x = delta_x / specs.nsegments;
    var increment_y = delta_y / specs.nsegments;
  
    var points = [];
    for (var i = 0; i < specs.nsegments; i++) {
      this_point = [
        specs.Point_a.x +
          increment_x * i +
          randFBtwn(-specs.wobble, specs.wobble),
        specs.Point_a.y +
          increment_y * i +
          randFBtwn(-specs.wobble, specs.wobble),
      ];
      points.push(this_point);
    }
    points.push(specs.Point_b);
  
    var myPath = new Path({
      segments: points,
    });
  
    myPath.strokeWidth = specs.stroke_width;
    myPath.strokeColor = specs.stroke_color;
    myPath.strokeCap = specs.stroke_cap;
    myPath.smooth();
    myPath.parent = specs.parent;
  }


  var mask0 = new Group();
  custom_ellipse(
    {
      nsegments: 360,
      Point_center: new Point(_W/2, _H/2),
      width: 300,
      height:300,
      wobble: 30,
      stroke_color: 'red',
      fill_color: 'red',
      stroke_cap: 'round',
      parent: mask0

    }
  )
 

  function custom_ellipse(specs) {
    var points = [];
    for (var i = 0; i < specs.nsegments; i++) {
      var segment_incrementer = (Math.PI * 2) / specs.nsegments;
      var this_theta = segment_incrementer * i;

      this_point = [
        specs.Point_center.x +
          specs.width * Math.cos(this_theta) +
          randFBtwn(-specs.wobble, specs.wobble),
        specs.Point_center.y +
          specs.height * Math.sin(this_theta) +
          randFBtwn(-specs.wobble, specs.wobble),
      ];
      points.push(this_point);
    }
  
    // Create path
    var myPath = new Path({
      segments: points,
    });
  
    // Style path
    myPath.strokeWidth = specs.stroke_width;
    myPath.strokeColor = specs.stroke_color;
    myPath.strokeCap = specs.stroke_cap;
    myPath.fillColor = specs.fill_color;
    myPath.closed = true;
    myPath.smooth('asymmetric');
  
    myPath.parent = specs.parent;
  }
  
  // Utilities using Math.random
  function randFBtwn(min, max) {
    return min + Math.random() * (max - min);
  }

 