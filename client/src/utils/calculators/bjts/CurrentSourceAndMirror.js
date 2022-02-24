export default class CurrentSourceAndMirror {
    constructor({ amperage1, dc_voltage1 }) {
        this.amperage1 = amperage1;
        this.dc_voltage1 = dc_voltage1;
    }

    calcScheme = () => {
        const voltageDependence = {
            "0.001": 0.7,
            "0.01": 0.8,
            "0.1": 0.9
        }

        if (voltageDependence[this.amperage1] !== undefined) {
            const r1 = (this.dc_voltage1 - voltageDependence[this.amperage1]) / this.amperage1
            return { "R_1": Math.round(r1) }
        } else {
            return { "error": "Ошибка: вы ввели ток, отличный от 0.001А, 0.01А или 0.1А" }
        }
    }
}