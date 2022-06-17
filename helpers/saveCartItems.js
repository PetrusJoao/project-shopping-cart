const saveCartItems = (productList) => {
  // seu código aqui
  // console.log(productList);
  localStorage.setItem('cartItems', productList);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
