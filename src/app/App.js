import { iconButton } from '../components/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';
import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { renderComponentIntoSelectedTag } from '../utils/functions';
import { QuestionPanel } from '../components/questionPanel/QuestionPanel';

export const App = ({ options }) => {
  // gameNavigation();
  renderComponentIntoSelectedTag(QuestionPanel('aaa'), 'swquiz-header');
};
