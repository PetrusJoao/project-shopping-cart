const getSection = document.querySelector('.items');
const getCartItemList = document.querySelector('.cart__items');
const getEmptyButton = document.querySelector('.empty-cart');
const getContainerCart = document.querySelector('.container-cartTitle');
const createTotalPrice = document.createElement('p');
createTotalPrice.className = 'total-price';
getContainerCart.appendChild(createTotalPrice);

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const totalPrice = () => {
  const getLi = document.querySelectorAll('li.cart__item');
  const arrayLi = Array.from(getLi);
  const initialValue = 0;

  const total = arrayLi.reduce(
    (accumulator, currentValue) => accumulator + parseFloat(currentValue
      .innerHTML.slice(currentValue.innerHTML.indexOf('$') + 1)),
    initialValue,
  );
  
  createTotalPrice.innerHTML = total;
};

const cartItemClickListener = (event) => {
  const itemSelected = event.target.parentNode;
  const itemToRemove = event.target;
  itemSelected.removeChild(itemToRemove);
  totalPrice();
};

const clickAndEmpty = () => {
  while (getCartItemList.firstChild) {
    getCartItemList.removeChild(getCartItemList.firstChild);
  }
  createTotalPrice.innerHTML = ' ';
};

getEmptyButton.addEventListener('click', clickAndEmpty);

const clickAndRemove = () => {
  const getClickRemove = document.querySelectorAll('.cart__items');
  getClickRemove.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);

  return li;
};

const loadingPage = () => {
  const loadPage = document.createElement('span');
  getSection.appendChild(loadPage);
  loadPage.className = 'loading';
  loadPage.innerHTML = 'carregando...';
};

const deleteLoadingPage = () => document.querySelector('.loading').remove();

const createProductCartItem = async (param) => {
  const itemToAddCart = await fetchItem(param);
  const itemElement = createCartItemElement(
    {
      sku: itemToAddCart.id,
      name: itemToAddCart.title,
      salePrice: itemToAddCart.price,
    },
  );
  getCartItemList.appendChild(itemElement);
  saveCartItems(getCartItemList.innerHTML);
  totalPrice();
};

const getIdFromClick = (event) => {
  const itemSelected = event.target.parentNode;
  const itemSelectedId = getSkuFromProductItem(itemSelected);
  createProductCartItem(itemSelectedId);
};

const clickAndAdd = () => {
  const getClickAdd = document.querySelectorAll('.item__add');
  getClickAdd.forEach((element) => {
    element.addEventListener('click', getIdFromClick);
  });
};

const createElementProduct = async () => {
  loadingPage();
  const products = await fetchProducts('computador');
  products.results.forEach((element) => {
    const productElement = createProductItemElement(
      {
        sku: element.id,
        name: element.title,
        image: element.thumbnail,
      },
    );
    getSection.appendChild(productElement);
  });
  deleteLoadingPage();
  clickAndAdd();
};

// getSavedCart baseado no código e feito com a ajuda da amiga Camila Falaschi
const getSavedCart = () => {
  if (getSavedCartItems()) {
    getCartItemList.innerHTML = getSavedCartItems();
    getSavedCartItems();
    clickAndRemove();
    totalPrice();
  }
};

const productsR = () => {
  // loadingPage();
  createElementProduct();
  // deleteLoadingPage();
  getSavedCart();
};

window.onload = () => {
  productsR();
};
