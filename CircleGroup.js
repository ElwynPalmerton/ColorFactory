// import Circle from "./Circle.js";

class CircleGroup {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.objects = [];
        this.count = 0;
        this.name = "circle group";

        let widthIncrement = 300 / x + 1;
        let heightIncrement = 300 / y + 1;

        var pos = createVector(300, 100);
        var size = 100;

        // var newCircle = new Circle(pos, size);

        // this.objects.push(newCircle);
        
        for (let i = 0; i < 5; i++) {
            var row = [];
            for (let j = 0; j < 5; j++) {

                var pos = createVector(i * 100 + 100, j * 100 + 100);
                var size = 75;
                var newCircle = new Circle(pos, size);
                row.push(newCircle);
            }
            this.objects.push(row);
        }



        // for(let i = 1; i <= x; i++){
        //     // let row = [];
        //     // for (let j = 1; j <= y; j++){

        //         let newWidth = widthIncrement * i;
        //         // let newHeight = heightIncrement * j;
        //         let vec = createVector(newWidth, 150);

        //         let newCircle = new Circle(vec, 40);
                
        //         this.objects.push(newCircle);
        //         // row.push(newCircle);
                
         
        //     // }
        //     // this.objects.push(row);
        // }
    }

    show() {

        this.objects.forEach(r =>{
            r.forEach(circ =>{
                circ.show();
            })
        })
      
        // for(let i = 1; i <= this.x; i++){
        //    this.objects[i].display();
        // }
    }
}

