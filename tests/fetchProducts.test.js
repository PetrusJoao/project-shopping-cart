require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('se a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  
  test('Testa se fetchProducts é uma função', async () => {
    expect(true).toBe(true);
    expect(typeof fetchProducts).toBe('function');
  });
  test('se fetchProducts foi chamada com o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
});
