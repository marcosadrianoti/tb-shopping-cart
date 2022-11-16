import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = await fetchProductsList('computador');

productsList.forEach((product) => {
  const productElement = createProductElement({ ...product });
  document.querySelector('.products').appendChild(productElement);
});
