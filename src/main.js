import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

export const addLoadingElem = () => {
  const loadingElem = document.createElement('span');
  loadingElem.classList.add('loading');
  loadingElem.innerHTML = '<strong>carregando...</strong>';
  document.querySelector('.products').appendChild(loadingElem);
};

export const removeLoadingElem = () => {
  const loadingElem = document.querySelector('.loading');
  loadingElem.remove();
};

addLoadingElem();
const productsList = await fetchProductsList('computador');

productsList.forEach((product) => {
  const productElement = createProductElement({ ...product });
  document.querySelector('.products').appendChild(productElement);
});
removeLoadingElem();
