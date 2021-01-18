import {
  gameNavigation
} from '../components/gameNavigation/gameNavigation';
import {
  modeRules
} from '../components/modeRules/modeRules';
import {
  renderComponentIntoSelectedTagID,
} from '../utils/functions';
import {
  QuestionPanel
} from '../components/questionPanel/QuestionPanel';

const questionPanel = new QuestionPanel();

export const App = ({
  options
}) => {
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
  // renderComponentIntoSelectedTagID - funkcja do renderowania komponentu w odpowiednim miejscu np.:
  // renderComponentIntoSelectedTagID(gameNavigation(()=>{console.log('tu podaję callback')}), 'swquiz-header');
  // renderComponentIntoSelectedTagID(CommonModal('kotek', hideElement).show(), 'swquiz-app');
};