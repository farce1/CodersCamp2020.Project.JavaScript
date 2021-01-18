import {
    buttonPlay
} from '../buttonPlay/buttonPlay.js';
import {
    answersSummary
} from '../gameOver/answersTemplate.js'

const listItem = (image, correctAnswer, userAnswer, computerAnswer) => {
    const itemTemplate = document.createElement('li');
    itemTemplate.className = "answers__list-item";

    itemTemplate.innerHTML = `
    <img src="${image}">
    <span>${correctAnswer}</span>
    <span>${userAnswer}</span>
    <span>${computerAnswer}</span>
    `;
    let answers = itemTemplate.getElementsByTagName("span");
    correctAnswer === userAnswer ? answers[1].classList.add('correct') : answers[1].classList.add('incorrect');
    correctAnswer === computerAnswer ? answers[2].classList.add('correct') : answers[2].classList.add('incorrect');

    return itemTemplate;
}

const generateItemsList = (answersSummary, component) => {
    answersSummary.forEach(el => {
        component.querySelector('ul').appendChild(listItem(el.image, el.correct, el.user, el.computer));
    });
}

export const gameOver = (userAnswers, computerAnswers, onClick) => {
    let component = document.createElement('div');
    let correctUserAnswers = userAnswers.filter(answer => answer.isCorrect);
    let correctComputerAnswers = computerAnswers.filter(answer => answer.isCorrect);

    component.className = 'game-over__container';
    component.innerHTML = `
    <div class="game-over__info">
        <h1>GAME OVER</h1>
        <p>The force is strong in you young Padawan! 
        During 1 minute you have answered ${correctUserAnswers.length} / 23 questions. And Google quessed ${correctComputerAnswers.length} / 23</p>
    </div>
    <div class="game-over__answers">
        <img class="yodaImg" src="../../../static/assets/ui/MasterYodaLeft.png">
        
            <div class="answers__list">
            <ul>
                <li class="answers__list-item list__head"><span></span><span>Answer</span><span>You</span><span>Computer</span></li>
            </ul>
        </div>
    </div>
    <form class="game-over__form">
        <input type="text" id="name" name ="name" required>
        <label for"name">Please fill your name in order to receive eternal glory in whole Galaxy!</label>
    </form>`
    component.querySelector('form').appendChild(buttonPlay('MAY THE FORCE BE WITH YOU!'), onClick);
    generateItemsList(answersSummary, component)

    return component;
}