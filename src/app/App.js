import { gameNavigation } from '../components/gameNavigation/GameNavigation';
import { modeRules } from '../components/modeRules/modeRules';
import { TimerText } from '../components/timerTxt/TimerText';
import { renderComponentIntoSelectedTagID } from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';
import { peopleImage } from '../components/PeopleImage/peopleImage';
import { iconButton } from '../components/iconButton/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay';

const questionPanel = new QuestionPanel();

export const App = ({ options }) => {
  renderComponentIntoSelectedTagID(
    peopleImage("../../static/assets/img/modes/people/36.jpg"),
    'swquiz-header');
  renderComponentIntoSelectedTagID(
    gameNavigation(questionPanel),
    'swquiz-game-intro');
  renderComponentIntoSelectedTagID(
    questionPanel.render(),
    'swquiz-game-intro'
  );
  renderComponentIntoSelectedTagID(
    modeRules(),
    'swquiz-game-intro'
  );
  renderComponentIntoSelectedTagID(iconButton('Hall of fame', ""), 'swquiz-game-btns');
  renderComponentIntoSelectedTagID(buttonPlay('play the game'), 'swquiz-game-btns')
};