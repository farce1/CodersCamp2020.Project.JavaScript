import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import {
  onMenuItemClick,
  renderComponentIntoSelectedTag,
} from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';
import { questions } from '../constants';

let currentQuestion = questions.peopleQuestion;

export const questionPanel = new QuestionPanel();

export const App = ({ options }) => {
  gameNavigation(onMenuItemClick);
  renderComponentIntoSelectedTag(
    questionPanel.render(currentQuestion),
    'swquiz-app',
  );
    // renderComponentIntoSelectedTagID - funkcja do renderowania komponentu w odpowiednim miejscu np.:
  // renderComponentIntoSelectedTagID(gameNavigation(()=>{console.log('tu podaję callback')}), 'swquiz-header');
  // renderComponentIntoSelectedTagID(CommonModal('kotek', hideElement).show(), 'swquiz-app');
};
