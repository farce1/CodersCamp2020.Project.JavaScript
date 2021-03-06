import { people, starships, vehicles } from '../../constants';

export const gameNavigation = (questionPanel, modeRules) => {
  const navigation = document.createElement('div');
  createHtmlNavigationElement(navigation);
  addClickListenerForNavigationButtons(navigation, questionPanel, modeRules);
  return navigation
};

const gameNavigationTemplateHTML = `
<div data-testid='${people}' class='nav-btn clicked'>People</div>
<div data-testid='${vehicles}' class='nav-btn'>Vehicles</div>
<div data-testid='${starships}' class='nav-btn'>Starships</div>
`;

function onClickHandler(btn, questionPanel, modeRules) {
  const gameModeText = btn.innerText;
  btn.classList.add('clicked');
  questionPanel && questionPanel.changeLabel(gameModeText);
  modeRules && modeRules.changeRulesDescription(gameModeText);
}

const createHtmlNavigationElement = (navigation) => {
  let navHtmlElement;
  navigation.classList.add('navigation');
  navigation.setAttribute('data-testid', 'html-navigation');
  navigation.innerHTML = gameNavigationTemplateHTML;
  navHtmlElement = navigation.innerHTML;
  return navHtmlElement;
};

const addClickListenerForNavigationButtons = (navigation, questionPanel, modeRules) => {
  Array.from(navigation.children).forEach((btn) =>
    btn.addEventListener('click', () => {
      Array.from(navigation.children).forEach((btn) =>
        btn.classList.remove('clicked'),
      );
      onClickHandler(btn, questionPanel, modeRules);
    }),
  );
};
