import { people, starships, vehicles } from '../../constants';

export const gameNavigation = (questionPanel) => {
  const navigation = document.createElement('div');
  createHtmlNavigationElement(navigation);
  addClickListenerForNavigationButtons(navigation, questionPanel);
  return navigation
};

const gameNavigationTemplateHTML = `
<div data-testid='${people}' class='nav-btn clicked'>People</div>
<div data-testid='${vehicles}' class='nav-btn'>Vehicles</div>
<div data-testid='${starships}' class='nav-btn'>Starships</div>
`;

function onClickHandler(btn, questionPanel) {
  btn.classList.add('clicked');
  questionPanel && questionPanel.changeLabel(btn.innerText);
}

const createHtmlNavigationElement = (navigation) => {
  let navHtmlElement;
  navigation.classList.add('navigation');
  navigation.setAttribute('data-testid', 'html-navigation');
  navigation.innerHTML = gameNavigationTemplateHTML;
  navHtmlElement = navigation.innerHTML;
  return navHtmlElement;
};

const addClickListenerForNavigationButtons = (navigation, questionPanel) => {
  Array.from(navigation.children).forEach((btn) =>
    btn.addEventListener('click', () => {
      Array.from(navigation.children).forEach((btn) =>
        btn.classList.remove('clicked'),
      );
      onClickHandler(btn, questionPanel);
    }),
  );
};
