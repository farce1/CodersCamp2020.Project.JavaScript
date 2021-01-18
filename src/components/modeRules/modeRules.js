import rulesIconSrc from '../../../static/assets/ui/rulesIcon.png';

export const modeRules = (rules = '') => {
  const element = document.createElement('div');
  element.className = 'rules';
  const template = `<div class="rules__header" >
    <img class="rules__icon" src="${rulesIconSrc}" alt="rules icon" />
    <h2 >Mode rules</h2>
  </div>
  <p>${rules}</p>`;
  element.innerHTML = template;
  return element;
};
