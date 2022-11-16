export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (productType) => {
  if (!productType) throw new Error('Termo de busca não informado');
  const result = async () => {
    await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productType}`);
  }
  return result;
};
