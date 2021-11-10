export default class Circle{
    constructor(position, size, color){
        this.location = createVector(position.x, position.y);
        this.size = size;
        this.c = color
    }

    update() {
        this.c.update();
    
    }

    show() { 
        noStroke();
        fill(this.c.h, this.c.s, this.c.l, this.c.a);
        ellipse(this.location.x, this.location.y, this.size, this.size);
    }

}

