import {PI} from "../../consts.js";

export default class CommonEmitter {
    constructor ({ dc_voltage1, amperage1, cutoff_freq, transistor_beta1 }) {
        this.dc_voltage1 = dc_voltage1;
        this.amperage1 = amperage1;
        this.cutoff_freq = cutoff_freq;
        this.transistor_beta1 = transistor_beta1;
    }

    calcNpn = () => {
        const cResistor = (this.dc_voltage1 / 2) / this.amperage1;
        const bAmperage = this.amperage1 / this.transistor_beta1;
        const divAmperage = 10 * bAmperage;
        const r1Amperage = divAmperage + bAmperage;
        const r2Amperage = divAmperage;
        const r1 = (this.dc_voltage1 - 0.6) / r1Amperage;
        const r2 = (0.6) / r2Amperage;
        const capacitor1 = 1 / (2 * PI * this.cutoff_freq * r2);
        const capacitor2 = "\\frac{1}{2\\pi f_{cp} R_H}";
        return {
            "R_1": Math.round(r1),
            "R_2": Math.round(r2),
            "R_c": cResistor,
            "C_1": capacitor1,
            "C_2": capacitor2
        }
    }

    calcPnp = () => {
        const cResistor = (this.dc_voltage1 / 2) / this.amperage1;
        const bAmperage = this.amperage1 / this.transistor_beta1;
        const divAmperage = 10 * bAmperage;
        const r1Amperage = divAmperage;
        const r2Amperage = divAmperage + bAmperage;
        const r1 = (0.6) / r2Amperage;
        const r2 = (this.dc_voltage1 - 0.6) / r1Amperage;
        const capacitor1 = 1 / (2 * PI * this.cutoff_freq * r2);
        const capacitor2 = "\\frac{1}{2\\pi f_{cp} R_H}";
        return {
            "R_1": Math.round(r1),
            "R_2": Math.round(r2),
            "R_c": cResistor,
            "C_1": capacitor1,
            "C_2": capacitor2
        }
    }
}