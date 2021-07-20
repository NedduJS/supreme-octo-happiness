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

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('No existe texto'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Probar una Promesa', () => {
  return reverseString2('Hola').then((string) => expect(string).toBe('aloH'));
});

test('Probar async/await', async () => {
  const string = await reverseString2('Wander');
  expect(string).toBe('rednaW');
});

/* afterEach(() => {
  console.log('Acabó una prueba');
});

afterAll(() => {
  console.log('Pruebas terminadas');
});

beforeEach(() => {
  console.log('Iniciando Prueba');
});

beforeAll(() => {
  console.log('Testing con Jest');
}); */
