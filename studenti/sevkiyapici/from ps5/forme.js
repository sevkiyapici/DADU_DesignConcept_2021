function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  strokeWeight(5); // thickness
  line(20,20,300,400); // x y x y 
  
  fill(128,128);
  
  
  // noStroke()
  // noFill()
  
  
  circle(250,250,300);  //x y diametro
  
  triangle(250,100,400,400,100,400); // x y x y x y
  
  
  // polygons

  
  beginShape();   //start
  vertex(50,50);
  vertex(300,100);
  vertex(250,400);
  vertex(0,350);
  endShape(CLOSE);    //end
  
  
  // arc 
  
  arc(250,250,400,400,0,PI,CHORD);      // xc yc   width heigh  start angle end angle          sonu kapatmak için chord ekliyoruz.
  
  rect(250,10,120,25)

  
}
