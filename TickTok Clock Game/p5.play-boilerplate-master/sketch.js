var sc;
var hr;
var mn;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  hr=hour();
  mn=minute();
  sc=second();
  let angleSc= map(sc,0,60,0,360);
  let anglehr= map(hr,0,60,0,360);
  let anglemn=map(mn,0,60,0,360)
  fill(255, 500, 0);
  ellipse(width/2, height/2, 200,200);
  push();
  rotate(angleSc);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(anglehr);
  stroke(255,100,30);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(anglemn);
  stroke(100,300,50);
  strokeWeight(7);
  line(0,0,100,0);
  pop();



  
}

