import { people, questions } from "../../constants";

export class QuestionPanel {
  constructor() {
    this.qPanelComponent = document.createElement('div');
    this.currentGameMode = questions[people];
  }

  render() {
    this.qPanelComponent.classList.add('q-panel');
    this.qPanelComponent.setAttribute('data-testid', 'html-q-panel');
    this.qPanelComponent.innerHTML = `MODE: ${this.currentGameMode}`;
    return this.qPanelComponent;
  }

  hide() {
    this.qPanelComponent.style.display = 'none';
  }

  changeLabel(gameMode) {
    const newGameModeQuestion = questions[gameMode];
    this.currentGameMode = newGameModeQuestion;
    this.qPanelComponent.innerHTML = `MODE: ${newGameModeQuestion}`;
  }
}
