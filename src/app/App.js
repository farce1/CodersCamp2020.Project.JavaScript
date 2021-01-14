import { iconButton } from '../components/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';
import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { CommonModal } from '../components/commonModal/CommonModal';
import { hideElement, renderComponentIntoSelectedTagID } from '../utils/functions';

export const App = ({ options }) => {
  renderComponentIntoSelectedTagID(gameNavigation(()=>{console.log('tu podaję callback')}), 'swquiz-header');
  renderComponentIntoSelectedTagID(CommonModal('Kotek', hideElement), 'swquiz-app');
};
