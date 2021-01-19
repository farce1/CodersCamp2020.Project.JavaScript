import { renderComponentIntoSelectedTagID } from "../../utils/functions";
import { buttonPlay } from "../buttonPlay/buttonPlay";
import { gameNavigation } from "../gameNavigation/GameNavigation";
import { iconButton } from "../iconButton/iconButton";
import { ModeRules } from "../modeRules/modeRules";
import { peopleImage } from "../PeopleImage/peopleImage";
import { QuestionPanel } from "../questionPanel/QuestionPanel";


export const MainMenu = () => {
    const questionPanel = new QuestionPanel()
    const modeRules = new ModeRules()
    const peopleImageComponent = renderComponentIntoSelectedTagID(
      peopleImage('../../static/assets/img/modes/people/36.jpg'),
      'swquiz-header'
    )
    const gameNavComponent = renderComponentIntoSelectedTagID(
      gameNavigation(questionPanel, modeRules),
      'swquiz-game-intro'
    )
    const questionPanelComponent = renderComponentIntoSelectedTagID(
      questionPanel.render(),
      'swquiz-game-intro'
    )
    const modeRulesPanelComponent = renderComponentIntoSelectedTagID(
      modeRules.render(),
      'swquiz-game-intro'
    )
    const iconButtonComponent = renderComponentIntoSelectedTagID(
      iconButton('Hall of fame', ''),
      'swquiz-game-btns'
    )
    const buttonPlayComponent = renderComponentIntoSelectedTagID(
      buttonPlay('play the game'),
      'swquiz-game-btns'
    )
  }
  