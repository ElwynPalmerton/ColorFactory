
export default class ColorObject{
    constructor(hue, saturation, lightness, alpha){
        this.h = hue;
        this.s = saturation;
        this.l = lightness;
        this.alpha = alpha;
        this.rate = random(0, 3) * 0.1;
        // console.log(this.rate);
    }

    update(){
        // console.log('updating color');
        this.h += this.rate;
        if (this.h > 360) this.h = this.h % 360;
        // console.log(this.h);
    }
}