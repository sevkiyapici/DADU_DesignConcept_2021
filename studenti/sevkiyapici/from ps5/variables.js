let w = 600;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(220);

  
  
line(0,300,600,300);
 // line(0,450,600,450);
  // several lines 
  
  let n = 8;
  let m = w/n;
  
  for(let fila = 0; fila < n; fila ++){
    
    line(0,fila*m,w,fila*m);
    
    line(fila*m,0,fila*m,w);
    
    
      for(let col = 0; col < n; col ++){
            fill(0);

           let x = col*m;
           let y = fila*m;
           let xc = x + m/2;
           let xy = y + m/2;
           let i = (fila*n) + col;
        
        rectMode(CENTER);
        
        let q = map(i , 0, n*n , 6, 48)
        square(col*m+m/2,fila*m+m/2,q);
       
        // let d = map(i , 0, n*n, 2, m);
        
        
        //circle(xc , fila*m + (m/2) ,d);
    
      }
     
     
  }
  
}