export const gameModeName = (label, mode) => {
    const element = document.createElement('div');
    element.className = 'gameMode';
    const divTemplateHTML = `<div class='gameModeName'>${mode ? mode.toUpperCase() : ''}${mode ? ': ' : ''}${label || ''}</div>`;
    element.innerHTML = divTemplateHTML;
    return element;
};
