import {
  gameNavigation
} from '../components/gameNavigation/GameNavigation';
import {
  modeRules
} from '../components/modeRules/modeRules';
import {
  TimerText
} from '../components/timerTxt/TimerText';
import {
  renderComponentIntoSelectedTagID
} from '../utils/functions';
import {
  QuestionPanel
} from '../components/questionPanel/QuestionPanel';
import {
  gameOver,
  userAnswers,
  computerAnswers
} from '../components/gameOver/GameOver';
import {
  saveUserResult
} from '../domain/functions/localStorage/saveUserResult'


const questionPanel = new QuestionPanel();

export const App = ({
  options
}) => {
  renderComponentIntoSelectedTagID(TimerText(), 'swquiz-header');
  renderComponentIntoSelectedTagID(gameNavigation(questionPanel), 'swquiz-header');

  renderComponentIntoSelectedTagID(
    gameNavigation(questionPanel),
    'swquiz-header');
  renderComponentIntoSelectedTagID(
    questionPanel.render(),
    'swquiz-app'
  );
  renderComponentIntoSelectedTagID(
    modeRules(),
    'swquiz-app'
  );
  renderComponentIntoSelectedTagID(gameOver(userAnswers, computerAnswers, saveUserResult), 'swquiz-app')
};