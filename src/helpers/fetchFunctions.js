export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (productType) => {
  if (!productType) throw new Error('Termo de busca não informado');
  // addLoadingElem();
  const arrayDatas = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productType}`);
  const data = await arrayDatas.json();
  // removeLoadingElem();
  return data.results;
};
