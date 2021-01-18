import {
    buttonPlay
} from '../buttonPlay/buttonPlay.js';
import {
    quizSummary
} from './testAnswers';
import {
    isCorrectAnswer
} from '../../domain/functions/isCorrectAnswer/isCorrectAnswer.js'


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

const generateItemsList = (quizSummary, component) => {
    quizSummary.forEach(el => {
        component.querySelector('ul').appendChild(listItem(el.image, el.correct, el.user, el.computer));
    });
}

export const gameOver = (userAnswers, computerAnswers, onClick) => {
    let component = document.createElement('div');
    let userQuestionsCount = userAnswers.length;
    let computerQuestionsCount = computerAnswers.length;
    let correctUserAnswers = userAnswers.filter(answer => answer.isCorrect);
    let correctComputerAnswers = computerAnswers.filter(answer => answer.isCorrect);

    component.className = 'game-over__container';
    component.innerHTML = `
    <div class="game-over__info">
        <h1>GAME OVER</h1>
        <p>The force is strong in you young Padawan! 
        During 1 minute you have answered ${correctUserAnswers.length} / ${userQuestionsCount} questions. And Google quessed ${correctComputerAnswers.length} / ${computerQuestionsCount}</p>
    </div>
    <div class="game-over__answers">
        <img class="yodaImg" src="../../../static/assets/ui/MasterYodaLeft.png">
        
            <div class="answers__list">
            <ul>
                <li class="answers__list-item list__head"><span></span><span>Correct</span><span>You</span><span>Computer</span></li>
            </ul>
        </div>
    </div>
    <form class="game-over__form">
        <input type="text" id="name" name ="name" required>
        <label for"name">Please fill your name in order to receive eternal glory in whole Galaxy!</label>
    </form>`

    component.querySelector('form').appendChild(buttonPlay('MAY THE FORCE BE WITH YOU!'), onClick);

    generateItemsList(quizSummary, component);


    component.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        let inputValue = document.querySelector("input").value;
        let userScore = correctUserAnswers.length;
        onClick(inputValue, userScore);
        component.parentElement.removeChild(component);
    });


    return component;
}


export const userAnswers = (quizSummary) => {
    let answers = [];
    quizSummary.forEach(q => {
        let playerAnswer = q.user;
        let correctAnswer = q.correct
        answers.push({
            'answer': q.user,
            'isCorrect': isCorrectAnswer(playerAnswer, correctAnswer)
        });
    });
    return answers;
}
export const computerAnswers = (quizSummary) => {
    let answers = [];
    quizSummary.forEach(q => {
        let playerAnswer = q.computer;
        let correctAnswer = q.correct
        answers.push({
            'answer': q.user,
            'isCorrect': isCorrectAnswer(playerAnswer, correctAnswer)
        });
    });
    return answers;
}