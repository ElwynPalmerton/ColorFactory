import ColorRange from './ColorRange.js';
// import {colorDataMin, colorDataMax} from './ColorData.js';

export default class ColorObject{
    constructor(c){
        this.h = c.color.h;
        this.s = c.color.s;
        this.l = c.color.l;
        this.a = c.color.a;
        this.rate = random(0, 3) * 0.003;
        this.index = 0;
        this.range = new ColorRange(c.min, c.max);
    }

    hueRangeUpdate(){
        this.index += this.rate;
        this.h = this.range.h.min + this.range.h.spectrum * ((Math.sin(this.index) + 1) / 2);
    }

    saturationRangeUpdate(){
        this.index += this.rate;
        this.s = this.range.s.min + this.range.s.spectrum * ((Math.sin(this.index) + 1) / 2);
    }

    lightnessRangeUpdate(){
        this.index += this.rate;
        this.l = this.range.l.min + this.range.l.spectrum * ((Math.sin(this.index) + 1) / 2);
    }

    alphaRangeUpdate(){
        this.index += this.rate;
        this.a = this.range.a.min + this.range.a.spectrum * ((Math.sin(this.index) + 1) / 2);
    }

    update(){
        this.hueRangeUpdate();
        this.saturationRangeUpdate();
        // this.lightnessRangeUpdate();
        // this.alphaRangeUpdate();
        
    }
}