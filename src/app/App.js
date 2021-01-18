import { gameNavigation } from '../components/gameNavigation/GameNavigation';
import { modeRules } from '../components/modeRules/modeRules';
import { TimerText } from '../components/timerTxt/TimerText';
import { MainMenu } from '../components/MainMenu/MainMenu';
import { insertComponentToDOM, renderComponentIntoSelectedTagID } from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';

const questionPanel = new QuestionPanel();

export const App = ({ options }) => {
  // renderComponentIntoSelectedTagID(  TimerText(), 'swquiz-header');
  // renderComponentIntoSelectedTagID(gameNavigation(questionPanel), 'swquiz-header');
  renderComponentIntoSelectedTagID(
    gameNavigation(questionPanel),
    'swquiz-header');
  renderComponentIntoSelectedTagID(
    questionPanel.render(),
    'swquiz-app'
  );
  
  insertComponentToDOM(
    MainMenu().render(),
    '#app-structure'
  )
};
