import {PI} from "../../consts.js";

export default class RCFilter {
    constructor ({ resistor1, capacitor1 }) {
        this.resistor1 = resistor1;
        this.capacitor1 = capacitor1;
    }

    calcScheme = () => {
        const cutoffFreq = 1 / (2 * PI * this.resistor1 * this.capacitor1);
        return { "f_{cp}": Math.round(cutoffFreq * 1000) / 1000 + " Hz" };
    }
}