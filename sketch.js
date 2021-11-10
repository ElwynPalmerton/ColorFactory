
var circle;
var circles = [];

function setup() {
  colorMode(HSL);
  createCanvas(640, 600);
  background(50);


  



  let widthIncrement = 300 / 5 + 1;
  let heightIncrement = 300 / 5 + 1;

  let pos = createVector(150, 150);
  // circle = new Circle (pos, 100);


  circles = new CircleGroup(1, 1);



  
}



function draw() {
  background(50);
  // circle.show();
  circles.show();
 


};
 