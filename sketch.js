let tileSize;
let cols,rows;
let grid = [];

let inc = 0.05;
let zoff = 0;

function setup(){
  createCanvas(1000,600);
  tileSize=8;
  cols=width/tileSize + 1;
  rows=height/tileSize + 1;
  

  
}

function draw() {
  background(10);
  
  noFill(); 
  
  // draw points
  let yoff = 0;
  
  for(let i =0;i<rows;i++){
    grid[i] = [];
    let xoff = 0;
    for(let j = 0; j<cols ;j++){
      
      // get random floating value that decreases or increases 0.1
      let indexValue = round(noise(xoff,yoff,zoff)*8)/8;
      grid[i][j] = indexValue;
      //draw
      
      stroke(indexValue*255);
      //stroke(255-indexValue*255,indexValue*255,255-indexValue*255);
      strokeWeight(tileSize-1);
      point(j*tileSize,i*tileSize);
      
      xoff+=inc;
    }
    yoff+=inc;
  }
  zoff+=0.01;
  
  // draw lines
  strokeWeight(2);
  //stroke(255);
  stroke(255,255,0);

    for(let i =0;i<rows - 1;i++){
      for(let j = 0; j<cols - 1; j++){
        let a = createVector(j*tileSize+tileSize/2,i*tileSize);
        let b = createVector((j+1)*tileSize,i*tileSize+tileSize/2);
        let c = createVector(j*tileSize+tileSize/2,(i+1)*tileSize);
        let d = createVector(j*tileSize,i*tileSize+tileSize/2);
        let state = getState(grid[i][j],grid[i][j +1],grid[i + 1][j],grid[i + 1][j + 1]);
        

        switch(state){
                      case 0:
            break;
                      case 1:
            line(c.x,c.y,b.x,b.y);break;
                      case 2:
            line(d.x,d.y,c.x,c.y); break;
                      case 3:
            line(d.x,d.y,b.x,b.y); break;
                      case 4:
            line(a.x,a.y,b.x,b.y); break;
                      case 5:
            line(a.x,a.y,c.x,c.y); break;
                      case 6:
            line(d.x,d.y,a.x,a.y); 
            line(c.x,c.y,b.x,b.y);break;
                      case 7:
            line(d.x,d.y,a.x,a.y);
            break;
                      case 8:
            line(d.x,d.y,a.x,a.y); 
            break;
                      case 9:
            line(d.x,d.y,c.x,c.y);
            line(a.x,a.y,b.x,b.y);break;
                      case 10:
            line(a.x,a.y,c.x,c.y);break;
                      case 11:
            line(a.x,a.y,b.x,b.y); break;   
                      case 12:
            line(d.x,d.y,b.x,b.y); break;      
                      case 13:
            line(d.x,d.y,c.x,c.y); break;
                      case 14:
            line(c.x,c.y,b.x,b.y);break;
                      case 15:
            break;
               }
      }
  }
  noStroke();
  fill(0);
  rect(0,height-42,width,42);
  //fill(255,255,160);
  fill(255);
  textSize(30);
  textStyle(BOLD);
  text('Marching Squares Algorithm With Perlin Noise',10,rows*tileSize-20);
  textSize(10);
  text('BDB',width-28,height-6);
  
}

function getState(a,b,c,d){
  a=round(a);
  b=round(b);  
  c=round(c);
  d=round(d);
  return a*8 + b*4 + c*2 + d*1;
}
