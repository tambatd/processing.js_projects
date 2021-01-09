let it = 1000;

function setup() {
   createCanvas(1000, 1000);
   frameRate(20);
}

function draw() {
  //background(color(255,173,213));
  background(0);
  for (i = 0; i < 361; i++) {
      for (ii = 0; ii < 37; ii++) {

        if (i%10 == 0){
        var x = sin(i)*25;
        var y = cos(i)*25;
        it -= 30;
        if (it < 0) {
        it = 1000;
        }  
        //console.log(it);
        //fill(color(random(150,255),random(150,255),random(150,255)));
        fill(color(random(255),random(255),random(255)));
        //strokeWeight(0.2);   
//circle(x+125, y+0+it, 10);
        //circle(x+125, y+0-it, 10);
        //circle(x+500-125+it, y+0+it, 10);
        //circle(x+500-125, y+0+it, 10);
                circle(x+it, y-400+it, 10);

                circle(x+it, y-300+it, 10);

        circle(x+it, y-200+it, 10);
        circle(x+it, y-100+it, 10);
        circle(x+it, y+0+it, 10);
        circle(x+it, y+100+it, 10);
        circle(x+it, y+200+it, 10);
        /*circle(x+it, y+300+it, 10);
        circle(x+it, y+400+it, 10);
        circle(x+it, y+500+it, 10);
        circle(x+it, y+600+it, 10);
        circle(x+it, y+700+it, 10);
        circle(x+it, y+800+it, 10);
        circle(x+it, y+900+it, 10);


        //circle(x+250+it, y+250, 5);
        //circle(x+250, y+250-it, 5);
        //circle(x+250, y+250+it, 5);*/
        //console.log(i);
      }
      }
  }
} 
