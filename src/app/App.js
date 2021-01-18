import { gameNavigation } from '../components/gameNavigation/GameNavigation';
import { modeRules } from '../components/modeRules/modeRules';
import { TimerText } from '../components/timerTxt/TimerText';
import { renderComponentIntoSelectedTagID } from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';
import { peopleImage } from '../components/PeopleImage/peopleImage';

const questionPanel = new QuestionPanel();

export const App = ({ options }) => {
  renderComponentIntoSelectedTagID(
    peopleImage("../../static/assets/img/modes/people/36.jpg"),
    'swquiz-header');
  renderComponentIntoSelectedTagID(
    gameNavigation(questionPanel),
    'swquiz-interactive');
  renderComponentIntoSelectedTagID(
    questionPanel.render(),
    'swquiz-interactive'
  );
  renderComponentIntoSelectedTagID(
    modeRules(),
    'swquiz-interactive'
  );
  renderComponentIntoSelectedTagID(iconButton('Hall of fame',icon), 'swquiz-interactive')
  renderComponentIntoSelectedTagID(buttonPlay('play the game'), 'swquiz-interactive')
};