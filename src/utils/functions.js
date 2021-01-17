import { questions, starships, vehicles } from '../constants';

export const renderComponentIntoSelectedTag = (component, targetID) => {
  if (!component || !targetID) {
    return;
  }
  document.getElementById(`${targetID}`).appendChild(component);
};

export const onMenuItemClick = (category, questionPanel) => {
  let currentQuestion = questions.peopleQuestion;

  category = category.toLowerCase();
  if (category === vehicles) {
    currentQuestion = questions.vehiclesQuestion;
  } else if (category === starships) {
    currentQuestion = questions.starshipsQuestion;
  } else {
    currentQuestion = questions.peopleQuestion;
  }
  questionPanel.changeLabel(currentQuestion);
};
