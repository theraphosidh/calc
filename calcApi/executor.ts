import { IOperator } from "./calcOperator";
import { IResultPresenter } from "./resultPresenter";

export class EvalAB{

    Perform(a: number, b: number, oper: IOperator, presenter: IResultPresenter):any{
        var x = Number(a) // тут лучше иметь годный конвертер
        var y = Number(b) // тут лучше иметь годный конвертер
        return presenter.present(oper.Apply(x,y));
    }    
}

