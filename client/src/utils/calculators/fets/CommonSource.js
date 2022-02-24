export default class CommonSource {
    constructor (dcVoltage, biasVoltage, qAmperage) {
        this.dcVoltage = dcVoltage;
        this.biasVoltage = biasVoltage;
        this.qAmperage = qAmperage;
        this.r1 = 2000000;
    }

    calcControlN = () => {

    }
}