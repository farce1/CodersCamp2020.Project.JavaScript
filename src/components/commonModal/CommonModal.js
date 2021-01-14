import { renderComponentIntoSelectedTagID } from '../../utils/functions';

export const CommonModal = (children, callback)=>{

  const modal = document.createElement('div');
  const app = document.getElementById('app-structure');
  modal.classList.add('modal');
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