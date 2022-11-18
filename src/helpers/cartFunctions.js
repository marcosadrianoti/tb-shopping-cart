/**
 * Função que retorna todos os itens do carrinho salvos no localStorage.
 * @returns {Array} Itens de ids salvos do carrinho ou array vazio.
 */
export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};

/**
 * Função que adiciona um product ao carrinho.
 * @param {string} id - ID do product a ser adicionado.
 */
export const saveCartID = (id, price) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));

  const subTotal = document.querySelector('.total-price');
  let total = parseFloat(localStorage.getItem('total')) || 0;
  total += price;
  localStorage.setItem('total', total.toFixed(2));
  subTotal.innerText = `${total.toFixed(2)}`;
};

/**
 * Função que remove um product do carrinho.
 * @param {string} id - ID do product a ser removido.
 */
export const removeCartID = (id, price) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = cartProducts.filter((product) => product !== id);
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));

  const subTotal = document.querySelector('.total-price');
  let total = localStorage.getItem('total') || 0;
  total -= price;
  localStorage.setItem('total', total);
  subTotal.innerText = `${total.toFixed(2)}`;
};
