let w = 600
function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);
  
  
  let n = 12;
  let m = w/n;
  for(let fila = 0; fila < n; fila++){
  
  
    
    
  // fila --> 0,1,2,3,,,,,n  
    
  
      for(let col=0; col<n; col++){
        let t = 0
        let x=col*m;
        let y = fila*m;
        let xc = x+m/2;
        let yc = y+m/2;
        let i = (fila*n) + col;
        let d = map(i,0,n*n,2,m); // variable, min, max
        let g = map(col,0,n,255,0);
     // circle(col*m, fila*m,d);
       // col = 0,1,2,3,,,,n 7
    
        let v = noise(x/100 + t ,y/100);
        let vg = map(v,0,1,0,255);
        rectMode(CENTER);
        fill(vg);
        square(xc,yc,m);
        
        
        // random value
        
        
        fill(0);
                textAlign(CENTER,CENTER);

        text(i,xc,yc);
        
        
        
    }    
  }
  
  
  
      
}