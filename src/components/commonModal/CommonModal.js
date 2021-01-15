// children to komponent który chcemy wyświetlić w modalu
// callback to funkcja która narazie jest ustawiona na sztywno, która po kliknięciu na modal ma za zadanie wyłączyć go.
// DOCELOWO FUNKCJĄ TĄ MA BYĆ "hideElement" zdefiniowana w utils => functions

export const CommonModal = (children, callback)=>{

  const modal = document.createElement('div');
  const app = document.getElementById('app-structure');
  modal.classList.add('modal');
  modal.setAttribute('data-testid', 'html-modal');
  app.classList.add('modalEffect');
  let childrenHtmlTemplate = `<div>${children}</div>`;
  modal.innerHTML = childrenHtmlTemplate;
  modal.addEventListener('click', ()=>{
    callback(modal);
    removeModalEffect(app, 'modalEffect');
  });
  return modal
};

const removeModalEffect = (tag, classToRemove)=>{
  tag.classList.remove(classToRemove)
};