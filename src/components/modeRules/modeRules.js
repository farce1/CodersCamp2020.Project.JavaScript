import './modeRules.scss';
export const modeRules = (rules = '') => {
  const element = document.createElement('div');
  element.className = 'rules';
  const header = document.createElement('h2');
  header.textContent = 'Mode rules';
  element.appendChild(header);
  const paragraph = document.createElement('p');
  paragraph.innerText = rules;
  element.appendChild(paragraph);
  return element;
};
