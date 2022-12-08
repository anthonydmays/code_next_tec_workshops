class StillBetterCalculator {
  private isOn = false;
  private isScientific = false;
  private result = 0;

  doOperation(operation: string, x: number, y: number) {
    if (!this.isOn) {
      return false;
    }

    if (this.isScientific) {
      switch (operation) {
        case "^":
          this.doPow(x, y);
          break;
        default:
          throw new Error("Operation not recognized.");
      }
    }

    switch (operation) {
      case "+":
        this.doAddition(x, y);
        break;
      case "-":
        this.doSubtraction(x, y);
        break;
      case "*":
        this.doMultiplication(x, y);
        break;
      case "/":
        this.doDivision(x, y);
        break;
      default:
        throw new Error("Operation not recognized.");
    }
  }

  public doAddition(x: number, y: number) {
    this.result = x + y;
    this.updateDisplay(`${x} + ${y} = ${this.result}`);
  }

  public doSubtraction(x: number, y: number) {
    this.result = x - y;
    this.updateDisplay(`${x} - ${y} = ${this.result}`);
  }

  public doMultiplication(x: number, y: number) {
    this.result = x * y;
    this.updateDisplay(`${x} * ${y} = ${this.result}`);
  }

  public doDivision(x: number, y: number) {
    this.result = x / y;
    this.updateDisplay(`${x} / ${y} = ${this.result}`);
  }

  public doPow(x: number, y: number) {
    this.result = x ^ y;
    this.updateDisplay(`${x} ^ ${y} = ${this.result}`);
  }

  updateDisplay(text: string) {
    console.log(text);
  }

  powerOn() {
    this.isOn = true;
  }

  powerOff() {
    this.isOn = false;
  }
}
