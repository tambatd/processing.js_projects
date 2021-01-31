let x = 0;
let y = 250;
let x1 = 250;
let y1 = 500;
let x2 = 0;
let y2 = 300;
let x3 = 0;
let y3 = 200;
let a;

function setup() {
  createCanvas(500, 500);
  //stroke(255);
  a = height / 2;
  //background(51);
    //line(0, 250, 500, 250);

}


function draw() {
  background(255);
  if (x == 500){
    x=0;
    y=250;
  }
  if (y1 == 500) {
    x1=250;
    y1=0;
  }
  if (x2 == 0 && y2 == 250) {
    x2=0;
    y2=300;
  }
  if(y3>500){
      x3=0;
      y3=200;
    }
  //Lines1
  line(0, 250, 250, 250);
  line(250, 250, 250, 300);
  line(250, 300, 500, 300);
  //Lines 2
  line(250, 0, 250, 200);
  line(250, 200, 300, 200);
  line(300, 200, 300, 500);
  //Line3
  line(0, 300, 500, 300);
  //
  line(0, 200, 500, 200);
  fill(color(0, 217, 237)); 
  circle(x,y,30);
  //x = a - 0.5;
  if (x < 250 || y == 300){
    x+=1;
  }
  else if (x == 250 && y !== 300){
    y+=1;
  }
  //Circle2
  fill(color(0, 255, 208)); 
  circle(x1,y1,30);
  if(y1 < 200 || x1 == 300){
    y1+=2;
  }
  else if(x1 < 300 && y1 == 200){
    x1+=2;
  }
  //Circle3
  fill(color(255, 181, 240)); 
  circle(x2,y2,30);
        //x2+=1;

  if(y2 == 300 && x2 < 250){
      x2+=2;
    }
    else if(x2 == 250 && y2 != 250){
      y2-=2;
    }
  else if(y2 == 250){
      x2-=2;
    }
    /*
     if(y2 == 300 || y2 == 250){
      x2+=1;
    }
    */
  //Circle3
  fill(color(181, 255, 192)); 
  circle(x3,y3,30);
  if(x3 == 300){
    y3+=2;
  }
  else{
    x3+=2;
  }
   

  
 
 /* circle(0, a, 10);
  a = a - 0.5;
  if (a < 0) {
    a = height;
  }*/
}


/*
  fill(color(random(255), random(204), random(255))); 
  line(0, 250, 500, 250);
    
 
    fill(color(0, 217, 237)); 
    noStroke();
    circle(x,250,5);
    x+=0.5;
    
    */
