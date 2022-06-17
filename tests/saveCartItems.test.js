const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  test('se ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', () => {
    const itemSetOnLocalStorage = '<ol><li>Item</li></ol>';
    saveCartItems(itemSetOnLocalStorage);
    expect(localStorage.setItem).toBeCalled();
  });

  test('se ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    const itemSetOnLocalStorage = '<ol><li>Item</li></ol>';
    saveCartItems(itemSetOnLocalStorage);
    expect(localStorage.setItem).toBeCalledWith('cartItems', itemSetOnLocalStorage);
  });
});
