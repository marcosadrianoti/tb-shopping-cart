export const getAddress = async (cep) => {
  const msg = 'CEP não encontrado';
  let address = '';
  const promiseAweSomeApi = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const promiseBrasilApi = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const promisesCep = [promiseAweSomeApi, promiseBrasilApi];
  Promise.any(promisesCep).then(async (value) => {
    const data = await value.json();
    if (Object.keys(data).includes('neighborhood')) {
      address = `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
    } else {
      address = `${data.address} - ${data.district} - ${data.city} - ${data.state}`;
    }
    document.querySelector('.cart__address').innerHTML = address;
  }).catch(() => {
    document.querySelector('.cart__address').innerHTML = msg;
  });
};

export const searchCep = () => {
  const cep = document.querySelector('.cep-input').value;
  getAddress(cep);
};
