class Calculator {
  private isOn = false;
  private isScientific = false;
  private result = 0;

  doOperation(operation: string, x: number, y: number) {
    if (this.isOn) {
        if (!this.isScientific) {
            switch (operation) {
              case '+':
                this.result = x + y;
                this.updateDisplay(`${x} + ${y} = ${this.result}`);
                break;
              case '-':
                this.result = x - y;
                this.updateDisplay(`${x} - ${y} = ${this.result}`);
                break;
              case '*':
                this.result = x * y;
                this.updateDisplay(`${x} * ${y} = ${this.result}`);
                break;
              case '/':
                this.result = x / y;
                this.updateDisplay(`${x} / ${y} = ${this.result}`);
                break;
              default:
                throw new Error('Operation not recognized.');
            }
        } else {
            switch (operation) {
              case '+':
                this.result = x + y;
                this.updateDisplay(`${x} + ${y} = ${this.result}`);
                break;
              case '-':
                this.result = x - y;
                this.updateDisplay(`${x} - ${y} = ${this.result}`);
                break;
              case '*':
                this.result = x * y;
                this.updateDisplay(`${x} * ${y} = ${this.result}`);
                break;
              case '/':
                this.result = x / y;
                this.updateDisplay(`${x} / ${y} = ${this.result}`);
                break;
              case '^':
                this.result = x ^ y;
                this.updateDisplay(`${x} ^ ${y} = ${this.result}`);
              default:
                throw new Error('Operation not recognized.');
            }
        }  
    }
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
