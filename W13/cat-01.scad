r1 = 3;
h1 = 17;
origin = [0,0,0];
x1 = 50;
testsite = [-20,0,0];

// TESTING SITE ----------------------------------------

//new_roof(testsite+[0,0,40]);

comp1(testsite);
//comp1(testsite+[0,70,0]);

        
// ------------------------------------------------------

gaz1([0,50,0]);

// MODULES ----------------------------------------

module comp1(pos){

        basef(pos);
        basef(pos+[0,0,40]);
        final_roof(pos+[-30,0,80]);
   
}

module final_roof(pos){
    translate(pos){
    s_roof(origin+[5,0,0]);
        mirror([1,0,0]){
            s_roof(origin+[5,0,0]);
        }
   }
}
module s_roof(pos){

    translate(pos+[-30,0,0]){
     difference(){
        base_roof_side(pos=testsite, r1=100, r2=90, h=20, rim_h=2.5);
        translate([-40,0,0]){
            cube([120,180,100], true);
        }
        }
    }
}


module basef(pos){
    difference(){
        new_base(pos+[-30,0,20]);
        rotate(90,[0,0,1])
         for (a =[-3:3]){
            cut_tun(pos+[a*15+20,0,0],20,5);
         }    
        }
}
module new_base(pos){
    translate(pos){
        translate([17,65,0]){
            cube([6,6,40], true);
        }
        translate([-17,65,0]){
            cube([6,6,40], true);
        }
        translate([-17,-65,0]){
            cube([6,6,40], true);
        }
        translate([17,-65,0]){
            cube([6,6,40], true);
        }
        cube([34,130,40], true);
        translate([0,0,-20+2/2]){
        cube([34+2,130+2,3], true);
        cube([34+3,130+3,2], true);
        }
     }   
}



module new_roof(pos){
    translate(pos+[-50,0,0]){
        intersection(){
            translate(pos+[40,0,0])cube([50, 500, 200], true);
            base_roof(pos+[20,0,0], r1=100, r2=80, h=20, rim_h=2.5);
        }
    }
}


module base_roof(pos, r1, r2, h, rim_h){
    translate(pos){
         rotate(45, [0,0,1]){
            cylinder(rim_h,r1,r1,$fn=4);
            translate([0,0,rim_h]){
                cylinder(h,r1,r2,$fn=4);
            }
        }
    }
}

module base_roof_side(pos, r1, r2, h, rim_h){
    
    difference(){
        bf1(pos,r1,r2,h,rim_h);
        bf2(pos);
    }
}

module old_roof(){
    base_roof_side(pos = [-10,0,-20], r1 = 50, r2 = 40, h = 20, rim_h = 2.5);
    mirror([-1,0,0])
    base_roof_side(pos = [30,0,-20], r1 = 50, r2 = 40, h = 20, rim_h = 2.5);


     for (a =[1:7]){
        base_roof_mid([-60+a*10,0,-20]);
     }
}


module bf1(pos, r1, r2, h, rim_h){
        translate(pos){
            rotate(45, [0,0,1]){
                cylinder(rim_h,r1,r1,$fn=4);
                translate([0,0,rim_h]){
                    cylinder(h,r1,r2,$fn=4);
                }
            }
        }
}

module bf2(pos){
        translate(pos-[32,0,0])
            cube([100,100,50], true);
}




module base_roof_mid(pos){
    translate(pos){
        intersection(){
            base_roof(pos = origin, r1 = 50, r2 = 40, h = 20, rim_h = 2.5);
            cube([10,100,100], true);
        }
    }
}





