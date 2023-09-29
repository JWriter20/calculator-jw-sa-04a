
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  private _numbers: number[] = [];
  private _ops: string[] = [];


  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._numbers.push(+this._buffer);
    this._buffer = '';
    this._ops.push(key);
  }

  public pressActionKey(key: ActionKeys): void {
    switch(key) {
      case ActionKeys.EQUALS: {
        this._numbers.push(+this._buffer);
        this._buffer = this.calculate(this._numbers, this._ops);
      } break;
      case ActionKeys.CLEAR: {
        this._buffer = '';
        this._numbers = [];
        this._ops = [];
      }; break;
      case ActionKeys.DOT:  break;
    }
  }

  public display(): string {
    return this._buffer;
  }

  // 4 + 3 * 6 / 2 ===
  public calculate(numbers: number[], opertations: string[]) {
    console.log(numbers);
    console.log(opertations);
    if (numbers.length == 0) return '';
    for (let i = 0; i < opertations.length; i++) {
      if (opertations[i] == OperatorKeys.DIV) {
        numbers.splice(i, 2, (numbers[i] / numbers[i + 1]))
      } else if (opertations[i] == OperatorKeys.MULT) {
        numbers.splice(i, 2, (numbers[i] * numbers[i + 1]))
      }
    }


    let res: number = numbers[0];
    let numIndex: number = 1;
    for (let i = 0; i < opertations.length; i++) {
      if (opertations[i] == OperatorKeys.PLUS) {
        res += numbers[numIndex++];
      } else if (opertations[i] == OperatorKeys.MINUS) {
        res -= numbers[numIndex++];
      }
    }
    return res.toString();
      
  }

}
