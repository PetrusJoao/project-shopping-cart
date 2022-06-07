require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Testa se fetchItem é uma função', async () => {
    // expect(true).toBe(true);
    expect(typeof fetchItem).toBe('function');
  });
  test('se fetchItem foi chamada com o argumento "MLB1615760527"', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
});
