interface OperationResult {
  value: number;
  formattedResult: string;
}

interface MathOperation {
  matchesOperator(operator: string): boolean;
  doOperation(x: number, y: number): OperationResult;
}

class AddOperation implements MathOperation {
  static OPERATOR = '+';

  matchesOperator(operator: string) {
    return operator === AddOperation.OPERATOR;
  }

  doOperation(x: number, y: number) {
    return {
      value: x + y,
      formattedResult: `x + y`,
    }
  }
}

class PowOperation implements MathOperation {
  static OPERATOR = '+';

  matchesOperator(operator: string) {
    return operator === AddOperation.OPERATOR;
  }

  doOperation(x: number, y: number) {
    return {
      value: x + y,
      formattedResult: `x + y`,
    }
  }
}


class BasicCalculator {
  private isOn = false;
  private result = {value: 0, formattedResult: ''};
  protected supportedOperations = new Array<MathOperation>();

  constructor() {
    this.supportedOperations = [
      new AddOperation(),
      // new SubtractionOperation(),
      // new MultiplicationOperation(),
      // new DivisionOperation(),
    ];
  }

  doOperation(operator: string, x: number, y: number) {
    if (!this.isOn) {
      return false;
    }

    const operation = this.findOperationOrDie(operator);
    this.result = operation.doOperation(x, y);
    this.updateDisplay();
  }

  findOperationOrDie(operator: string): MathOperation {
    const operation = this.supportedOperations.find(o => o.matchesOperator(operator));
    if (!operation) {
      throw new Error('Operation not recognized');
    }
    return operation;
  }
  
  updateDisplay() {
    console.log(this.result.value);
  }
  
  powerOn() {
    this.isOn = true;
  }
  
  powerOff() {
    this.isOn = false;
  }
}

class ScientificCalculator extends BasicCalculator {
  constructor() {
    super();
    this.supportedOperations.push(...[
      new PowOperation(),
    ])
  }
}
