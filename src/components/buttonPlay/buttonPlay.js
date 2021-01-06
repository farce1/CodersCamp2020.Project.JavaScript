export const buttonPlay = (buttonTitle) => {
    const buttonTemplateHTML = `<button class='gameButton gameButton_play'>${buttonTitle}</button>`;
    document.body.innerHTML = buttonTemplateHTML;
};