import { people, starships, vehicles } from '../../constants';

export const gameNavigationTemplateHTML = `
<div data-testid='${people}' class='nav-btn clicked'>People</div>
<div data-testid='${vehicles}' class='nav-btn'>Vehicles</div>
<div data-testid='${starships}' class='nav-btn'>Starships</div>
`;

export function onClickHandler(btn, callback) {
  btn.classList.add('clicked');
  callback && callback();
}

export const gameNavigation = (callback) => {
  const navigation = document.createElement('div');

  navigation.classList.add('navigation');
  navigation.setAttribute("data-testid", "html-navigation");
  navigation.innerHTML = gameNavigationTemplateHTML;
  document.getElementById('swquiz-app').appendChild(navigation);

  Array.from(navigation.children).forEach((btn) =>
    btn.addEventListener('click', ()=> {
      Array.from(navigation.children).forEach(btn=>btn.classList.remove('clicked'));
      onClickHandler(btn, callback)
    }),
  );
};
