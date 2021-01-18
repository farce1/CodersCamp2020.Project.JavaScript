const defaultFunction = () => 'default';

export const iconButton = (text = 'text', icon, onClick = defaultFunction()) => {

    const _text = text.toUpperCase();

    const component = document.createElement('button');

    component.className = 'iconButton';
    component.innerText = _text;
    component.onclick = onClick;

    if (icon) {
    const spanElement = document.createElement('span');
    spanElement.className = 'button__icon';
    spanElement.style.backgroundImage = `url("../static/assets/ui/icon-${icon}.png")`;
    component.appendChild(spanElement);
    }

    return component;
};