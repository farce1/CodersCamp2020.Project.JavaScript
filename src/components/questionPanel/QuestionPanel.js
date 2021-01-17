
export const QuestionPanel = (label)=>{
  const qPanelComponent = document.createElement('div');
  qPanelComponent.classList.add('q-panel');
  qPanelComponent.setAttribute('data-testid', 'html-q-panel');
  qPanelComponent.innerHTML = label;
  return qPanelComponent;
};