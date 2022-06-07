require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('se a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  
  test('Testa se fetchProducts é uma função', async () => {
    // expect(true).toBe(true);
    expect(typeof fetchProducts).toBe('function');
  });

  test('se fetchProducts foi chamada com o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('se ao chamar fetchProducts com o argumento "computador" utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('se ao chamar fetchProducts com o argumento "computador" recebe uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const mockResult = await fetchProducts('computador');
    expect(mockResult).toStrictEqual(computadorSearch);
  });

  test('ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    const mockErrorResult = await fetchProducts();
    expect(mockErrorResult).toStrictEqual(new Error('You must provide an url'));
  });
});
