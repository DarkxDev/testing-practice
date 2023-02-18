const Calculator = require('./calculator');
const calculator = new Calculator;

describe('Add tests', () => {
  test('Is the sum correct', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('Is it a number', () => {
    expect(typeof calculator.add(1, 2)).toBe('number');
  });
});

describe('Subtract tests', () => {
  test('Is the result correct', () => {
    expect(calculator.substract(2, 1)).toBe(1);
  });

  test('Is it a number', () => {
    expect(typeof calculator.substract(2, 1)).toBe('number');
  });
});

describe('Multiply tests', () => {
  test('Is the output correct', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test('Is it a number', () => {
    expect(typeof calculator.multiply(3, 2)).toBe('number');
  });
});

describe('Divide tests', () => {
  test('Is the division correct', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('Is it a number', () => {
    expect(typeof calculator.add(10, 2)).toBe('number');
  });
});