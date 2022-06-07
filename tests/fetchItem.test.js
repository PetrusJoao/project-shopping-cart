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

  test('se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const mockResult = await fetchItem('MLB1615760527');
    expect(mockResult).toStrictEqual(item);
  });

  test('ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    const mockErrorResult = await fetchItem();
    expect(mockErrorResult).toStrictEqual(new Error('You must provide an url'));
  });
});
