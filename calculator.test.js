const calculator = require('./calculator')

describe('Testing calculator class', () => {
  test('Add test', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtract test', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  });

  test('divide test', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  test('multiply test', () => {
    expect(calculator.multiply(1, 5)).toBe(5);
  });
});
