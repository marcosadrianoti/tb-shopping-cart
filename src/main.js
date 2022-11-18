import { searchCep } from './helpers/cepFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { addMsgElem, removeMsgElem } from './helpers/msgsFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

try {
  addMsgElem('carregando...');
  const productsList = await fetchProductsList('computador');

  productsList.forEach((product) => {
    const productElement = createProductElement({ ...product });
    document.querySelector('.products').appendChild(productElement);
  });
  removeMsgElem();

  const savedCartIDs = (getSavedCartIDs());
  const savedCartPromises = savedCartIDs.map(async (id) => fetchProduct(id));
  Promise.all(savedCartPromises)
    .then((arrayProducts) => arrayProducts.forEach((product) => {
      document.querySelector('.cart__products')
        .appendChild(createCartProductElement({ ...product }));
    }));
  const subTotal = document.querySelector('.total-price');
  const total = parseFloat(localStorage.getItem('total')) || 0;
  subTotal.innerText = `${total.toFixed(2)}`;
} catch (error) {
  removeMsgElem();
  addMsgElem('Algum erro ocorreu, recarregue a página e tente novamente');
}
