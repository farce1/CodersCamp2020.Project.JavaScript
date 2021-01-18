import { iconButton } from '../components/iconButton/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';

import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { rankMode } from '../components/rankMode/rankMode';

import { gameNavigation } from '../components/gameNavigation/GameNavigation.js';
import { CommonModal } from '../components/commonModal/CommonModal';
import { hideElement, renderComponentIntoSelectedTagID } from '../utils/functions';


export const App = ({ options }) => {
  // renderComponentIntoSelectedTagID - funkcja do renderowania komponentu w odpowiednim miejscu np.:
  // renderComponentIntoSelectedTagID(gameNavigation(()=>{console.log('tu podaję callback')}), 'swquiz-header');
  // renderComponentIntoSelectedTagID(CommonModal('kotek', hideElement).show(), 'swquiz-app');
  gameNavigation();

  const svquiz = document.querySelector('#swquiz-header');
  svquiz.after(iconButton('Rules', 'school_24px'));
  svquiz.after(rankMode([["Andrew", "10/12"], ["Tony", "8/13"], ["Jack", "1/20"]]));


};
