export class QuestionPanel {
  render(label) {
    this.qPanelComponent = document.createElement('div');
    this.qPanelComponent.classList.add('q-panel');
    this.qPanelComponent.setAttribute('data-testid', 'html-q-panel');
    this.qPanelComponent.innerHTML = `MODE: ${label}`;
    return this.qPanelComponent;
  }

  changeLabel(label) {
    this.qPanelComponent.innerHTML = `MODE: ${label}`;
  }
}
