"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvalAB = void 0;
class EvalAB {
    Perform(a, b, oper, presenter) {
        var x = Number(a); // тут лучше иметь годный конвертер
        var y = Number(b); // тут лучше иметь годный конвертер
        return presenter.present(oper.Apply(x, y));
    }
}
exports.EvalAB = EvalAB;
