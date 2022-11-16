import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('o retorno da função fetchProductsList com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const response = await fetchProductsList('computador');
    expect(response).toEqual(computadorSearch);
  });
  
  it('Chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: \'Termo de busca não informado\'', () => {
    expect(async() => { await fetchProductsList() }).toThrow('Termo de busca não informado');
  });
  // it('...', () => {
  // });
});
