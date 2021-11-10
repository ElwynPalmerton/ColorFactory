import {test, hello} from './Test.js';
import CircleGroup from './circles/CircleGroup.js';

let circle;
let circles = [];

window.setup = function() {
  colorMode(HSL);
  createCanvas(640, 600);

  circles = new CircleGroup(1, 1);
}



window.draw = function() {

  background(50);
  circles.update();
  circles.show();

};
 