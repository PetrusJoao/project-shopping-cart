const getSection = document.querySelector('.items');
const getCartItemList = document.querySelector('.cart__items');

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
  // console.log(section);

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  console.log(event.target);
  const itemSelected = event.target.parentNode;
  const itemToRemove = event.target;
  itemSelected.removeChild(itemToRemove);
};

const clickAndRemove = () => {
  const getClickRemove = document.querySelectorAll('.cart__items');
  // console.log(getClickRemove);
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

const createProductCartItem = async (param) => {
  const itemToAddCart = await fetchItem(param);
  const itemElement = createCartItemElement(
    {
      sku: itemToAddCart.id,
      name: itemToAddCart.title,
      salePrice: itemToAddCart.price,
    },
  );
  // console.log(itemElement);
  getCartItemList.appendChild(itemElement);
};

const getIdFromClick = (event) => {
  // console.log(event.target);
  const itemSelected = event.target.parentNode;
  const itemSelectedId = getSkuFromProductItem(itemSelected);
  // console.log(itemSelectedId);
  createProductCartItem(itemSelectedId);
};

const clickAndAdd = () => {
  const getClickAdd = document.querySelectorAll('.item__add');
  // console.log(getClick);
  getClickAdd.forEach((element) => {
    element.addEventListener('click', getIdFromClick);
  });
};

const createElementProduct = async () => {
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
  clickAndAdd();
};

const productsR = () => {
  createElementProduct();
  // createProductCartItem();
};

window.onload = () => {
  productsR();
};