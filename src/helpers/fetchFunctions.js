export const fetchProduct = async (idProduct) => {
  if (!idProduct) throw new Error('ID não informado');
  const arrayDatas = await fetch(`https://api.mercadolibre.com/items/${idProduct}`);
  const data = await arrayDatas.json();
  return data;
};

export const fetchProductsList = async (productType) => {
  if (!productType) throw new Error('Termo de busca não informado');
  const arrayDatas = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productType}`);
  const data = await arrayDatas.json();
  return data.results;
};
