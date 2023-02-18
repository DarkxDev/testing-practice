class Calculator {
  constructor (first, second) {
    this.first = first;
    this.second = first;
  }

  add (first, second) {
    return first + second;
  }

  substract (first, second) {
    return first - second;
  }

  divide (first, second) {
    return first / second;
  }

  multiply (first, second) {
    return first * second;
  }
}

const calculator = new Calculator;

module.exports = Calculator;