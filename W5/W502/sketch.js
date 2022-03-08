
// inspired by https://openprocessing.org/sketch/986674

let f = [];
let s = 100;
let img;

function setup(){
	createCanvas(w = 640, z = 480);
	v = createCapture(VIDEO);
	v.hide();
  
}

function draw(){
	f.push(v.get());
	if (f.length > s) f.shift(); // clean up the used slices
  
	if (f.length == s) {
      
		for (let i = 0; i < s; i++) {
        
          
		  let h = int(w / s); // height of single slice
         // let l = int(w / s);
        //let x = 0;
        let y = 0;
          let x = map(i, 0, s, 0, w);
          //let y = map(i, 0, s, 0, z);
			p = f[i].get(x, 0, h, z);
          //p = f[i].get(x, y, w, h);
			image(p, x, y);
        
		}
  
	}
}