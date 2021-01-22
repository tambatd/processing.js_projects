var x = 0;
var y = 0;

function setup() {
  createCanvas(2000, 2000);
  frameRate(60);
  angleMode(RADIANS);

    //background(255);

}


function draw() {
  translate(width*.5,height*.5);
  //background(255);
  //for (i = 0; i < 50; i++){
    
    noStroke();
    fill(color(random(255), random(204), random(255))); 
    circle((sin(x/40)*y), (cos(x/40)*y), 10);
    x+=0.5;
    y+=0.5;
//}
}
