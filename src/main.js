import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
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
} catch (error) {
  removeMsgElem();
  addMsgElem('Algum erro ocorreu, recarregue a página e tente novamente');
}
