import { iconButton } from '../components/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';
import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { renderComponentIntoSelectedTag } from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';
import { questions, starships, vehicles } from '../constants';

let currentQuestion = questions.peopleQuestion;

const questionPanel = new QuestionPanel();

const onMenuItemClick = (category) => {
  category = category.toLowerCase();
  if (category === vehicles) {
    currentQuestion = questions.vehiclesQuestion;
  } else if (category === starships) {
    currentQuestion = questions.starshipsQuestion;
  } else {
    currentQuestion = questions.peopleQuestion;
  }
  questionPanel.changeLabel(currentQuestion)
};

export const App = ({ options }) => {
  gameNavigation(onMenuItemClick);
  renderComponentIntoSelectedTag(questionPanel.render(currentQuestion), 'swquiz-app');
};
