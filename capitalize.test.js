const capitalize = require('./capitalize');

describe('test capitalize function', () => {
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