const stringLength = require('./stringLength')
describe('Testing for length of String', () => {
  test('Length of "Hello"', () => {
    expect(
      stringLength('Hello')
    ).toBe(5)
  });
 test('Empty String Length', () => {
   expect(
     stringLength('')
   ).toThrow('The string should be at least 1 character long and not more than 10')
 });
 
 test('"Hello World" String Length', () => {
  expect(
    stringLength('Hello World')
  ).toThrow('The string should be at least 1 character long and not more than 10')
});
});

