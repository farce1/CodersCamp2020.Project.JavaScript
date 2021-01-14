import { renderComponentIntoSelectedTagID } from '../../utils/functions';

export const CommonModal = (children, callback)=>{
  const modal = document.createElement('div');
  modal.classList.add('modal');
  let childrenHtmlTemplate = `<div>${children}</div>`;
  modal.innerHTML = childrenHtmlTemplate;
  modal.addEventListener('click', ()=>callback(modal));
  return modal
};
