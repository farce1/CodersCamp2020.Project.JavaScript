export const renderComponentIntoSelectedTagID = (component, targetID) => {
  if (!component || !targetID) {
    return;
  }
  document.getElementById(`${targetID}`).appendChild(component);
};

export const hideElement = (component)=>{
  if(!component){
    return;
  }
  component.classList.add('hidden');
};
