const fetchProducts = async (param) => {
  // seu código aqui
  try {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const response = await fetch(endPoint);
    const dataInfo = await response.json();
    // console.log(dataInfo.results);
    return dataInfo;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
