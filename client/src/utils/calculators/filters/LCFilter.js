import {PI} from "../../consts.js";

export default class LCFilter {
    constructor ({ resistor1, inductor }) {
        this.resistor1 = resistor1;
        this.inductor = inductor;
    }

    calcScheme = () => {
        const cutoffFreq = 1 / (2 * PI * this.resistor1 * this.inductor);
        return { "f_{cp}": Math.round(cutoffFreq * 1000) / 1000 + " Hz" };
    }
}