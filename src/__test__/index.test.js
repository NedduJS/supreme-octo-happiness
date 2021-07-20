const randomStrings = require('../index');

describe('Probar funcionalidades de randomStrins', () => {
  test('Probar la funcionalidad', () => {
    expect(typeof randomStrings()).toBe('string');
  });

  test('Comprobar que no existe una ciudad', () => {
    expect(randomStrings()).not.toContain('Paris');
  });
});
