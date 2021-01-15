import { iconButton } from '../components/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';
import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { TimerText } from '../components/timerTxt/TimerText';
import { renderComponentIntoSelectedTag } from '../utils/functions';

export const App = ({ options }) => {
  renderComponentIntoSelectedTag(  TimerText(), 'swquiz-header');
};
