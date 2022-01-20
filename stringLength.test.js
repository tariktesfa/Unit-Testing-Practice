const stringLength = require('./stringLength')

test('Properly prints the length of the string', () => {
  expect(
    stringLength('Hello World')
  ).toBe(11)
});
