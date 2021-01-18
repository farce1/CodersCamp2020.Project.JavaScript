import { hideElement, renderComponent } from "../../utils/functions"


    const componentHTMLTemplate = (rules, title) => `
    <div id="swquiz-mode" style="display: flex; flex-direction: column">
        <div id="swquiz-mode-inner" class="swquiz-mode">
            <div class="swquiz-question-image-bg"></div>
            <div style="width: 2rem"></div>
            <div id="swquiz-mode-menu" class="swquiz-mode-menu">
                <div class="swquiz-mode-title"><p id="swquiz-mode-title-text">${title}</p></div>
                <div id="swquiz-mode-content" class="swquiz-mode-content">
                    <h2>Mode Rules</h2>
                    <p id="swquiz-mode-rules-text">${rules}</p>
                </div>
                <div class="sw-quiz-mode-buttons">
                    <button id="swquiz-mode-hall-of-fame-button" class="sw-quiz-mode-button-secondary" data-testid="hall-of-fame-button">Hall of fame</button>
                    <div style="width: 2rem"></div>
                    <button class="sw-quiz-mode-button-play" id="play-the-game-button" data-testid="play-the-game-button">PLAY THE GAME</button>
                </div>
            </div>
        </div>
        <button id="swquiz-settings-button" data-testid="swquiz-settings-button" class="sw-quiz-mode-button-secondary" style="align-self: flex-start; margin-top: 2rem; margin-left: 6rem">Settings</button>
    </div>
    `

export const MainMenu = () => {

    const component = componentHTMLTemplate('rules','title');
    const menu = {
        
        onPlayGame () {
            
        },
        
        render () {
            return component;
        },
        
        hide () {
            component.style.display = 'none';
            return component;
        }
    }
    return menu;

}