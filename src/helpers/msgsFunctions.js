export const addMsgElem = (msg) => {
  const msgElem = document.createElement('span');
  msgElem.classList.add('loading', 'error');
  msgElem.innerHTML = `<strong>${msg}</strong>`;
  document.querySelector('.products').appendChild(msgElem);
};

export const removeMsgElem = () => {
  const msgElem = document.querySelector('.loading');
  msgElem.remove();
};
