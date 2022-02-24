export default class Diode {
    constructor ({ amperage1, dc_voltage1, voltage1 }) {
        this.amperage1 = amperage1;
        this.dc_voltage1 = dc_voltage1;
        this.voltage1 = voltage1;
    }

    calcScheme = () => {
        const resistor1 = (this.dc_voltage1 - this.voltage1) / this.amperage1;
        return { "R_1": resistor1 };
    }
}