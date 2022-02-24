import {PI} from "../../consts";

export default class DarlingtonCc {
    constructor ({ dc_voltage1, amperage1, cutoff_freq, transistor_beta1, transistor_beta2 }) {
        this.dc_voltage1 = dc_voltage1;
        this.amperage1 = amperage1;
        this.cutoff_freq = cutoff_freq;
        this.transistor_beta1 = transistor_beta1;
        this.transistor_beta2 = transistor_beta2;
    }

    calcNpn = () => {
        const bAmperage = this.amperage1 / (this.transistor_beta1 * this.transistor_beta2);
        const eAmperage = this.amperage1 - bAmperage;
        const eResistor = (this.dc_voltage1 / 2) / eAmperage;
        const divAmperage = 10 * bAmperage;
        const r1Amperage = divAmperage + bAmperage;
        const r2Amperage = divAmperage;
        const e2Voltage = eAmperage * eResistor;
        const b2Voltage = e2Voltage + 0.6;
        const b1Voltage = b2Voltage + 0.6;
        const r1 = (this.dc_voltage1 - b1Voltage) / r1Amperage;
        const r2 = b1Voltage / r2Amperage;
        const capacitor1 = 1 / (2 * PI * this.cutoff_freq * r2);
        const capacitor2 = "\\frac{1}{2\\pi f_{cp} R_H}";
        return {
            "R_1": Math.round(r1),
            "R_2": Math.round(r2),
            "R_e": eResistor,
            "C_1": capacitor1,
            "C_2": capacitor2
        }
    }

    calcPnp = () => {
        const bAmperage = this.amperage1 / this.transistor_beta1;
        const eAmperage = this.amperage1 - bAmperage;
        const eResistor = (this.dc_voltage1 / 2) / eAmperage;
        const divAmperage = 10 * bAmperage;
        const r1Amperage = divAmperage;
        const r2Amperage = divAmperage + bAmperage;
        const e2Voltage = eAmperage * eResistor;
        const b2Voltage = e2Voltage - 0.6;
        const b1Voltage = b2Voltage - 0.6;
        const r1 = b1Voltage / r2Amperage;
        const r2 = (this.dc_voltage1 - b1Voltage) / r1Amperage;
        const capacitor1 = 1 / (2 * PI * this.cutoff_freq * r2);
        const capacitor2 = "\\frac{1}{2\\pi f_{cp} R_H}";
        return {
            "R_1": Math.round(r1),
            "R_2": Math.round(r2),
            "R_e": eResistor,
            "C_1": capacitor1,
            "C_2": capacitor2
        }
    }
}