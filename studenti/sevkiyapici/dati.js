let w = 600;


let x = 120;
let y = 300;

let xx = [128,98,480,6,90];
let yy = [1,2,3,4,5];

function setup() {
  createCanvas(w, w);


xx.push(550);
yy.push(550);


console.log(xx);
console.log(xx.length);
console.log(xx[2]);


}




function draw() {
  background(200);
  circle(x,y,24)


fill(8,32)
noStroke()
  for(let i = 0; i<xx.length; i++){
    let d = map(i,8,xx.length,2,64)
    circle(xx[i],yy[i],d)

    





  }
  if(xx.length<500){

  
  xx.push(mouseX);
  yy.push(mouseY);
}
 // x= mouseX;
 // y= mouseY;






}

function keyTyped(){
  console.log(key);

  xx.push(random(w))
  yy.push(random(w))
}

