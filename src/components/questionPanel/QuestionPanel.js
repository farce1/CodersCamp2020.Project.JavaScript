import { people, questions } from "../../constants";

export class QuestionPanel {
  constructor() {
    this.qPanelComponent = document.createElement('div');
  }

  render(label = questions[people]) {
    this.qPanelComponent.classList.add('q-panel');
    this.qPanelComponent.setAttribute('data-testid', 'html-q-panel');
    this.qPanelComponent.innerHTML = `MODE: ${label}`;
    return this.qPanelComponent;
  }

  changeLabel(gameMode) {
    const newGameModeQuestion = questions[gameMode];
    this.qPanelComponent.innerHTML = `MODE: ${newGameModeQuestion}`;
  }
}
