import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { TimerText } from '../components/timerTxt/TimerText';
import { renderComponentIntoSelectedTag } from '../utils/functions';
import {
  renderComponentIntoSelectedTagID,
} from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';

const questionPanel = new QuestionPanel();

export const App = ({ options }) => {
  renderComponentIntoSelectedTag(  TimerText(), 'swquiz-header');
  renderComponentIntoSelectedTagID(gameNavigation(questionPanel), 'swquiz-header');
  renderComponentIntoSelectedTagID(
    questionPanel.render(),
    'swquiz-app',
  );
    // renderComponentIntoSelectedTagID - funkcja do renderowania komponentu w odpowiednim miejscu np.:
  // renderComponentIntoSelectedTagID(gameNavigation(()=>{console.log('tu podaję callback')}), 'swquiz-header');
  // renderComponentIntoSelectedTagID(CommonModal('kotek', hideElement).show(), 'swquiz-app');
};
