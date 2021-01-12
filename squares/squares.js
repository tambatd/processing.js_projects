var x = 0;
var y = 0;

function setup() {
  createCanvas(5000, 5000);
  frameRate(60);
    //background(255);

}


function draw() {
  //background(255);
  //for (i = 0; i < 50; i++){
    x+=10;
    y+=10;
    noStroke();
    fill(color(random(255), random(204), random(255))); 
    square(0, y, 10);
    noStroke();
    fill(color(random(255), random(204), random(255))); 
    square(x, 0, 10);
    fill(color(random(255), random(204), random(255))); 
    square(x, 490, 10);
     fill(color(random(255), random(204), random(255))); 
    square(490, y, 10);
    //SQUARES ANGLE
    fill(color(random(255), random(204), random(255))); 
    //square(x, y, 10);
     fill(color(random(255), random(204), random(255))); 
    square(x+10, y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+30),y+10, 10);
        fill(color(random(255), random(204), random(255))); 
    square(x+50, y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+70),y+10, 10);
      fill(color(random(255), random(204), random(255))); 
    //square(x, y, 10);
     fill(color(random(255), random(204), random(255))); 
    square(x+90, y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+110),y+10, 10);
        fill(color(random(255), random(204), random(255))); 
    square(x+130, y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+150),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+170),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+190),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+210),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+230),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+250),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+270),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+290),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+310),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+330),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+350),y+10, 10);
    fill(color(random(255), random(204), random(255))); 
    square((x+370),y+10, 10);
    //
    noStroke();
    fill(color(random(255), random(204), random(255))); 
    square(x, 480, 10);
    fill(color(random(255), random(204), random(255))); 
    square(x, 10, 10);
     fill(color(random(255), random(204), random(255))); 
    square(490, y, 10);
     fill(color(random(255), random(204), random(255))); 
    square(10, y, 10);
     fill(color(random(255), random(204), random(255))); 
    square(480, y, 10);
//}
}
