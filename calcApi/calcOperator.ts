export interface IOperator{
    Apply(a: number, b: number): number
}

export class AddOp implements IOperator{
    Apply(a: number, b: number): number {
        return a+b
    }
}

export class MinusOp implements IOperator{
    Apply(a: number, b: number): number {
        return a-b
    }
}

export class MultOp implements IOperator{
    Apply(a: number, b: number): number {
        return a*b
    }
}

export class DivOp implements IOperator{
    Apply(a: number, b: number): number {
        return a/b
    }
}

export function OperParse(operName: string): IOperator {
    switch (operName) {
        case "plus": return new AddOp()
        case "minus": return new MinusOp()
        case "mult": return new MultOp()
        case "div": return new DivOp()
    }
    throw new Error("invalid operator name");
}