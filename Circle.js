class Circle{
    constructor(position, size){
        this.location = createVector(position.x, position.y);
        this.size = size;
    }

    show() { 
        console.log("displaying: ", this.location.x, this.location.y, this.size);
        fill(155, 50, 50, 1);
        ellipse(this.location.x, this.location.y, this.size, this.size);
    }

}

