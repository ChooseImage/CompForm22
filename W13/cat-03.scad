r1 = 3;
h1 = 17;
origin = [0,0,0];
x1 = 50;
testsite = [-20,0,0];
x_off = 45;
cornerthickness = 8;
H = 6;


// TESTING SITE ----------------------------------------

    scale([2,2,2.5])
    capital([-60,0,0]);

    translate([-40,0,0]){
        scale([1.5,1.5,1]){
            mirror([1,0,0]){
                front(origin);
            }
        }
    }





scale([1,1,1]){
    bridge([-30,0,30]);
}





//new_roof(testsite+[0,0,40]);
frontskirt(origin);
frontskirt([-45,0,0]);

//head(origin, 20);
//mirror([1,0,0]) head(origin, 37);
front(origin);








scale([1.2,0.885,1]){
    front([-35,0,-5]);
}
// ------------------------------------------------------



scale(v = [1.7, 1.7, 1.7]){
    gaz1([30,0,0]);
}

comp1([-20,-115,0]);
comp1([-20,115,0]);
comp1([-40,-115,0]);
comp1([-40,115,0]);



downunder(origin);
   

rim(origin+[5,0,0], 5);
translate([-65/2+2.5, 0,0]){
    cube([65, 420, 2], true);
}
rim(origin+[-65,0,0], 5);










// MODULES ----------------------------------------



module domebase(pos, r){
    translate(pos-[0,0,3.5]){
        translate([0,0, 6.3])
        cylinder(1,r, r, true,$fa = 17);
        translate([0,0, 6])
        cylinder(1,0.6*r, 0.6*r, true,$fa = 17);
        translate([0,0, 2.25+2.25])
        cylinder(2,r, r, true,$fa = 17);
    }
}

module capital(pos){
    translate(pos+[0,0,53]){
        translate([0,0, 38])
        cylinder(16, 2.5,2, true);
        translate([0,0, 47])
        cylinder(2, 3,1, true);
        translate([0,0, 45.5])
        cylinder(1, 2.7,3, true);
        translate([0,0, 35])
        cylinder(2, 6,6, true);
        hahadome([0,0,17.5]);
        brush(origin, 17.5, 28);
        domebase([0,0,-2], 20);
        translate([0,0,-10-40])
        brush([0,0,0], 50, 38);
        domebase([0,0,-13-40], 20);
        //translate([0,0,-20-36])
        //pad(origin,50, 70, 40);
    }
}   
    
module brush(pos, h, r){
    translate(pos+[0,0,h/2]){
     for (a =[-15:14]){
        rotate(a*360/30,[0,0,1]){
            cube([r,1,h], true);
        }
       }
       
     cylinder(h, r/2-1,r/2-1, true);
     }
}

module hahadome(pos){
    translate(pos-[0,0,3.5]){
        newdome([0,0,6.7]);
        translate([0,0, 6.3])
        cylinder(1,15, 15, true,$fa = 17);
        translate([0,0, 6])
        cylinder(1,10, 10, true,$fa = 17);
        translate([0,0, 2.25+2.25])
        cylinder(2,15, 15, true,$fa = 17);
    }
}

module bridge(pos){

  translate(pos){  
    
    translate([0,0, 20]){
        translate([0,0, 0]){
            cube([34, 100, 1], true);
         } 
        translate([0,0, -1]){
            cube([32, 100, 1], true);
         }   
       difference(){
            cube([30, 100, 5], true);
            cube([24, 1400, 15], true);
        }
        
        translate([13.5,0, 4]){
            for (a =[-5:5]){
                translate([0, a*9, 0]){
                    cube([3, 3, 8], true);
                }
            }
         } 
         
         mirror([1,0,0]){
                 translate([13.5,0, 4]){
                    for (a =[-5:5]){
                    translate([0, a*9, 0]){
                        cube([3, 3, 8], true);
                }
            }
         } 
         }
         
    }    
    difference(){
        cube([30, 100, 40], true);
        scale([1,1,0.6]){
            translate([-500, 0,-35]){
                rotate(90,[0,1,0]){
                    cylinder(1000,60,60,$fn = 100);
                }
            }
        }
    }
    }
}

module comp2(pos){
        
        basef(pos);
        basef(pos+[0,0,40]);
        final_roof(pos+[0,0,80]);
        translate(pos+[0,0,78]){
            cube([40, 136, 10], true);
            translate([0,0,22]){
                cube([46, 136, 5], true);  
                  translate([0,0,-21]){
                    cube([46, 140, 5], true); 
                  }
            } 
        }
        
    //rotate(90,[0,0,-1])
        for (a =[-5:5]){
            windowf(pos+[-22,a*12,85], 2.5,8);
        }
        
        
        mirror([1,0,0])translate([-pos[0]*2,0,0]){
        for (a =[-5:5]){
            windowf(pos+[-22,a*12,85], 2.5,8);
        } 
    }
    
    /*
    pad(pos+[0,40, 102.5] ,35, 90, 3);
    pad(pos+[0,-40, 102.5] ,35, 90, 3);
    */
}


module downunder(pos){
    translate(pos){
        rotate(180,[0,1,0]){
            scale([0.75,0.5,0.8]){
                comp1([40,0,0]);
            }
            scale([0.5,0.35,0.5]){
                comp1([62.5,140,0]);
            }
            mirror([0,1,0]){
                    scale([0.5,0.35,0.5]){
                comp1([62.5,140,0]);
            }
            }
         
        }
    }
} 

