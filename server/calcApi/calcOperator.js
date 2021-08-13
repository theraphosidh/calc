"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperParse = exports.DivOp = exports.MultOp = exports.MinusOp = exports.AddOp = void 0;
class AddOp {
    Apply(a, b) {
        return a + b;
    }
}
exports.AddOp = AddOp;
class MinusOp {
    Apply(a, b) {
        return a - b;
    }
}
exports.MinusOp = MinusOp;
class MultOp {
    Apply(a, b) {
        return a * b;
    }
}
exports.MultOp = MultOp;
class DivOp {
    Apply(a, b) {
        return a / b;
    }
}
exports.DivOp = DivOp;
function OperParse(operName) {
    switch (operName) {
        case "plus": return new AddOp();
        case "minus": return new MinusOp();
        case "mult": return new MultOp();
        case "div": return new DivOp();
    }
    throw new Error("invalid operator name");
}
exports.OperParse = OperParse;
