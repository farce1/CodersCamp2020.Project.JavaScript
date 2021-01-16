import { iconButton } from '../components/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';
import { gameNavigation } from '../components/gameNavigation/GameNavigation.js';
import { CommonModal } from '../components/commonModal/CommonModal';
import { hideElement, renderComponentIntoSelectedTagID } from '../utils/functions';

export const App = ({ options }) => {
  // renderComponentIntoSelectedTagID - funkcja do renderowania komponentu w odpowiednim miejscu np.:
  // renderComponentIntoSelectedTagID(gameNavigation(()=>{console.log('tu podaję callback')}), 'swquiz-header');
  renderComponentIntoSelectedTagID(CommonModal('kotek', hideElement).show(), 'swquiz-app');
};
