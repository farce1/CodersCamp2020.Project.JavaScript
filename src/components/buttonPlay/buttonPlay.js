export const buttonPlay = (label = ' ', onClick) => {
  const component = document.createElement('button');
  component.className = 'gameButton gameButton_play';
  component.innerText = label;
  component.onClick = onClick;

  if (onClick) {
    component.addEventListener('click', onClick);
  }

  const btn = {
    render() {
        return component;
    },
    
    hide() {
        component.style.display = 'none';
    }
}
return btn;
};