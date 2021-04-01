let q = 500;
let qr = 300;
let qf = 0; 
let ql =50
function setup() {
  createCanvas(q, q);
}

function draw() {
  background(0);
  
  
  fill(q/2,q/4)
  circle(q/2 -qf,q/2 -qf,qr)
  
  fill(0)
  circle(q/2 -qf,q/2 -qf,ql)
  
  
  
  
  
  
  
  
  
 // fill(280,0,0)
  //arc(258,500/4,250,250, PI/2, PI+PI/2)
  // arc(258,500/4*3,250,250,-PI/2, PI/2)
  
  
  
// fill(0,0,250)
 // arc(250,250,300,300,PI/4,TWO_PI- PI/4)
  

}
function keyTyped(){
  // when i stroke a key on my keyboard
  
  console.log(key);
  
  
  
  qr = random(100,400);
  
  
  
}