import { questions, starships, vehicles } from '../constants';

export const renderComponentIntoSelectedTag = (component, targetID) => {
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
