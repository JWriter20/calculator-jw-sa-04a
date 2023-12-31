
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';

describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');

  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');

  });

  it('should display `2` when the `2` key is pressed', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

  it('should solve addition equation', (): void => {
    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
    expect(displayValue).toEqual('103');
  });

  it('should solve subtraction', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('93');
  
  });

  it('should solve multiplication', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.FOUR);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('84');
  
  });

  it('should solve division', (): void => {

    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressNumericKey(NumericKeys.ZERO);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.FIVE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('10');
  
  });

  it('should solve multiple operators', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('4');
  
  });

  it('should know order of operations', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('113');
  
  });

});
