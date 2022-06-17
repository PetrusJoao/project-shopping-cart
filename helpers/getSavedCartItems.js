const getSavedCartItems = () => {
  // seu código aqui
    const itemStorage = localStorage.getItem('cartItems');
    // console.log(itemStorage);
    return itemStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
