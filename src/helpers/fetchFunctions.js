export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async(productType) => {
    const arrayDatas = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productType}`);
    const data = await arrayDatas.json();
    return data.results;
};