module gaz1(pos){
    translate(pos){
        translate([0,0,6]){
            dome([0,0,29]);
            translate([0, 0,0]){
                pad([0, 0, 20+3],30, 50, 3);
                difference(){
                
                // CUT HERE
                    pad([0, 0, 0],27, 45, 20);
                    cut_arch(h1, r1);
                    strips();
                    
                /////////////////////////////
                 }
                pad([0, 0, -6],34, 55, 3);
            }
            translate([0,0, 40]){
                cylinder(10, 1,1);
                
                
                translate([4,0,0]) cylinder(7, 2,1);
                mirror([1,0,0]){
                    translate([4,0,0]) cylinder(7, 2,1);
                }
                mirror([1,1,0]){
                    translate([4,0,0]) cylinder(7, 2,1);
                }
                mirror([1,-1,0]){
                    translate([4,0,0]) cylinder(7, 2,1);
                }
                
                translate([0,0, 5]){
                    cylinder(15, 0.5,0.5);
                    translate([0, 0.5,10]) cube([0.5, 10,5]);
                }
            }
         }
    }
}

module cu_strip(){
translate([-14.6,0,0])
cube([7, 9.5,80], true);
}

module strips(){
    cu_strip();
    mirror([1,0,0]) cu_strip();
    mirror([1,1,0]) cu_strip();
    mirror([1,-1,0]) cu_strip();
}


module dome(pos){

    
    translate(pos){
        rotate(22, [0,0,1]){
            cylinder(2,14,14,$fn=18);
            translate([0,0, 2]){
                cylinder(5,14,12,$fn=18);
                translate([0,0, 5]){
                   cylinder(5,12,6,$fn=18);
 
                }
            }
        }
    }
    
   translate([0,0, 12] + pos){
        cylinder(2, 6, 6, true);
        translate([0,0, 1]){
            cylinder(1, 7, 7);
        }
   }
   

    mirror([1,1,0]) clock_f();
  }
  
  module clock_01 (){
    translate([0,0,-2]){
              cylinder(9, 5,5, $fn=50, true);   
                translate([0,-5,0]){
                    cube([10, 10, 9], true);
                }
    }
 }
  
  module clock(pos){
        translate(pos){
          rotate(90, [1,0,0]){
          difference(){
                clock_01();
                translate([0,-11,0]){
                     cube([12,10, 20], true);
                }
                }
           }
        }
  }
  
  module clock_f(){
    difference(){
        clock([0,-11.7, 35]);
        translate([00,-13.8, 35]){
            rotate(90, [1,0,0]){
                cylinder(1,4,4);
                }
        }
    }
    
}


module cut_tun (pos, h, r){
    translate(pos+[0,0,h-1]){
        rotate(90, [1,0,0]){
            linear_extrude(height = 600, center = true){
                union(){
                    circle(r, $fn=500, true);
                    translate([0,-h1/2,0]){
                        square([r*2, h], true);
                    }
                }
            }
        }
    } 
}

module cut_arch(h ,r){
    cut_tun(origin, h, r);
    mirror([1,1,0]){
        cut_tun(origin, h, r);
    }
}

//cut_arch();









module cut(r){
        translate([r-0.07*r, r-0.07*r, 0])
            cylinder(100, r, r, $fn=500, true);
}


module pad(pos, size, r, h){

    translate(pos+[0,0,h]){
        translate([0,0,-h]){
            difference() {
                cube([size, size, 0.5],true); // Outer
                cut_edge(r);
            }
            
            
            translate([0, 0, 0.5])
                difference() {
                    cube([size-2, size-2, 0.5], true); // Padding
                    cut_edge(r-0.04*r);
                }
            translate([0, 0, h/2])
                difference() {
                    cube([size-4, size-4, h], true); // Inner
                    cut_edge(r-0.08*r);
                }
            }
        mirror([0, 0, 1]){
            translate([0,0,-3]){
            difference() {
                cube([size, size, 0.5],true); // Outer
                cut_edge(r);
            }
            
            
            translate([0, 0, 0.5])
                difference() {
                    cube([size-2, size-2, 0.5], true); // Padding
                    cut_edge(r-0.04*r);
                }
            translate([0, 0, h/2])
                difference() {
                    cube([size-4, size-4, h], true); // Inner
                    cut_edge(r-0.08*r);
                }
            }
        }
    } 
} 

module cut_edge(r){
cut(r);
mirror([1,1,0]) cut(r);
mirror([1,0,0]) cut(r);
mirror([0,1,0]) cut(r);
}