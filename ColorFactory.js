import {swatch as c} from "./ColorData.js";
import ColorObject from "./ColorObject.js";
import ColorRange from "./ColorRange.js";

export default class ColorFactory {
    constructor(){
        this.range = new ColorRange();


    }
   
    setHueRange(){

    }

    setSaturationRange(){

    }

    setLightnessRange(){

    }

    setAlphaRange(){

    }

    getColor() {
        const newColor = new ColorObject(c.h, c.s, c.l, c.a);
        return newColor;
    }

    getColorInRange(){

    }

}