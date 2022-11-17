import './mocks/fetchSimulator';
import { fetchProductsList, fetchProduct } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('O retorno da função fetchProductsList com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProductsList('computador')).resolves.toEqual(computadorSearch);
  });

  it('Chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: \'Termo de busca não informado\'', () => {
    expect(fetchProductsList()).rejects.toEqual(new Error('Termo de busca não informado'));
  });
});

describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('O retorno da função fetchProduct com o argumento \'MLB1405519561\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProduct('MLB1405519561')).resolves.toEqual(produto);
  });

  it('Chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: \'ID não informado\'', () => {
    expect(fetchProduct()).rejects.toEqual(new Error('ID não informado'));
  });
});
