import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { addMsgElem, removeMsgElem } from './helpers/msgsFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

addMsgElem('carregando...');
const productsList = await fetchProductsList('computador');

productsList.forEach((product) => {
  const productElement = createProductElement({ ...product });
  document.querySelector('.products').appendChild(productElement);
});
removeMsgElem();
