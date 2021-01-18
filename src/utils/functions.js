import { questions, starships, vehicles } from '../constants';

export const renderComponentIntoSelectedTagID = (component, targetID) => {
  if (!component || !targetID) {
    return;
  }
  document.getElementById(`${targetID}`).appendChild(component);
};

export const onMenuItemClick = (category, questionPanel) => {
  const currentQuestion = questions.peopleQuestion;

  switch(category) {
    case vehicles:
      return currentQuestion = questions.vehiclesQuestion;
      break;
    case starships:
      return currentQuestion = questions.starshipsQuestion;
      break;
    default:
      return currentQuestion = questions.peopleQuestion;
  }
  
  questionPanel.changeLabel(currentQuestion);
};

export const hideElement = (modal) =>modal ? modal.hide(): null;
