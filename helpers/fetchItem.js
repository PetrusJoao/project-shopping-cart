const fetchItem = async (param) => {
  // seu código aqui
  const endPoint = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(endPoint);
  const dataInfo = await response.json();
  // console.log(dataInfo);
  return dataInfo;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
