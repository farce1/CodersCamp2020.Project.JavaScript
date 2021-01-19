export const renderComponentIntoSelectedTagID = (component, targetID) => {
  if (!component || !targetID) {
    return;
  }
  document.getElementById(`${targetID}`).appendChild(component);
  return component;
};

export const renderComponent = (component, parent) => {
  const parentContainer = parent instanceof String ? document.querySelector(parent) : parent;
  parent.parentNode.replaceChild(component, parent);
  return component;
}

export const hideElement = (modal) =>modal ? modal.hide(): null;

export const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
