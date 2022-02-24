export default class VoltageDivider {
    constructor ({ dc_voltage1, resistor1, resistor2 }) {
        this.dc_voltage1 = dc_voltage1;
        this.resistor1 = resistor1;
        this.resistor2 = resistor2;
    }

    calcScheme = () => {
        const outVoltage = (this.dc_voltage1 * this.resistor2) / (this.resistor1 + this.resistor2);
        return {
            "U_{out}": outVoltage
        };
    }
}