import {test} from '../Test.js';
import Circle from './Circle.js';
import {swatch as c} from './colorData.js';
import ColorObject from './ColorObject.js';
import CircleGroup from './CircleGroup.js';

var circle;
var circles = [];

window.setup() = function() {
  colorMode(HSL);
  createCanvas(640, 600);
  background(50);


  var circles = new CircleGroup(5, 5);

 
  console.log("circle 3, 3: ", circles.objects[3][3]);
  console.log(circles.objects);
  console.log("name: ", circles.name);
  console.log("circles: ", circles);
  circles.show();
  
}



window.draw = function() {
  


}

