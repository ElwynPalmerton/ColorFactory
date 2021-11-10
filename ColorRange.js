import ColorFactory from "./ColorFactory.js";
import ColorObject from "./ColorObject.js";

export default class ColorRange {

    constructor(min = new ColorObject(0, 0, 0, 0), 
                max = new ColorObject(360, 100, 100, 1)){

        if (min.h < 0) min.h = 0;
        if (min.s < 0) min.s = 0;
        if (min.l < 0) min.l = 0;
        if (min.a < 0) min.a = 0;
        
        if (max.h > 360) max.h = max.h % 360;
        if (max.s > 100) max.s = max.s % 100;
        if (max.l > 100) max.l = max.l % 100;
        if (max.a > 1) max.a = max.a - max.a.floor();


        this.h = {
            min: min.h,
            max: max.h
        }
        
        this.s = {
            min: min.h,
            max: max.h
        }

        this.l = {
            min: min.h,
            max: max.h
        }

        this.a = {
            min: min.h,
            max: max.h
        }
    }
}