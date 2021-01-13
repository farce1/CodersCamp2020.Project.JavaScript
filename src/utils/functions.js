export const renderComponentIntoSelectedTag = (component, targetID) => {
  if (!component || !targetID) {
    return;
  }
  document.getElementById(`${targetID}`).appendChild(component);
};
