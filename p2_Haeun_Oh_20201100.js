let diam=0;
let k;
function setup(){
  createCanvas(800,800);
  autumnpic();
}
function autumnpic(){
  background(120,200,255,190);
  fill(150,205,155);
  quad(0,580,0,800,800,800,800,580);
  noStroke();
  fill(150,222,108); 
  triangle(0,600,200,300,400,600);
  fill(180,139,35,180); 
  quad(300,450,380,380,460,460,360,540);
  triangle(width,540,700,450,width,390);
  fill(180,191,46); 
  triangle(0,600,0,420,60,510);
  beginShape();
  vertex(360,540);
  vertex(600,300);
  vertex(width,540);
  vertex(width,600);
  vertex(400,600);
  endShape(CLOSE);
  noStroke();
  fill(255,220,0);
  ellipse(150,150,70,70);
}
function winterpic(){
  for(i=1;i<height;i++){
  stroke(i/2,i/2,3*i);
  line(0,i,width,i); 
  fill(35,25,70,200);
  quad(0,580,0,800,800,800,800,580);
  noStroke();
  fill(245); 
  triangle(0,600,200,300,400,600);
  fill(220,100); 
  quad(300,450,380,380,460,460,360,540);
  triangle(width,540,700,450,width,390);
  fill(235); 
  triangle(0,600,0,420,60,510);
  beginShape();
  vertex(360,540);
  vertex(600,300);
  vertex(width,540);
  vertex(width,600);
  vertex(400,600);
  endShape(CLOSE);
 
  noStroke();
  fill(250,255,150);
  ellipse(150,150,70,70);
}
}

function draw(){
  if(keyIsPressed){
    if(key == 'a'){
    autumnpic();
  }
  if(key == 'w'){
    winterpic();
  }
  if(key == 'c'){
    k = 1;
  }
  if(key == 'l'){
    k = 2;
  }
  if(key == 's'){
    k = 3;
  }
  if(key == 'm'){
    k = 4;
  }
  }
  if(k == 1){
    if(mouseIsPressed){
    noStroke();
    fill(255,70);
    ellipse(mouseX,mouseY,diam+15,diam);
    diam+=5;
    if(diam>50)diam=0;
    noStroke();
    fill(355,15);
    let size= random(5,20);
    let cnt = 0;
    while(cnt<10) {
          let a = random(-70,100);
          let b = random(-100,120);
          ellipse(mouseX+a, mouseY+b,size,size);
          cnt++; 
          }
  }
}
  if(k == 2){
    if(mouseIsPressed){
      noStroke();
      r=random(150,255);
      g=random(100,250);
      fill(r,g,0,50);
      arc(mouseX,mouseY,50,50,radians(30),radians(330));
      stroke(r,g,0,50);
      strokeWeight(4);
      line(mouseX-25,mouseY-5,mouseX-25,mouseY);
      line(mouseX-25,mouseY,mouseX-40,mouseY-6);
    }
  }
  if(k == 3){
  a=random(255);
  snow = random(11);
  x = random(width);
  y = random(height-200);
  noStroke();
  fill(255,255,255,a);
  ellipse(x,y,snow,snow);
  }
  if(k == 4){
    if(mouseIsPressed){
   noStroke();
   fill(255);
   ellipse(mouseX,mouseY,50,50); 
   stroke(170,110,0);
   strokeWeight(3);
   line(mouseX,mouseY+65,mouseX+50,mouseY+25);
   line(mouseX,mouseY+65,mouseX-50,mouseY+25);
   noStroke();
   ellipse(mouseX,mouseY+65,80,80); 
   fill(0);
   ellipse(mouseX-10,mouseY,5,5); 
   ellipse(mouseX+10,mouseY,5,5);
   fill(255,170,0);
   arc(mouseX,mouseY+10,20,20,0,PI);
   o=random(0,255);
   q=random(0,255);
   z=random(0,255);
   fill(o,q,z);
   ellipse(mouseX,mouseY+65,10,10);
   ellipse(mouseX,mouseY+45,10,10);
   ellipse(mouseX,mouseY+85,10,10);
   
 }
    
  }
}
