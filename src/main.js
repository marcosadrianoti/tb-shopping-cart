import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const ProductsList = await fetchProductsList('computador');

console.log(ProductsList);
