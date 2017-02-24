var a = 420;
var x = 300;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var ht = 10;
var wt = 10;

function setup() {
  createCanvas(600,400); //creates a canvas 600x400
}

function draw() {
  background(b1,b2,b3);// creates a background with variables 
  fill(214,123,123); // fills the ellipse
  ellipse(x, a, ht,wt); //places the ellipse below the canvas with length and width of 10
  a=a-1; // moves the ellipse upwards
  b1=b1+1; //background colors change from 0 to 255
  b2=b2+2;
  b3=b3+3;
  ht=ht+1; // height and width increases from 10 to infinity
  wt=wt+1; //width of the circle increases
  
  if (ht > 250) {

    x=x+1;
    a=a+1;
    ht=ht-1;
    wt=wt-1;
  }
  
}


