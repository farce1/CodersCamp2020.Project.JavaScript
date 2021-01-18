export const renderComponentIntoSelectedTagID = (component, targetID) => {
  if (!component || !targetID) {
    return;
  }
  document.getElementById(`${targetID}`).appendChild(component);
};

export const hideElement = (modal) =>modal ? modal.hide(): null;
