import {test, hello} from './Test.js';
import CircleGroup from './CircleGroup.js';

let circle;
let circles = [];

window.setup = function() {
  hello();
  console.log('test hello: ', test);
  
  colorMode(HSL);
  createCanvas(640, 600);
  background(50);

  circles = new CircleGroup(1, 1);
}



window.draw = function() {
  background(50);
  circles.update();
  circles.show();
};
 