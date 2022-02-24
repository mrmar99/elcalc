export default class Bjt {
    constructor ({ dc_voltage1, dc_voltage2, resistor1, resistor2, transistor_beta1 }) {
        this.dc_voltage1 = dc_voltage1;
        this.dc_voltage2 = dc_voltage2;
        this.resistor1 = resistor1;
        this.resistor2 = resistor2;
        this.transistor_beta1 = transistor_beta1;
        this.earthVoltage = 0;
    }

    calcNpn = () => {
        const bVoltage = this.dc_voltage1;
        const eVoltage = bVoltage - 0.6;
        const eAmperage = (eVoltage - this.earthVoltage) / this.resistor2;
        const bAmperage = eAmperage / (1 + this.transistor_beta1);
        const cAmperage = eAmperage - bAmperage;
        const cVoltage = this.dc_voltage2 - (cAmperage * this.resistor1);
        return {
            "V_e": eVoltage,
            "I_e": eAmperage,
            "I_b": bAmperage,
            "I_c": cAmperage,
            "V_c": cVoltage
        }
    }

    calcPnp = () => {
        const bVoltage = this.dc_voltage1;
        const eVoltage = bVoltage + 0.6;
        const eAmperage = (this.dc_voltage2 - eVoltage);
        const bAmperage = eAmperage / (1 + this.transistor_beta1);
        const cAmperage = eAmperage - bAmperage;
        const cVoltage = this.dc_voltage2 - (cAmperage * this.resistor2);
        return {
            "V_e": eVoltage,
            "I_e": eAmperage,
            "I_b": bAmperage,
            "I_c": cAmperage,
            "V_c": cVoltage
        }
    }
}