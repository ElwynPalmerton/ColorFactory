import Circle from './Circle.js';
// import {swatch as c} from './colorData.js';
// import ColorObject from './ColorObject.js';

class CircleGroup {


    constructor(x, y){
        this.x = x;
        this.y = y;
        this.objects = [];
        this.count = 0;
        this.name = "circle group";

        let widthIncrement = 300 / x + 1;
        let heightIncrement = 300 / y + 1;


        // let newColor = new ColorObject(c.h, c.s, c.l, c.a);


        for(let i = 1; i <= x; i++){
            let row = [];
            for (let j = 1; j <= y; j++){

                let newWidth = widthIncrement * i;
                let newHeight = heightIncrement * j;
                let vec = createVector(newWidth, newHeight);

                let newCircle = new Circle(
                        vec,
                        40);
                row.push(newCircle);
                
         
            }
            this.objects.push(row);
        }
    }

    show(){
        this.objects.forEach(rw =>{

            rw.forEach(c => {
                console.log(c);
                c.sayHi();
                c.display();
            });
        });
    }
};

export default CircleGroup;