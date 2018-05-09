var pl = [4];
var pl2 = [3];
var vin;
var dir,dir2;

function setup() {
  createCanvas(640,413);
  pl[0] = loadImage("c1.png");
  pl[1] = loadImage("c2.png");
  pl[2] = loadImage("c3.png");
  pl[3] = loadImage("vin.jpg");
  pl2[0] = loadImage("h1.png");
  pl2[1] = loadImage("h2.png");
  pl2[2] = loadImage("vin.jpg");
  vi = loadImage("vin.jpg");
  dir = 0;
  dir2 = 0;
}

function draw() {
  image(vi,0,0);
  image(pl[dir],0,0);
  image(pl2[dir2],0,0);
}

function keyPressed(){
  if(keyCode ==LEFT_ARROW)
  {
    if(dir == 0) dir = 1;
    else if (dir ==1) dir = 2;
    else if (dir == 2) dir = 0;
    else dir =  0; 
  }
  if(keyCode == RIGHT_ARROW)
  { 
    if(dir == 0) dir = 2;
    else if (dir ==2) dir = 1;
    else if (dir == 1) dir = 0;
    else dir=  0;
  }
  if(keyCode == DOWN_ARROW)
  {
    dir = 3; dir2 = 2;
  }
  if(key == ' ')
  {
    if(dir2 == 0) dir2 = 1;
    else dir2 = 0;
  }
}