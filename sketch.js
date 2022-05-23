function setup() {
  createCanvas(510, 450);
  y=150;
  s=200;
  x=110;
  z=5;
  g=150;
  a=150;
  b=150;
  c=150;
  d=150;
  p=0;
}
function draw() {
  background(163, 163, 194);
  ellipse(100,120,10,10);
  fill(239, 239, 245);
  stroke(239, 239, 245);
  ellipse(100,110,90,90);
  ellipse(140,108,110,110);
  ellipse(185,107,115,115);
  ellipse(219,110,84,84);
  ellipse(320,135,70,70);
  ellipse(350,130,90,90);
  ellipse(380,135,70,70);
    fill(51, 204, 255);
    stroke(51, 204, 255);
    ellipse(110,y,10,10);
    y=y+6;
    ellipse(x+25,s,10,10);
    s=s+8;
    ellipse(160,g,10,10);
    g=g+9;
    ellipse(180,a,10,10);
    a=a+8;
    ellipse(190,a+20,10,10);
    ellipse(110,g+20,10,10);
    ellipse(130,b,10,10);
    b=b+7;
    ellipse(150,a+20,10,10);
    ellipse(170,y+2,10,10);
    ellipse(190,c,10,10);
    c=c+6;
    ellipse(210,c,10,10);
    c=c+7;
    ellipse(230,d,10,10);
    d=d+6.5;
    ellipse(300,d,10,10);
    ellipse(320,g,10,10);
    ellipse(340,a,10,10);
    ellipse(360,y,10,10);
    ellipse(380,c,10,10);
    ellipse(400,b,10,10);
    if (y>450){
      y=150;
    }
  if (s>450){
  s=200;
  }
  if (x>450){
  x=110;
  }
  if(g>450){
  g=150;
  }
  if (a>450){
  a=150;
  }
  if (b>450){
  b=150;
  fill(255, 255, 204);
  stroke(255, 255, 204);
  triangle(240,100,210,180,230,180);
  triangle(210,180,230,180,242,220);
  triangle(230,205,241,221,200,250);
  }
  if (c>450){
  c=150;
  fill(255, 255, 204);
  stroke(255, 255, 204);
  triangle(140,50,110,130,130,130);
  triangle(110,130,130,130,142,170);
  triangle(130,155,141,171,100,200);
  }
  if (d>450){
  d=150;
  fill(255, 255, 204);
  stroke(255, 255, 204);
  triangle(440,50,410,80,430,80);
  triangle(410,80,430,80,442,120);
  triangle(430,105,441,121,400,150);
  }
}