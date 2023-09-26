
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  private _result: number = 0;

  private _op: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._result = +this._buffer;
    this._buffer = '';
    this._op = key;

  }

  public pressActionKey(key: ActionKeys): void {
    throw new Error('Method not implemented.');
  }

  public display(): string {
    return this._buffer;
  }

}
