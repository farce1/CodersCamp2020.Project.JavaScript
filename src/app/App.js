import { iconButton } from '../components/iconButton/iconButton';
import { buttonPlay } from '../components/buttonPlay/buttonPlay.js';
import { gameNavigation } from '../components/gameNavigation/gameNavigation.js';
import { rankMode } from '../components/rankMode/rankMode';

export const App = ({ options }) => {
  gameNavigation();

  const svquiz = document.querySelector('#swquiz-header');
  svquiz.after(iconButton('Rules', 'school_24px'));
  svquiz.after(rankMode([["Andrew", "10/12"], ["Tony", "8/13"], ["Jack", "1/20"]]));


};
