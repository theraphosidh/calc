export interface IResultPresenter{
    present(a: any): any
}

export class ResultPresenter implements IResultPresenter{
    present(a: any): any{
        return{
            result: a
        }
    }
}