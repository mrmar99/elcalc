import {PI} from "../../consts.js";

export default class OscillatoryCircuit {
    constructor ({ capacitor1, inductor }) {
        this.capacitor1 = capacitor1;
        this.inductor = inductor;
    }

    calcScheme = () => {
        const cutoffFreq = 1 / (2 * PI * Math.sqrt(this.inductor * this.capacitor1));
        return { "f_{cp}": cutoffFreq };
    }
}