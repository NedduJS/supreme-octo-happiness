const text = 'Hola mundo';
const fruits = ['manzana', 'melon', 'palta'];

test('Debe contener un texto', () => {
  expect(text).toMatch(/mundo/);
});

test('¿Tenemos palta?', () => {
  expect(fruits).toContain('palta');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Es verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un Callback', () => {
  reverseString('Invent', (str) => {
    expect(str).toBe('tnevnI');
  });
});
