import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
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
  const product = await fetchProduct('MLB1405519561');
  console.log(product);
} catch (error) {
  removeMsgElem();
  addMsgElem('Algum erro ocorreu, recarregue a página e tente novamente');
}
