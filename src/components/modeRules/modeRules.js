import rulesIconSrc from '../../../static/assets/ui/rulesIcon.png';
import { gameRules, people } from '../../constants'
import { insertAfter } from '../../utils/functions';
export class ModeRules {
  constructor() {
    this.currentRuleDescripton = gameRules[people];
    this.modeRulesPanel = document.createElement('div');
    this.modeRulesPanelWrapper = document.createElement('div');
    this.panelIcon = document.createElement('img');
    this.panelHeader = document.createElement('h2');
    this.modeRulesDescription = document.createElement('p');
  }

  decorateElements() {
    this.modeRulesPanel.classList.add('rules__header');
    this.modeRulesPanelWrapper.classList.add('rules');
    this.modeRulesPanelWrapper.setAttribute('data-testid', 'rules-panel');
    this.panelIcon.className = 'rules__icon';
    this.panelIcon.src = rulesIconSrc;
    this.panelHeader.innerText = 'Mode rules';
    this.modeRulesDescription.innerText = this.currentRuleDescripton;
  }


  hide() {
    this.modeRulesPanelWrapper.style.display = 'none';
  }

  render() {
    this.decorateElements()
    this.modeRulesPanel.appendChild(this.panelIcon)
    this.modeRulesPanel.appendChild(this.panelHeader)
    this.modeRulesPanelWrapper.appendChild(this.modeRulesPanel)
    insertAfter(this.modeRulesPanel, this.modeRulesDescription)
    return this.modeRulesPanelWrapper;
  }

  changeRulesDescription(gameMode) {
    const newGameModeQuestion = gameRules[gameMode];
    this.currentRuleDescripton = newGameModeQuestion;
    this.modeRulesDescription.innerText = `${newGameModeQuestion}`;
  }
}
