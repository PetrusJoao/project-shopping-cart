const getSection = document.querySelector('.items');
// const createList = document.createElement('ul');
// createList.className = 'list';
// getSection.appendChild(createList);

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
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const productsR = async () => {
  // try {
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
  // } catch (error) {
  //   console.log(`${error}`);
  // }
};

window.onload = () => {
  productsR();
};