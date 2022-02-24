import {PI} from "../../consts.js";

export default class Bpf {
    constructor ({ resistor1, resistor2, capacitor1, capacitor2 }) {
        this.resistor1 = resistor1;
        this.resistor2 = resistor2;
        this.capacitor1 = capacitor1;
        this.capacitor2 = capacitor2;
    }

    calcScheme = () => {
        const highCutoffFreq = 1 / (2 * PI * this.resistor1 * this.capacitor1);
        const lowCutoffFreq = 1 / (2 * PI * this.resistor2 * this.capacitor2);
        const resonanceFreq = Math.sqrt(highCutoffFreq * lowCutoffFreq);
        const bandwidth = highCutoffFreq - lowCutoffFreq;
        return {
            "f_B": highCutoffFreq,
            "f_H": lowCutoffFreq,
            "f_p": resonanceFreq,
            "\\delta f": bandwidth
        };
    }
}