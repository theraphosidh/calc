"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EvalAB {
    Perform(a, b, oper, presenter) {
        return presenter.present(oper.Apply(a, b));
    }
}
