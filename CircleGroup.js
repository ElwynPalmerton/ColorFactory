import Circle from "./Circle.js";
import ColorFactory from "./ColorFactory.js";

// Notes:  replace var with let;

export default class CircleGroup {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.objects = [];
        this.count = 0;
        this.name = "circle group";

        let widthIncrement = 300 / x + 1;
        let heightIncrement = 300 / y + 1;

        let pos = createVector(300, 100);
        let size = 100;
        
        let colorFactory = new ColorFactory();
        
        for (let i = 0; i < 5; i++) {
            let newRow = [];
            for (let j = 0; j < 5; j++) {

                let colorFromFactory = colorFactory.getColor();
                let pos = createVector(i * 100 + 100, j * 100 + 100);
                let size = 75;
                let newCircle = new Circle(pos, size, colorFromFactory);
                newRow.push(newCircle);
            }
            this.objects.push(newRow);
        }
    }

    update(){
        this.objects.forEach(row =>{
            row.forEach(c =>{
                c.update();
            })
        })
    }

    show() {

        this.objects.forEach(row =>{
            row.forEach(c =>{
                c.show();
            })
        })
    }
}

