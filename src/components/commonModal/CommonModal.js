// children to komponent który chcemy wyświetlić w modalu
// callback to funkcja która narazie jest ustawiona na sztywno, która po kliknięciu na modal ma za zadanie wyłączyć go.
// DOCELOWO FUNKCJĄ TĄ MA BYĆ "hideElement" zdefiniowana w utils => functions

export const CommonModal = (children, callback) => {
  const component = document.createElement('div');
  const app = document.getElementById('app-structure');
  component.classList.add('modal');
  component.setAttribute('data-testid', 'html-modal');
  app.classList.add('modalEffect');
  const childrenHtmlTemplate = `<div>${children}</div>`;
  component.innerHTML = childrenHtmlTemplate;
  component.addEventListener('click', () => {
    callback(modal);
  });

  const modal = {
    show() {
      return component;
    },
    hide() {
      component.style.display = 'none';
      removeModalEffect(app, 'modalEffect');
      return component;
    },
  };

  return modal;
};

const removeModalEffect = (tag, classToRemove) => {
  tag.classList.remove(classToRemove);
};