module sideskirt(pos){
    translate(pos){
        difference(){
                translate([-11,-120,-35/2]){
                    cube([3.5, 40, 35],true);
                }

                translate([-10,-145,-50]){
                    resize(newsize=[150/2,150/2,180/2]) sphere(r=10);
                }
        }
    }
}

module frontskirt(pos){

        sideskirt(pos);
         mirror([0,1,0]){
         sideskirt(pos);
         }

    translate(pos){
    
    

            
        difference(){
            translate([-11,0,-45/2]){
                cube([3.5, 200, 45],true);
            }


            translate([0,0,-50]){
                resize(newsize=[300/2,400/2,100/1.4]) sphere(r=10);
            }
        }
        
        pad([-10,-100,-35-10], 10, 40, 45);
        mirror([0,1,0]){
            pad([-10,-100,-35-10], 10, 40, 45);
        }
    }
}

module front(pos){
  translate(pos){
    difference(){
        translate([50,0,0]){
        cube([100, 140,5],true);
    }
    cutcorner();
    }
  }
}

module cutcorner(){
    translate([110,80,0]){
        rotate(45,[0,0,1]){
            cube([100,100, 400], true);
        }    
    }
    
    mirror([0,1,0]){
    
            translate([110,80,0]){
        rotate(45,[0,0,1]){
            cube([100,100, 400], true);
        }    
    }
    }


}


module head(pos, t){
    translate(pos+[t/2,0,2.5]){
        rotate(90,[0,0,1]){
            rotate(90,[1,0,0]){
                    linear_extrude(height = t, center = true){

                     polygon(
                                        [  
                                        [0,-5],
                                        [60,-5],
                                        [45,-20],
                                        [0,-20]]
                            );  
                     mirror(90,[1,0,0]){
                     
                            polygon(
                                        [  
                                        [0,-5],
                                        [60,-5],
                                        [45,-20],
                                        [0,-20]]
                            );
                        
                     }

            }
            }
        }
     }
}

            



module rim(pos, t){
    translate(pos+[0,0,2.5]){
        rotate(90,[0,0,1]){
            rotate(90,[1,0,0]){
                    linear_extrude(height = t, center = true){

                polygon(
                            [  
                            [0,0],
                            [70,0],
                            [70,7],
                            [130,7],
                            [130,0],
                            [210,0],
                            [210,-10],
                            [115,-10],
                            [105,-5],
                            [60,-5],
                            [45,-5],
                            [0,-5]]
                );
                mirror([1,0,0]){
                    polygon(
                            [  
                            [0,0],
                            [70,0],
                            [70,7],
                            [130,7],
                            [130,0],
                            [210,0],
                            [210,-10],
                            [115,-10],
                            [105,-5],
                            [60,-5],
                            [45,-5],
                            [0,-5]]
                );
                }

            }
            }
        }
     }
}


module newdome(pos){

    
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
   

   // mirror([1,1,0]) clock_f();
  }

module chim(chimr, chimh){
    cube([chimr, chimr,chimh], true);
}

module windowf(pos, r, t){
            difference(){
                window(pos, r, t);
                window(pos-[t*0.3,0,0], r-1, t);
            }
}
 module window (pos, r, t){
        translate(pos+[0,0, t/2]){
            rotate(90,[1,0,0]){
                rotate(90,[0,1,0]){
                  cylinder(t, r,r, $fn=50, true);   
                    translate([0,r*-1,0]){
                        cube([2*r, 2*r, t], true);
                    }
                }
                }
        }
 }

module comp1(pos){
        
        basef(pos);
        basef(pos+[0,0,40]);
        final_roof(pos+[0,0,80]);
        translate(pos+[0,0,78]){
            cube([40, 136, 10], true);
            translate([0,0,22]){
                cube([46, 136, 5], true);  
                  translate([0,0,-21]){
                    cube([46, 140, 5], true); 
                  }
            } 
        }
        
    //rotate(90,[0,0,-1])
        for (a =[-5:5]){
            windowf(pos+[-22,a*12,85], 2.5,8);
        }
        
        
        mirror([1,0,0])translate([-pos[0]*2,0,0]){
        for (a =[-5:5]){
            windowf(pos+[-22,a*12,85], 2.5,8);
        } 
    }
    
    pad(pos+[0,40, 102.5] ,35, 90, 3);
    pad(pos+[0,-40, 102.5] ,35, 90, 3);
        
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
        base_roof_side(pos=testsite, r1=100, r2=95, h=20, rim_h=2.5);
        translate([-40,0,0]){
            cube([120,180,100], true);
        }
       }
    }
}


module basef(pos){
       difference(){
        new_base(pos+[0,0,20]);
        rotate(90,[0,0,1])
         for (a = [-3:3]){
            cut_tun([a*15+ pos[1],0+pos[0],0+pos[2]],20,5);
         }    
      }
}
module new_base(pos){
    translate(pos){
        translate([17,65,0]){
            cube([cornerthickness,cornerthickness,40], true);
        }
        translate([-17,65,0]){
            cube([cornerthickness,cornerthickness,40], true);
        }
        translate([-17,-65,0]){
            cube([cornerthickness,cornerthickness,40], true);
        }
        translate([17,-65,0]){
            cube([cornerthickness,cornerthickness,40], true);
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
            linear_extrude(height = 6000, center = true){
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