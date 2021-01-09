let y = 100;
let x = 100;
var timer = 0;
var videoScale = 8;
var cols, rows;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  //
  //Unsure how to get the grid to work
  //Grid shown for one second then disapears
  //
  /*cols = width/videoScale;
  rows = height/videoScale;
  for (i = 0; i < cols; i++) {
    // Begin loop for rows
    for (j = 0; j < rows; j++) {

      // Scaling up to draw a rectangle at (x,y)
      let x_rect = i*videoScale;
      let y_rect = j*videoScale;
      fill(255);
      stroke(0);
      // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
      rect(x_rect, y_rect, videoScale, videoScale);
    }
  }*/
  
  
}


function draw() {
  if (millis()-timer > 500) {
    timer = millis();
    noStroke();
    fill(color(random(255), random(204), random(255)));   
  }
  background(255);
  y = y-1;
  if (y < 0) {
    y = height;
  }
  x = x-1;
  if (x < 0) {
    x = width;
  }
 
  circle(250, y, 10);
   for (i = 0; i < 361; i+=5) {
      //console.log(i);
      if (i%10 == 0){
        var x_coordinate = sin(i)*25;
        var y_coordinate = cos(i)*25;
        circle(250+x_coordinate, y_coordinate+y, 5);
        }
      }
   //triangle(x+253.5, 253.5, x+253.5+6.3, 253.5, x+253.5+4.15, 257.224);
  circle(x, 250, 10);
    for (i = 0; i < 361; i+=5) {
      //console.log(i);
      if (i%10 == 0){
        var x1_coordinate = sin(i)*25;
        var y1_coordinate = cos(i)*25;
        circle(x+x1_coordinate, 250+y1_coordinate, 5);
        }
      }
   circle(500-x, 250, 10);
    for (i = 0; i < 361; i+=5) {
      //console.log(i);
      if (i%10 == 0){
        var x2_coordinate = sin(i)*25;
        var y2_coordinate = cos(i)*25;
        circle(500-x+x2_coordinate, 250+y2_coordinate, 5);
        }
      }
  } 
