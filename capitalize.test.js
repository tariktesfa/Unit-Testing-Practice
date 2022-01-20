const capitalize = require('./capitalize');

describe('Test capitalize function', () => {
  test('Test Capitalization', () => {
    expect(
      capitalize('programming')
    ).toBe('Programming');
  });

  test('"microverse" test', () => {
    expect(
      capitalize('microverse')
      ).toBe('Microverse');
  });
});