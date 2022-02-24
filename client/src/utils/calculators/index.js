import * as filters from "./filters/index.js";
import * as diodes from "./diodes/index.js";
import * as bjts from "./bjts/index.js";
import * as fets from "./fets/index.js";

const calculate = (id, data) => {
    const conformities = {
        1: new filters.RCFilter(data).calcScheme(),
        2: new filters.LCFilter(data).calcScheme(),
        3: new filters.RCFilter(data).calcScheme(),
        4: new filters.LCFilter(data).calcScheme(),
        5: new filters.Bpf(data).calcScheme(),
        6: new filters.OscillatoryCircuit(data).calcScheme(),
        7: new filters.OscillatoryCircuit(data).calcScheme(),
        8: new filters.OscillatoryCircuit(data).calcScheme(),
        9: new filters.OscillatoryCircuit(data).calcScheme(),
        10: new diodes.Diode(data).calcScheme(),
        11: new diodes.Diode(data).calcScheme(),
        12: new diodes.Diode(data).calcScheme(),
        13: new diodes.Diode(data).calcScheme(),
        14: new diodes.Diode(data).calcScheme(),
        15: new diodes.Diode(data).calcScheme(),
        16: new diodes.Diode(data).calcScheme(),
        17: new diodes.Diode(data).calcScheme(),
        18: new diodes.Diode(data).calcScheme(),
        19: new diodes.Diode(data).calcScheme(),
        20: new bjts.Bjt(data).calcNpn(),
        21: new bjts.Bjt(data).calcPnp(),
        22: new bjts.VoltageDivider(data).calcScheme(),
        23: new bjts.CommonEmitter(data).calcNpn(),
        24: new bjts.CommonEmitter(data).calcPnp(),
        25: new bjts.CommonCollector(data).calcNpn(),
        26: new bjts.CommonCollector(data).calcPnp(),
        27: new bjts.CommonBase(data).calcNpn(),
        28: new bjts.CommonBase(data).calcPnp(),
        // 29: new bjts.PowerAmplifier(data).calcScheme(),
        30: new bjts.DarlingtonCe(data).calcNpn(),
        31: new bjts.DarlingtonCe(data).calcPnp(),
        32: new bjts.DarlingtonCc(data).calcNpn(),
        33: new bjts.DarlingtonCc(data).calcPnp(),
        34: new bjts.CurrentSourceAndMirror(data).calcScheme(),
        35: new bjts.CurrentSourceAndMirror(data).calcScheme(),
        36: new bjts.CurrentSourceAndMirror(data).calcScheme(),
        // 37: new bjts.DifferentialAmplifier(data).calcOneToOne(),
        // 38: new bjts.DifferentialAmplifier(data).calcOneToTwo(),
        // 39: new bjts.DifferentialAmplifier(data).calcTwoToOne(),
        // 40: new bjts.DifferentialAmplifier(data).calcTwoToTwo(),
        // 41: new bjts.PushPullOutput(data).calcB(),
        // 42: new bjts.PushPullOutput(data).calcA(),
        // 43: new fets.CommonSource(data).calcControlN(),
        // 44: new fets.CommonSource(data).calcControlP(),
        // 45: new fets.CommonSource(data).calcInducedN(),
        // 46: new fets.CommonSource(data).calcInducedP(),
        // 47: new fets.CommonSource(data).calcBuiltinN(),
        // 48: new fets.CommonSource(data).calcBuiltinP(),
        // 49: new fets.CommonDrain(data).calcControlN(),
        // 50: new fets.CommonDrain(data).calcControlP(),
        // 51: new fets.CommonDrain(data).calcInducedN(),
        // 52: new fets.CommonDrain(data).calcInducedP(),
        // 53: new fets.CommonDrain(data).calcBuiltinN(),
        // 54: new fets.CommonDrain(data).calcBuiltinP(),
        // 55: new fets.CommonGate(data).calcControlN(),
        // 56: new fets.CommonGate(data).calcControlP(),
        // 57: new fets.CommonGate(data).calcInducedN(),
        // 58: new fets.CommonGate(data).calcInducedP(),
        // 59: new fets.CommonGate(data).calcBuiltinN(),
        // 60: new fets.CommonGate(data).calcBuiltinP()
    }

    return conformities[id];
}

export default calculate;

// console.log(calculate(23, inputObj));