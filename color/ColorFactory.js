import {colorDefaults } from "./ColorData.js";
import ColorObject from "./ColorObject.js";
import ColorRange from "./ColorRange.js";

export default class ColorFactory {
    constructor(){
        this.range = new ColorRange();
    }

    getColor() {
        const newColor = new ColorObject(colorDefaults);
        return newColor;
    }

    getColorInRange(){

    }

}