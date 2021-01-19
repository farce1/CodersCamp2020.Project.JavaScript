const defaultFunction = () => {};

export const iconButton = (text = 'text', icon, onClick = defaultFunction) => {
  const component = document.createElement('button');

  component.className = 'iconButton';
  component.onclick = onClick;

  if (icon) {
    const spanElement = document.createElement('span');
    spanElement.className = 'button__icon';
    spanElement.style.backgroundImage = `url("../static/assets/ui/icons/icon-${icon}_24px.png")`;
    component.appendChild(spanElement);
  }
  component.innerHTML += text;

  const btn = {
    render() {
      return component;
    },

    hide() {
      component.style.display = 'none';
    },
  };
  return btn;
};
