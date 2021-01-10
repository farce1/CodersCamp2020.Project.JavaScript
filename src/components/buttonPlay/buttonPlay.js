export const buttonPlay = (label, onClick) => {
  const buttonTemplateHTML = `<button class='gameButton gameButton_play'>${label}</button>`;
  if (onClick) {
    buttonPlay.addEventListener('click', onClick);
  }
  document.getElementById('swquiz-app').innerHTML = buttonTemplateHTML;
};